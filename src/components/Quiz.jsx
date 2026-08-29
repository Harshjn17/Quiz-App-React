import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which is the largest planet in our Solar System?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      id: 3,
      question: "How many continents are there in the world?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      id: 4,
      question: "Which is the longest river in the world?",
      options: ["Amazon River", "Nile", "Ganges", "Yangtze"],
      answer: "Nile",
    },
    {
      id: 5,
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      id: 6,
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Thailand", "South Korea"],
      answer: "Japan",
    },
    {
      id: 7,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      id: 8,
      question: "Which gas do humans need to breathe?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: "Oxygen",
    },
    {
      id: 9,
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      answer: "6",
    },
    {
      id: 10,
      question: "Which is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2",
    },
  ];

  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [isResult, setisResult] = useState(false);
  const [quizScreen, setquizScreen] = useState(true)
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0)

  let question = questions[currentQuestionIndex];

  const nextQuestion = () => {
    setSelectedOption(null);

    if (currentQuestionIndex === 9) {
      setisResult(true);
      setquizScreen(false);
      return;
    }
    setcurrentQuestionIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setisResult(!isResult);
    setquizScreen(true);
    setcurrentQuestionIndex(0)
    setScore(0)
  }

  const handleButtons = (option) => {
      setSelectedOption(option)

      if(option === question.answer) {
        setScore((prev) => prev + 1);
      }

  }

  return (
    <div id="container">
      {quizScreen && <div id="quiz-screen">
        <div id="heading">
          <h2>Quiz App</h2>
        </div>
        <div id="question-text">
          <h3>
            {question.id}. {question.question}
          </h3>
        </div>
        <div id="buttons-container">
          {question.options.map((option) => {
            return (
            <button key={option}
              disabled={selectedOption !== null}
              className={selectedOption === option 
              ? option === question.answer
              ? "correct" : "wrong"
              : ""
            }
            onClick={(e) => handleButtons(option)}
            >{option}</button>
          )
          })}
        </div>
        <div id="bottom">
          <button onClick={nextQuestion}
            disabled={selectedOption === null}
            >Next
          </button>
          <p>
            {currentQuestionIndex + 1} of {questions.length} questions
          </p>
        </div>
      </div>}
      {isResult && (
        <>
          <div id="heading">
            <h2>Quiz App</h2>
          </div>
          <div id="result-screen">
            <h3>You Scored {score} of {questions.length}</h3>
            <div id="btn">
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
