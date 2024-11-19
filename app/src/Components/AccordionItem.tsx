import React, { SetStateAction } from "react";

import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
const AccordionItem = ({
  question,
  answer,
  setActiveQuestions,
  activeQuestions,
  id,
}: {
  question: string;
  answer: string;
  setActiveQuestions: React.Dispatch<SetStateAction<number[]>>;
  activeQuestions: number[];
  id: number;
}) => {
  const isActive = activeQuestions.includes(id);

  const makeQuestionActive = () => {
    setActiveQuestions([...activeQuestions, id]);
  };

  const makeQuestionInactive = () => {
    setActiveQuestions(
      activeQuestions.filter((questionId) => id != questionId)
    );
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    const pressedKey = e.key;
    if (pressedKey === "Enter") {
      if (!isActive) makeQuestionActive();
      else makeQuestionInactive();
    }
    console.log(pressedKey);
  };
  
  return (
    <div className="w-[95%] mx-2">
      <span
        className="flex justify-between items-center w-full"
        tabIndex={0}
        onKeyDown={handleEnterKeyPress}
        onClick={(e) => {
          isActive ? makeQuestionInactive() : makeQuestionActive();
        }}
      >
        <p className="my-5 w-full font-bold cursor-pointer text-darkPurple hover:text-purple-800">
          {question}
        </p>
        {isActive ? (
          <img
            tabIndex={0}
            className="cursor-pointer hover:opacity-75"
            src={minusIcon}
            onClick={makeQuestionInactive}
            onKeyDown={handleEnterKeyPress}
            width={25}
            height={25}
            alt="hide answer"
          />
        ) : (
          <img
            tabIndex={0}
            className="cursor-pointer"
            onKeyDown={handleEnterKeyPress}
            src={plusIcon}
            onClick={makeQuestionActive}
            width={25}
            height={25}
            alt="Show answer"
          />
        )}
      </span>
      {isActive && <p className="text-[#777777] mb-2">{answer}</p>}
    </div>
  );
};

export default AccordionItem;
