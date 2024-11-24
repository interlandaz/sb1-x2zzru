import React, { useState } from 'react';
import { Brain, Send, Loader2, AlertCircle } from 'lucide-react';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true
});

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    setError('');
    
    try {
      setResponse('Hazırda sistemimiz texniki xidmətdədir. Tezliklə yenidən aktiv olacaq. Anlayışınız üçün təşəkkür edirik!');
    } catch (err: any) {
      console.error('Error:', err);
      setError('Üzr istəyirik, bir xəta baş verdi. Zəhmət olmasa bir az sonra yenidən cəhd edin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="h-5 w-5 text-indigo-600" />
          <p className="text-sm text-gray-600">Tor-a sual verin...</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 rounded-lg flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
        
        {response && !error && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{response}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-2">
          <textarea 
            className="w-full p-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-transparent resize-none text-sm"
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Məsələn: Azərbaycanın tarixi haqqında məlumat ver..."
            disabled={isLoading}
          />
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !message.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Gözləyin...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Göndər
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;