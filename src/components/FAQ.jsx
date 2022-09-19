import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

function FAQ({ questions, answers }) {
  const [IsAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article
      className="faq"
      onClick={() => setIsAnswerShowing(!IsAnswerShowing)}
    >
      <div>
        <h4>when Should i excersise?</h4>
        <button className="faq__icon">
          {IsAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div>
        {IsAnswerShowing && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            repellat vero explicabo perferendis assumenda aliquid.
          </p>
        )}
      </div>
    </article>
  );
}

export default FAQ;
