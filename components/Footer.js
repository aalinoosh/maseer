import React, { FC, ReactElement } from "react";
import Container from "./Container";
import { logo } from "./Svg";
import Appear from "./Appear";
import HTMLText from "./HTMLText";
import Image from "next/image";
import { arrowDiagonal, skypelogo, insta } from "./Svg";
import Grid from "./Grid";

// type Props = {
//   subtitle: string;
//   image: APIAsset;
// };

const Footer= () => {
  return (
   
        <div className="col-span-4 md:col-span-12 w-full ">
          <Appear>
            <div>
            {/* <Image src="/images/logo.svg" width={128} height={37} /> */}

              <Image
                src="/images/footer.jpeg" width={1800} height={700}
                classes="w-full h-full object-cover relative"
             />
              <div className="absolute inset-y-1/5  inset-x-1/5  text-small md:inset-x-1/3 md:inset-y-1/4 font-primaryBold md:text-bigger3  mx-auto ">
                <div className=" text-center h-6 w-16 md:w-60 md:mb-18 mx-auto ">
                <Image src="/images/logo.svg" width={200} height={80} />
                </div>
                <div>
                <nav className="footer-social-links text-center">
                <a href="#"  className={`social`} > <span className="mt-0.5">{skypelogo}</span></a>
                <a href="#"  className={`social`} > <span className="mt-0.5">{skypelogo}</span></a>
                <a href="#"  className={`social`} > <span className="mt-0.5">{skypelogo}</span></a>
                <a href="#"  className={`social`} > <span className="mt-0.5">{skypelogo}</span></a>
                <a href="#"  className={`social`} > <span className="mt-0.5">{skypelogo}</span></a>
            </nav>
                </div>

                {/* <HTMLText className="mb-10 text-center text-primary font-primaryLight text-base" text="Beerlin © 2020 - All rights reserved" /> */}
              </div>
            </div>
          </Appear>
        </div>
     
  );
};

export default Footer;
