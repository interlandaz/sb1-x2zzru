import React from 'react';
import { MessageSquare, Brain, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
      title: "Təbii Ünsiyyət",
      description: "Ana dilimizdə rahat və təbii ünsiyyət qurun."
    },
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: "Ağıllı Analiz",
      description: "Mürəkkəb məsələlərin süni intellekt əsaslı təhlili."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-indigo-600" />,
      title: "Yaradıcı Həllər",
      description: "İnnovativ həllər və ideyalar təklif edir."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto w-full">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-2">{feature.icon}</div>
          <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;