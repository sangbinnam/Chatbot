import React from 'react';
import { List, Icon, Avatar } from 'antd';

function Message(props) {
  const isUser = props.who === '나';
  const avatarStyle = { marginRight: '0.5rem' };
  const messageContainerStyle = { maxWidth: '80%', textAlign: isUser ? 'right' : 'left' };
  const listItemStyle = {
    padding: '1rem',
    borderRadius: '1rem',
    background: isUser ? '#e6f7ff' : '#f0f0f0',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: isUser ? 'row-reverse' : 'row' }}>
      <div style={avatarStyle}>
        <Avatar icon={<Icon type={isUser ? 'user' : 'robot'} />} />
      </div>
      <div style={messageContainerStyle}>
        <List.Item style={listItemStyle}>
          <List.Item.Meta
            title={<span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{props.who}</span>}
            description={<p style={{ fontSize: '1rem', margin: 0 }}>{props.text}</p>}
          />
        </List.Item>
      </div>
    </div>
  );
}

export default Message;