import React, { useState, useEffect } from 'react';

const DailyLeetCodeQuestions = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/daily-leetcode/defaultSet.json');
      const data = await response.json();
      selectRandomQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const selectRandomQuestions = (questionsData) => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 3));
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '15px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    marginBottom: '15px',
  };

  const titleStyle = {
    margin: '0 0 10px 0',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const difficultyStyle = {
    margin: '0',
    fontSize: '14px',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'block',
    margin: '20px auto 0',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      {selectedQuestions.map((question) => (
        <a
          key={question.question_id}
          href={`https://leetcode.com/problems/${question.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
        >
          <div style={cardStyle}>
            <h2 style={titleStyle}>
              #{question.question_id}: {question.title}
            </h2>
            <p style={{ ...difficultyStyle, color: '#FFA116' }}>
              Difficulty: {['Easy', 'Medium', 'Hard'][question.difficulty - 1]}
            </p>
          </div>
        </a>
      ))}
      <button onClick={fetchQuestions} style={buttonStyle}>
        New Questions
      </button>
    </div>
  );
};

export default DailyLeetCodeQuestions;
