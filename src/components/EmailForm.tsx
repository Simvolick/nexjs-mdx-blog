"use client";

import { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Get the email from the form.
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const emailValue = formData.get('email') as string;

      // Send the email to the API.
      const response = await fetch('/api/airtable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      });

      if (response.ok) {
        setMessage('Successfully subscribed!');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="px-4 pt-3 pb-4 border-b -mx-4 border-gray-400">
        <div className="max-w-xl mx-auto px-10">
          <h2 className="text-xl text-left inline-block font-semibold text-gray-800">Join My Newsletter</h2>
          <p className="text-gray-700 text-xs pl-px">
            ✅ Get to know latest tips and tricks to productivity, marketing and being human 📬
          </p>
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="flex items-center">
              <input 
                type="email" 
                id='email' 
                name='email' 
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="w-full px-2 py-4 mr-2 bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none" 
                required
                disabled={isSubmitting}
              />
              <button 
                className="bg-blue-600 text-gray-200 px-5 py-2 rounded shadow -ml-32 disabled:opacity-50" 
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </form>
          {message && (
            <p className={`mt-2 text-sm ${message.includes('Successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailForm; 