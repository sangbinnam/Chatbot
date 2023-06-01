import React from "react";
import { Typography, Icon } from 'antd';
import Chatbot from './Chatbot/Chatbot';

const { Title } = Typography;

function App() {
  return (
    <div style={{ backgroundImage: 'url()', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#F8F8F8', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Title level={2} style={{ color: '#FFFFFF', fontWeight: "bolder", marginBottom: 0, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>하르방 챗봇&nbsp;<Icon type="robot" style={{ color: '#7fffd4', fontSize: '2rem' }} /></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Chatbot />

        
      </div>
    </div>
  );
}

export default App;