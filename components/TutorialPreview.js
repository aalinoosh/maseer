import React, { FC, ReactElement } from "react";
import HTMLText from "./HTMLText";
import Appear from "./Appear";
import Image from "next/image";
import Grid from "./Grid";
import Cta from "./Cta";

// type Props = {
//   item: ListItem;
// };

const TutorialPreview = ({ item }) => {
  const { title, text, ctaLabel, ctaLink, image } = item;
  return (
    <div>
      <Grid className=" mb-8  pb-8  border-b-1 border-gray-200 md:divide-y-12">
        <div className=" col-span-4  md:col-span-4">
          <Appear className="py-1">
            <Image
              classes="col-span-6 py-1 my-4 "
              src={image}
              width={500}
              height={320}
            />
          </Appear>
        </div>
        <div className="col-span-4 md:col-span-8  md:col-start-5">
          <Appear>
            <h2 className="font-primaryNormal text-bigger1  md:text-big2">
              {title}
            </h2>

            <HTMLText text={text} className=" py-6" />
            <Cta href={ctaLink} className=" text-secondary font-primaryBold">
              {ctaLabel}
            </Cta>
          </Appear>
        </div>
      </Grid>
    </div>
  );
};

export default TutorialPreview;
