import React, { useState } from "react";
import starIcon from "../assets/images/icon-star.svg";
import questions from "../assets/Questions";
import AccordionItem from "./AccordionItem";
const Accordion = () => {
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);
  return (
    <div className="w-[100%] h-[100%] absolute left-0 top-0 flex justify-center">
      <div className="sm:w-[40%] w-[80%] shadow-lg bg-white mt-24 h-[500px] rounded-lg p-4 overflow-y-auto overflow-x-auto">
        <div className="flex">
          <img src={starIcon} width={40} height={30} />
          <h1 className="text-[40px] w-[70%] font-bold ml-3">FAQ</h1>
        </div>
        {questions.map(
          (item: { answer: string; question: string; id: number }) => {
            return (
              <AccordionItem
                key={item.id} 
                question={item.question}
                answer={item.answer}
                activeQuestions={activeQuestions}
                setActiveQuestions={setActiveQuestions}
                id={item.id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Accordion;
