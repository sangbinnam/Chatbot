import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage } from '../_actions/message_actions';
import Message from './Sections/Message';
import { List, Icon, Avatar } from 'antd';
import Card from "./Sections/Card";
function Chatbot() {
  const dispatch = useDispatch();
  const messagesFromRedux = useSelector(state => state.message.messages)

  useEffect(() => {
    eventQuery('Welcome')
  }, [])

  const textQuery = async (text) => {     
    let conversation = {
      who: '나',
      content: {
        text: {
          text: text
        }
      }
    }

    dispatch(saveMessage(conversation))

    const textQueryVariables = {
      text
    }
    try {
      const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)

      for (let content of response.data.fulfillmentMessages) {
        conversation = {
          who: '하르방',
          content: content
        }
        dispatch(saveMessage(conversation))
      }
    } catch (error) {
      conversation = {
        who: '하르방',
        content: {
          text: {
            text: "에러가 발생했습니다. 문제를 확인해주세요."
          }
        }
      }
      dispatch(saveMessage(conversation))
    }
  }

  const eventQuery = async (event) => {
    const eventQueryVariables = {
      event
    }
    try {
      const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
      for (let content of response.data.fulfillmentMessages) {
        let conversation = {
          who: '하르방',
          content: content
        }
        dispatch(saveMessage(conversation))
      }
    } catch (error) {
      let conversation = {
        who: '하르방',
        content: {
          text: {
            text: "에러가 발생했습니다. 문제를 확인해주세요."
          }
        }
      }
      dispatch(saveMessage(conversation))
    }
  }

  const keyPressHanlder = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert('하르방에게 아무 말이나 걸어주세요!')
      }
      textQuery(e.target.value)
      e.target.value = "";
    }
  }

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />)
  }

  
  const renderOneMessage = (message, i) => {
    if (message.content && message.content.text && message.content.text.text) {
      return <Message key={i} who={message.who} text={message.content.text.text} />
    } else if (message.content && message.content.payload.fields.card) {
      const AvatarSrc = message.who === '하르방' ? <Icon type="robot" /> : <Icon type="smile" />
      return (
        <div>
          <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
              avatar={<Avatar icon={AvatarSrc} />}
              title={message.who}
              description={renderCards(message.content.payload.fields.card.listValue.values)}
            />
          </List.Item>
        </div>
      )
    }
  }

  const renderMessage = (returnedMessages) => {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return renderOneMessage(message, i);
      })
    } else {
      return null;
    }
  }

  return (
    <div style={{ backgroundColor: '#fff', height: 700, width: 700, border: '3px solid black', borderRadius: '7px' }}>
      <div style={{ height: 644, width: '100%', overflow: 'auto', backgroundColor: '#fff', padding: '1rem' }}>
        {renderMessage(messagesFromRedux)}
      </div>
      <input
        style={{
          margin: 0,
          width: '100%',
          height: 50,
          borderRadius: '4px',
          padding: '5px',
          fontSize: '1rem'
        }}
        placeholder="Send a message..."
        onKeyPress={keyPressHanlder}
        type="text"
      />
    </div>
  )
}

export default Chatbot;