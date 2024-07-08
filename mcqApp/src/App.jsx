import { useState } from "react";
import Question from "./components/question";
import questions from "./constants/questions";
import Result from "./components/result";
function App() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const handleNextQuestion = (isCorrect) => {
    setCurrQuestion(currQuestion + 1);

    if (isCorrect && currQuestion <= 9) setScore(score + 1);

    userAnswers.push(isCorrect);
    setUserAnswers(userAnswers);
    console.log(userAnswers);
  };

  return (
    <div className="text-center">
      {currQuestion < questions.length && (
        <Question
          question={questions[currQuestion]}
          onAnswerClick={handleNextQuestion}
    
          curr={currQuestion+1}
        />
      )}
      {currQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          score={score}
        />
      )}
    </div>
  );
}

export default App;
