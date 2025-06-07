"use client";

import { useState, useEffect } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  // Auto-clear success messages after 5 seconds
  useEffect(() => {
    if (messageType === 'success') {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [messageType]);

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Reset previous messages
    setMessage('');
    setMessageType('');
    
    // Validate email format
    if (!email.trim()) {
      setMessage('Please enter your email address.');
      setMessageType('error');
      return;
    }
    
    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/airtable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('🎉 Successfully subscribed! Welcome to the newsletter.');
        setMessageType('success');
        setEmail('');
      } else {
        // Handle different error types
        if (response.status === 400) {
          setMessage('Invalid email format. Please try again.');
        } else if (response.status === 500) {
          setMessage('Server error. Please try again later.');
        } else {
          setMessage(data.message || 'Something went wrong. Please try again.');
        }
        setMessageType('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setMessage('Network error. Please check your connection and try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="px-4 pt-3 pb-4 border-b  border-gray-400">
        <div className="max-w-xl mx-auto px-10">
          <h2 className="text-xl text-left inline-block font-semibold text-gray-800">Join My Newsletter</h2>
          <p className="text-gray-700 text-xs pl-px">
            ✅ Get to know latest tips and tricks to productivity, marketing and being human 📬
          </p>
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
                required
                disabled={isSubmitting}
                aria-describedby={message ? "email-message" : undefined}
              />
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap" 
                type="submit"
                disabled={isSubmitting || !email.trim()}
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </form>
          {message && (
            <div 
              id="email-message"
              className={`mt-3 p-2 rounded-md text-sm ${
                messageType === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
              role={messageType === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailForm; 