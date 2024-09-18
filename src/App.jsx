import { useState } from 'react'

const questions = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    text: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    id: 3,
    text: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  }
]

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [quizCompleted, setQuizCompleted] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
      } else {
        setQuizCompleted(true);
      }

    }
    if (quizCompleted) {
      return (
        <div className="quiz-container">
          <div className="quiz-card">
            <h2>Quiz Completed!</h2>
            <p>Your score: {score} out of {questions.length}</p>
            <button 
              className="submit-btn" 
              onClick={() => {
                setCurrentQuestionIndex(0)
                setScore(0)
                setQuizCompleted(false)
                setSelectedAnswer("")
              }}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )
    }
  
  
  return (
    <>
    

      <div className="quiz-container">
      <div className="quiz-card">
        <form onSubmit={handleSubmit}>
          <div className="question">
            {currentQuestion.text}
          </div>
          <div className="answers">
            {currentQuestion.options.map((option, index) => (
              <div className="answer" key={index}>
                <input 
                  type="radio" 
                  id={`option-${index}`} 
                  name="answer" 
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          <button type="submit" className="submit-btn" disabled={!selectedAnswer}>
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
