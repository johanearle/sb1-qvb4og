import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import { IntentData, intentData } from './data/intents';

function App() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="fixed bottom-4 right-4">
        {showChat ? (
          <ChatInterface intentData={intentData} onClose={toggleChat} />
        ) : (
          <button
            onClick={toggleChat}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg"
          >
            <MessageSquare size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;