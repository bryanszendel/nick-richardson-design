import React, { useEffect } from "react";
import "normalize.css";

import "../styles/detail-pages.scss";
import NavBar from "../components/NavBar";
import Testimonial from "../components/project-details/Testimonial";
import ParagraphWithTitle from "../components/project-details/ParagraphWithTitle";
import Footer from "../components/Footer";

import LogosGif from "../../static/graphic-design/Logos.gif";
import CactiImage from "../../static/graphic-design/Cacti.png";
import CactiPostersGif from "../../static/graphic-design/Cacti_posters.gif";
import WitchHuntGif from "../../static/graphic-design/Witch_hunt.gif";
import DecadeClubImage from "../../static/graphic-design/Decade_Club.jpg";
import SummitOrizabaGif from "../../static/graphic-design/Summit_Orizaba.gif";
import WeddingInviteGif from "../../static/graphic-design/Wedding_Invite.gif";
import MatterhornImage from "../../static/graphic-design/Matterhorn.png";
import StorefrontsOfKantoGif from "../../static/graphic-design/Storefronts_of_Kanto.gif";
import CrystalFightersImage from "../../static/graphic-design/Crystal_Fighters.png";

export default function GraphicDesign() {
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", "white");
  }, []);

  return (
    <div className="outer-container">
      <NavBar landing={false} />
      <div className="inner-container">
        <ParagraphWithTitle
          title="Graphic Design"
          paragraph="Although I specialize in the discipline of UI/UX, before that was even a mainstream area of focus, print and graphic design were my foundation. Presented here are some of my favorite pieces throughout the years."
        />
        <div className="img-container">
          <img className="detail-images" src={LogosGif} alt="Various Logos" />
        </div>

        <div className="img-container">
          <img className="detail-images" src={CactiImage} alt="Some Cacti" />
        </div>

        <div className="img-container">
          <img
            className="detail-images"
            src={CactiPostersGif}
            alt="Various cacti posters"
          />
        </div>

        <div className="img-container">
          <img className="detail-images" src={WitchHuntGif} alt="Witch hunt" />
        </div>

        <div className="img-container">
          <img
            className="detail-images"
            src={DecadeClubImage}
            alt="Decade club sticker"
          />
        </div>

        <div className="img-container">
          <img
            className="detail-images"
            src={SummitOrizabaGif}
            alt="Summit Orizaba t-shirt"
          />
        </div>

        <div className="img-container">
          <img
            className="detail-images"
            src={WeddingInviteGif}
            alt="Wedding invitations"
          />
        </div>

        <div className="img-container">
          <img
            className="detail-images"
            src={MatterhornImage}
            alt="Matterhorn mountain"
          />
        </div>

        <div className="img-container">
          <img
            className="detail-images"
            src={StorefrontsOfKantoGif}
            alt="Various storefronts booklet"
          />
        </div>

        <div className="img-container">
          <img
            className="detail-images"
            src={CrystalFightersImage}
            alt="Crystal Fighters concert poster"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}
