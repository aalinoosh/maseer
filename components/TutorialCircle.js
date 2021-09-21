import React, { FC, ReactElement, useContext } from "react";
import Container from "./Container";
import tutorialcircle from "../data/tutorialcircle.json";
import makeAssetURL from "../lib/makeAssetURL";
import { PageContext } from "../context/PageContext";
import Appear from "./Appear";
import HTMLText from "./HTMLText";
import Image from "next/image";
import Grid from "./Grid";
import Cta from "./Cta";

// type Props = {
//   title: string;
//   text: string;
//   ctaLink: string;
//   ctaLabel: string;
//   image: APIAsset;
//   backgroundImage: string;
// };

// const TutorialCircle = ({
//   title,
//   text,
//   ctaLink,
//   ctaLabel,
//   image,
//   backgroundImage,
const TutorialCircle = () => {
  const { title, text, ctaLabel, ctaLink, backgroundImage, image } =
    tutorialcircle.props;
  // const { isMobile } = useContext(PageContext);
  // const bgMob = {
  //   backgroundImage: `url(${makeAssetURL({
  //     asset: backgroundImage,
  //     size: 700,
  //   })})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "-50px 20%",
  //   backgroundSize: "contain",
  // };
  // const bgDesk = {
  //   backgroundImage: `url(${makeAssetURL({
  //     asset: backgroundImage,
  //     size: 700,
  //   })})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "8vw 8vh",
  // };

  return (
    <div
      className="bg-white pb-20"
      //  style={isMobile ? bgMob : bgDesk}
    >
      <Container className="md:py-8 ">
        <Grid>
          <div
            className="col-span-4  mt-10 md:col-span-6"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <Appear className="py-1 md:pt-10 ">
              <Image
                classes="col-span-6  py-1 md:my-4  "
                src={image}
                width={700}
                height={520}
              />
            </Appear>
          </div>

          <div className="col-span-4 md:mt-20 mb-4 md:col-span-6  md:col-start-8  mt-10 md:pt-10">
            <Appear>
              <h1 className="primaryLight leading-9 text-bigger3 md:text-big4  md:leading-4">
                {title}
              </h1>
              <HTMLText text={text} className=" py-6" />
              <Cta href={ctaLink} className=" text-secondary font-primaryBold ">
                {ctaLabel}
              </Cta>
            </Appear>
          </div>
        </Grid>
      </Container>
    </div>
  );
};
export default TutorialCircle;
