import React, { useState } from 'react';
import {AiFillWechat} from 'react-icons/ai'

const ChatButtonFloater = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="fixed bottom-4 mb-20 right-4 z-50">
      <button
        className="w-14 h-14 text-white text-xl border border-black hover:scale-105 transition duration-500 rounded-full bg-yellow-500  shadow"
        onClick={toggleChat}
      >
        <AiFillWechat className='ml-2 text-black  text-4xl'/>
      </button>
      {chatOpen && (
        <div className="fixed bottom-4 right-20 w-60 max-h-96 bg-white border border-gray-300 shadow p-4 overflow-y-auto z-40">
          
          <p>Chat Window</p>
        </div>
      )}
    </div>
  );
};

export default ChatButtonFloater;
