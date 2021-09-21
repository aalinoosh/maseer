import React, { FC, ReactElement } from "react";
import Appear from "./Appear";
import Collapsible from "./Collapsible";


const FAQSCategoryItem = ({
  question,
  answer,
  idNumber,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <Appear>
        <div className="">
          <div className={` flex flex-row col-span-4  md:col-span-12 `}>
            <Collapsible
              close
              className=""
              header={question}
              idNumber2={idNumber}
            >
              {answer}
            </Collapsible>
          </div>
        </div>
      </Appear>
    </div>
  );
};

export default FAQSCategoryItem;
