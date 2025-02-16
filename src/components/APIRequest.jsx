import { useState, useEffect } from 'react';
import axios from 'axios';

function APIRequest({ text }) {
  const [summary, setSummary] = useState(''); 

  useEffect(() => {
    if (!text) return; 

    const fetchSummary = async () => {
        const url = '/api/chat';
      const data = {
        messages: [
          {
            content: `summarize this text: ${text}`, 
            role: 'user'
          }
        ],
        model: 'deepseek-ai/DeepSeek-V3',
        max_tokens: '1024'
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      try {
        const response = await axios.post(url, data, config);
        console.log("API Response:", response.data);
        setSummary(response.data); 
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchSummary();
  }, [text]);

  return (
    <div>
    <h3>Summarized Text:</h3>
    <pre>{summary || "Waiting for summary..."}</pre>
  </div>
  );
}

export default APIRequest;
