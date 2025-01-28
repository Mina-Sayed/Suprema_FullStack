import React, { useState } from 'react';
import axios from 'axios';

interface ApiResponse {
  success: boolean;
  value: number | null;
  error: string | null;
}

export const App: React.FC = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post<ApiResponse>(
        `http://localhost:8888/sum?upto=${number}`
      );
      setResult(response.data);
    } catch (error) {
      setResult({
        success: false,
        value: null,
        error: 'Failed to fetch result'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Number Sum Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button 
          type="submit"
          disabled={loading}
          style={{ padding: '8px 16px' }}
        >
          Calculate
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '20px' }}>
          {result.success ? (
            <p>Sum: {result.value}</p>
          ) : (
            <p style={{ color: 'red' }}>Error: {result.error}</p>
          )}
        </div>
      )}
    </div>
  );
}
