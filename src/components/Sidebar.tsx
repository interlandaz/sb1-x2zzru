import React from 'react';
import { X, Brain, LogIn, UserPlus, HelpCircle, Info, Mail, Menu } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onMouseLeave={onClose}
      >
        <div className="h-full flex flex-col p-4">
          {/* Logo Section */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6" 
                style={{ 
                  background: 'linear-gradient(45deg, #6366f1, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              />
              <span className="font-semibold text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tor
              </span>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Auth Section */}
          <div className="space-y-2 mb-8">
            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity">
              <UserPlus className="h-4 w-4" />
              Hesab yarat
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <LogIn className="h-4 w-4" />
              Daxil ol
            </button>
          </div>
          
          {/* Main Content - Flex-1 removed to push content down */}
          <div className="mt-auto mb-4">
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Info className="h-4 w-4" />
                Haqqımızda
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Mail className="h-4 w-4" />
                Əlaqə
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <HelpCircle className="h-4 w-4" />
                Kömək & Dəstək
              </a>
            </div>
          </div>

          {/* Footer Menu */}
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <Menu className="h-4 w-4" />
              <span>© 2024 Tor. Bütün hüquqlar qorunur.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;