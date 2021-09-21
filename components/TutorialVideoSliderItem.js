import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Appear from "./Appear";
import Cta from "./Cta";

// type Props = {
//   item: ListItem;
// };

const TutorialVideoSliderItem = ({ item }) => {
  const { title, image, ctaLink, ctaLabel } = item;
  return (
    <div>
      <div className="w-72 mb-14 md:w-24 pb-4">
        <Appear>
          <Image
            classes="col-span-6 py-1 my-4  border-2 border-yellow-900 "
            src={image}
            width={500}
            height={320}
          />

          <h2 className="font-primaryLight my-8 leading-6 text-bigger1   md:font-primaryNormal md:text-bigger2  md:leading-7	">
            {title}
          </h2>
          <Cta href={ctaLink} className=" text-secondary font-primaryBold ">
            {ctaLabel}
          </Cta>
        </Appear>
      </div>
    </div>
  );
};

export default TutorialVideoSliderItem;
