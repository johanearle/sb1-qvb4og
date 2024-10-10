import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { IntentData } from '../data/intents';

interface ChatInterfaceProps {
  intentData: IntentData[];
  onClose: () => void;
}

interface Message {
  text: string;
  isUser: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ intentData, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Add welcome message when the chat is opened
    const welcomeMessage: Message = {
      text: "Welcome to Stationery Hub! How can I assist you today?",
      isUser: false,
    };
    setMessages([welcomeMessage]);
  }, []);

  const findBestMatch = (input: string, phrases: string[]): number => {
    const inputLower = input.toLowerCase();
    return phrases.reduce((maxScore, phrase) => {
      const phraseLower = phrase.toLowerCase();
      const score = inputLower.split(' ').filter(word => phraseLower.includes(word)).length;
      return Math.max(maxScore, score);
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage: Message = { text: input, isUser: true };
    setMessages([...messages, userMessage]);

    const matchedIntent = intentData.reduce((bestMatch, intent) => {
      const score = findBestMatch(input, intent.phrases);
      return score > bestMatch.score ? { intent, score } : bestMatch;
    }, { intent: null as IntentData | null, score: 0 });

    const botResponse: Message = {
      text: matchedIntent.intent
        ? matchedIntent.intent.response
        : "I'm sorry, I don't understand. Can you please rephrase your question?",
      isUser: false,
    };

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500);

    setInput('');
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col">
      <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h2 className="text-xl font-semibold">Stationery Hub Assistant</h2>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={24} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.isUser ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.isUser
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;