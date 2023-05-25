import React from "react";
import { Typography, Icon } from 'antd';
import Chatbot from './Chatbot/Chatbot';
const { Title } = Typography;

function App() {
  return (
    <div style={{ backgroundImage: 'url("https://th.bing.com/th/id/R.a302355a23a738184323eed072133b41?rik=1cOFF1yC1lYvkQ&riu=http%3a%2f%2fwww.doopedia.co.kr%2f_upload%2fimage4%2fslide%2f201711%2f16%2f20171116212440986d9accc66c9e3c7ad21009ff9f43fd85cEcGO%2f20171116212440986d9accc66c9e3c7ad21009ff9f43fd85cEcGO_thumb_1200.JPG&ehk=%2fO%2fTd36t5xUjrzT96Vm%2fRaa%2bfWL5rT%2bIpXasBpWKzsA%3d&risl=&pid=ImgRaw&r=0")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#F8F8F8', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Title level={2} style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: 0, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>하르방 챗봇&nbsp;<Icon type="robot" style={{ color: '#7fffd4', fontSize: '2rem' }} /></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Chatbot />

        
      </div>
    </div>
  );
}

export default App;