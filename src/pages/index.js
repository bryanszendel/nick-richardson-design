import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { Img } from "gatsby-plugin-image";

import "normalize.css";
import "../styles/global.scss";
import "../styles/landing.scss";

import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";

import nickImg from "../img/hover-images/Headshots.png";
import dribbbleImg from "../img/hover-images/Dribbble.png";
import linkedinImg from "../img/hover-images/LinkedIn.png";
import emailImg from "../img/hover-images/Email.png";
import resumeImg from "../img/hover-images/Resume.png";
import pushpayImg from "../img/hover-images/Pushpay.png";
import climbingImg from "../img/hover-images/Climbing.png";
import cactiImg from "../img/hover-images/Cacti.png";

import eventCheckinImg from "../img/hover-images/Event_CheckIn.png";
// import financialMgmtImg from "../img/hover-images/Financial_Mgmt.png";
import volunteerSchedulingImg from "../img/hover-images/Volunteer_Scheduling.png";
import crmImg from "../img/hover-images/CRM.png";
// import onboardingImg from "../img/hover-images/Onboarding.png";
import elCactusSaguaroImg from "../img/hover-images/El_Cactus_Saguaro.png";
import circleText from "../img/Circle Text.svg";

import arrow from "../img/Arrow.svg";
import Project from "../components/Project";
import eventCheckinThumb from "../img/Event Check-In Thumb.png";
import finInsightsThumb from "../img/Financial Insights Thumb.png";
import savingsGoalsThumb from "../img/Savings Goals Thumb.png";
import volSchedulingThumb from "../img/Volunteer Scheduling Thumb.png";
import crmNativeThumb from "../img/CRM Native App.png";

export default function Home({ data }) {
  const [viewportWidth, setViewportWidth] = useState(1800);
  const [hoverState, setHoverState] = useState(null);
  const [lowerHoverState, setLowerHoverState] = useState(null);

  useEffect(() => {
    window.onresize = () => {
      setViewportWidth(window.innerWidth);
    };
  }, []);

  const scrollBottom = () => {
    document.querySelector(".work-items-container").scrollIntoView({
      behavior: "smooth",
    });
  };

  const getNumYears = () => {
    const years = {
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
    };
    return years[new Date().getFullYear() - 2014];
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio of Nick Richardson</title>
        <link href="../styles/global.scss" rel="stylesheet" />
        <link href="../styles/landing.scss" rel="stylesheet" />
      </Helmet>

      <div className="landing-container">
        <SideNav />
        <div className="inner-container is-preload">
          <NavBar
            landing={true}
            viewportWidth={viewportWidth}
            hoverState={hoverState}
            setHoverState={setHoverState}
          />

          <div className="description-container">
            <div className="circle-text">
              <img src={circleText} alt="" />
            </div>
            <div className="description">
              <div
                className={
                  hoverState === "nick" ? "nick-hover-state" : "no-display"
                }
              >
                <img src={nickImg} alt="headshots" className="nick-hover-img" />
              </div>
              <span>Hello! I’m </span>
              <span
                className="highlight"
                onMouseOver={() => setHoverState("nick")}
                onMouseOut={() => setHoverState(null)}
              >
                Nicholas
              </span>
              , a Product Designer based{" "}
              <span className="strikethrough">in OKC</span> remotely. Currently
              working in FinTech. I build bridges between human and machine.
            </div>
          </div>
        </div>
      </div>

      <div className="inner-container">
        <div className="sub-description-container">
          <div className="sub-description-text">
            I am currently a Senior Product Designer at MidFirst Bank with{" "}
            {getNumYears()} years SaaS experience.
          </div>
          <div className="sub-description-text"></div>
        </div>
        <div className="sub-description-container">
          <div className="sub-description-text"></div>
          <div className="sub-description-text">
            User-focused, I solve experience problems leveraging design
            thinking.
          </div>
        </div>
      </div>

      <div className="work-container inner-container">
        <div className="title-arrow-container">
          <div className="work-title">Selected Projects</div>
          <img id="arrow" src={arrow} alt="Down arrow" onClick={scrollBottom} />
        </div>

        <Project
          title="Savings Goals"
          imgSrc={savingsGoalsThumb}
          imgAlt="Savings Goals"
        />
        <Project
          switchDir="true"
          title="Financial Insights"
          imgSrc={finInsightsThumb}
          imgAlt="Financial Insights"
        />
        <Project
          title="Volunteer Scheduling"
          imgSrc={volSchedulingThumb}
          imgAlt="Volunteer Scheduling"
        />
        <Project
          switchDir="true"
          title="Event Check-In"
          imgSrc={eventCheckinThumb}
          imgAlt="Event Check-In"
        />
        <Project
          title="CRM Native App"
          imgSrc={crmNativeThumb}
          imgAlt="CRM Native App"
        />
      </div>
      <div className="footer"></div>
    </>
  );
}
