import React, { useState } from "react";

function Question({ question, onAnswerClick, curr }) {
  // console.log(question);
  //   const [score, setScore] = useState(0);
  //   const onAnswerClick = (isCorrect) => {
  //     if (isCorrect) {
  //       setScore(score + 1);
  //     }
  //   };
  return (
    <>
          <div className="text-3xl font-bold mt-5 mb-9">Quizee World</div>

      <div className="bg-gray-200 rounded-lg p-6 mx-auto w-1/2 shadow-md">
        <div className="text-xl font-bold mb-4">{question.question}</div>
        <div className="grid grid-cols-2 gap-4">
          {question.answerOptions.map((opt) => (
            <button
              key={opt.text}
              className="bg-blue-300 hover:bg-blue-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => onAnswerClick(opt.isCorrect)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5">{curr}/15</div>
    </>
  );
}

export default Question;
