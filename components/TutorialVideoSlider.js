import React, { useState, useEffect, useContext } from "react";
import Container from "./Container";
import videoslider from "../data/videoslider.json";
import ReactPlayer from "react-player";
import Appear from "./Appear";
import makeAssetURL from "../lib/makeAssetURL";
import HTMLText from "./HTMLText";
import Slider from "./Slider";
import TutorialVideoSliderItem from "./TutorialVideoSliderItem";
import Grid from "./Grid";
import Cta from "./Cta";
import { player, playerMobile } from "./Svg";
import { PageContext } from "../context/PageContext";

// type Props = {
//   title: string;
//   text: string;
//   ctaLink: string;
//   ctaLabel: string;
//   videoURL: string;
//   imagePoster: APIAsset;
//   backgroundImage: APIAsset;
//   items?: Array<ListItem>;
// };
// const TutorialVideoSlider = ({
//   title,
//   text,
//   backgroundImage,
//   ctaLink,
//   ctaLabel,
//   items,
//   videoURL,
//   imagePoster,
// }) => {

const TutorialVideoSlider = () => {
  const { isMobile } = useContext(PageContext);
  const [imgurl, setImgurl] = useState("");

  const {
    title,
    text,
    backgroundImage,
    ctaLink,
    ctaLabel,
    items,
    videoURL,
    imagePoster,
  } = videoslider.props;

  // useEffect(() => {
  //   if (typeof imagePoster !== "undefined") {
  //     const assetURL = makeAssetURL({
  //       asset: imagePoster,
  //       size: 1400,
  //     });
  //     setImgurl(assetURL);
  //   }
  // }, [imagePoster]);

  const bgMob = {
    backgroundImage:  `url(/images/sliderbg.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "30vw 0vh",
    backgroundSize: "contain",
  };
  const bgDesk = {
    backgroundImage:  `url(/images/sliderbg.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "45vw 0vh",
  };

  return (
    <div
      className="bg-indigo"
       style={isMobile ? bgMob : bgDesk}
    >
      <Container className=" py-12 md:py-22">
        <Grid>
          <div className="col-span-4 mt-4 md:col-span-4">
            <Appear>
              <h1 className="primaryLight leading-7	text-bigger3 md:text-big6  md:leading-4">
                {title}
              </h1>
              <HTMLText
                text={text}
                className="my-8 "
                fontStyle="text-bigger2"
              />

              <Cta href={ctaLink} className=" text-secondary font-primaryBold ">
                {ctaLabel}
              </Cta>
            </Appear>
          </div>

          <div className="col-span-4  mt-8 md:mt-4 md:col-span-7 md:col-start-6 md:row-start-1">
            <div className="relative  pt-56 w-full h-0 bg-withe ">
              <ReactPlayer
                className="absolute top-0 left-0 bg-withe "
                controls
                muted
                width="100%"
                height="80%"
                playing={true}
                loop={true}
                url={videoURL}
                playIcon={<button> {isMobile ? playerMobile : player} </button>}
                light="images/ship3.jpeg"
              />
            </div>
          </div>
          <div className=" col-span-4  md:col-span-12 overflow-hidden">
            <Slider>
              {items.map((item) => (
                <TutorialVideoSliderItem key={item.key} item={item.props} />
              ))}
            </Slider>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default TutorialVideoSlider;
