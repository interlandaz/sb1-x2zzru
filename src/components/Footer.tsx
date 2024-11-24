import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-y-2">
          <div className="flex items-center gap-1">
            <Brain className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-gray-900">Tor AI</span>
          </div>
          <div className="text-xs text-gray-500 text-center">
            © 2024 Tor. Bütün hüquqlar qorunur.
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-900">Haqqımızda</a>
            <a href="#" className="hover:text-gray-900">Əlaqə</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;