import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import Features from './components/Features';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      {/* Header with Logo */}
      <div className="p-4">
        <div className="inline-flex">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onMouseEnter={() => setIsSidebarOpen(true)}
          >
            <Brain className="h-6 w-6" 
              style={{ 
                background: 'linear-gradient(45deg, #6366f1, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            />
            <span className="font-semibold text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Tor
            </span>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Azərbaycan Dilində Süni İntellekt
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Tor ilə süni intellekt texnologiyalarını Azərbaycan dilində kəşf etməyə indi başla!
          </p>
        </div>

        <Features />
        
        <div className="flex-1 flex items-end pb-8">
          <ChatInterface />
        </div>
      </main>
      
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}

export default App;