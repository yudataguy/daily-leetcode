import React from 'react';
import DailyLeetCodeQuestions from './components/DailyLeetCodeQuestions';

function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#F3F3F3',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <header style={{
        width: '100%',
        backgroundColor: '#2D333B',
        color: 'white',
        textAlign: 'center',
        padding: '15px 0',
        marginBottom: '20px',
      }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>LeetCode Daily Challenge</h1>
      </header>
      <main style={{ width: '100%', maxWidth: '400px' }}>
        <DailyLeetCodeQuestions />
      </main>
    </div>
  );
}

export default App;
