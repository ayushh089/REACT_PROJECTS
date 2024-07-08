import React from "react";

function Result({ questions, userAnswers, score }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-3xl font-bold ">Result</div>
      <div className="text-3xl font-bold mt-2 mb-8">
        Score: {score}/{userAnswers.length}
      </div>
      <div>
        <ul className="flex flex-col items-center justify-center">
          {questions.map((question, index) => {
            const isCorrect =
              userAnswers[index] &&
              questions[index].answerOptions.find((opt) => opt.isCorrect);
            return (
              <li
                key={index}
                className={`mb-4 flex items-center ${
                  isCorrect ? "text-green-800" : "text-red-600"
                }`}
              >
                <div className="font-bold">
                  Q{index + 1}. {question.question}
                </div>
                <div className="ml-4">
                  {!userAnswers[index] &&
                    questions[index].answerOptions.map((opt, idx) => {
                      if (opt.isCorrect) {
                        return (
                          <div
                            className="font-bold underline shadow-sm "
                            key={idx}
                          >
                            Answer: {opt.text}
                          </div>
                        );
                      }
                    })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Result;
