'use client';

import { useState } from 'react';

export function Interest() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('https://formspree.io/f/mnqkwqpr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-070F2B">
      <div className="max-w-md w-full text-center bg-white shadow-lg p-8 rounded-2xl">
        <h1 className="text-indigo-950 text-3xl font-bold mb-4">Say hi!</h1>
        {!submitted ? (
          <p className="text-indigo-950 mb-6">Let's get in touch</p>
        ) : (
          <p className="text-purple-600 font-semibold">
            Thanks for reaching out! 🎉<br /> I will get back to you soon.
          </p>
        )}
        {!submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border rounded-lg text-black"
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="p-3 border rounded-lg text-black"
              rows={4}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
