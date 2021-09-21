import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import menudata from "../data/menudata";
import seconddata from "../data/seconddata.json";
import Nav from "../components/Nav";
import Faqs from "../components/Faqs";
import Menu from "../components/Menu";
import VideoHeader from "../components/VideoHeader";
import TwoColumns from "../components/TwoColumns";
import TutorialCircle from "../components/TutorialCircle";
import TutorialVideoSlider from "../components/TutorialVideoSlider";
import styles from "../styles/Home.module.css";

export default function Home() {
  let { items, logo, ctaLabel, ctaLink } = menudata;
  const menuItem = items;
  const menulogo = logo;
  const menuctaLabel = ctaLabel;
  const menuctaLink = ctaLink;

  return (
    <div>
      <Menu ctaLabel={menuctaLabel} items={menuItem} ctaLink={menuctaLink} />
      <VideoHeader />
      <TwoColumns />
      <TutorialVideoSlider />
      <TutorialCircle />
      <Faqs />

      <Footer />
    </div>
  );
}
