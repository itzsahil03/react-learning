import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace with your actual backend URL
  const backendUrl = "http://localhost:8080/api/ask";

  const askChatGPT = async () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    setResponse('');
    setError('');

    try {
      const res = await axios.post(backendUrl, {
        question: question
      });

      setResponse(res.data.answer || "No response received.");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Ask ChatGPT</h1>
      <textarea
        rows="4"
        cols="60"
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <button onClick={askChatGPT} disabled={loading}>
        {loading ? 'Asking...' : 'Ask'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {response && (
        <div className="response-box">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;