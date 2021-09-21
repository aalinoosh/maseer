import React, { FC, ReactElement } from "react";
import { arrow } from "./Svg";
import Appear from "./Appear";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function ShowChild(cat, index) {
  const activele = document.getElementById(`active-${index}`);

  const elesfaq = document.getElementsByClassName("faqselected");
  for (let i = 0; i < elesfaq.length; i++) {
    elesfaq[i].classList.remove("faqselected");
  }
  activele.classList.add("faqselected");

  const eles = document.getElementsByClassName("otherhidden");
  for (let i = 0; i < eles.length; i++) {
    eles[i].classList.add("hidden");
  }
  const ele = document.getElementById(index);
  if (ele.classList.contains("hidden")) {
    ele.classList.remove("hidden");
  }
}

const FAQSCategory = ({ Category, index, active }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={() => ShowChild(Category, index)}
      onKeyDown={() => ShowChild(Category, index)}
      id={`active-${index}`}
      className={`col-span-4 borer-red-400  ${
        active === 0 ? "faqselected" : ""
      } flex justify-between  cursor-pointer border-b-1	py-8 hover:text-secondary hover:border-b-1 hover:border-secondary 
    
      
      `}
    >
      <Appear>
        <div className={`block`}>{Category.title}</div>
      </Appear>
      <Appear>
        <button
          type="button"
          className="cursor-pointe bg-transparent bg-no-repeat border-none overflow-hidden focus:outline-none "
        >
          <span>{arrow}</span>
        </button>
      </Appear>
    </div>
  );
};

export default FAQSCategory;
