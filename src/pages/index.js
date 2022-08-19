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

import downArrow from "../img/down_arrow.svg";

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
          <div className="work-title">My Work</div>
          <img
            id="arrow"
            src={downArrow}
            alt="Down arrow"
            onClick={scrollBottom}
          />
        </div>
        <div className="work-items-container">
          <div className="work-items">
            <Link
              to="/event-checkin"
              className="work-items-link"
              onMouseOver={() => setLowerHoverState("event-checkin")}
              onMouseOut={() => setLowerHoverState(null)}
            >
              Event Check-In
            </Link>
          </div>
          <div
            className={
              lowerHoverState === "event-checkin"
                ? "event-checkin-hover"
                : "no-display"
            }
          >
            <img
              src={eventCheckinImg}
              alt="Event Check In"
              className="lower-hover-img"
            />
          </div>

          {/* <div className="work-items">
                <Link
                  to="/"
                  className="work-items-link"
                  onMouseOver={() => setLowerHoverState("financial-mgmt")}
                  onMouseOut={() => setLowerHoverState(null)}
                >
                  Financial Management
                </Link>
              </div>
              {lowerHoverState === "financial-mgmt" && (
                <img
                  className="financial-mgmt-hover"
                  src={financialMgmtImg}
                  alt="Financial Management"
                />
              )} */}

          <div className="work-items">
            <Link
              to="/volunteer-scheduling"
              className="work-items-link"
              onMouseOver={() => setLowerHoverState("volunteer-scheduling")}
              onMouseOut={() => setLowerHoverState(null)}
            >
              Volunteer Scheduling
            </Link>
          </div>
          <div
            className={
              lowerHoverState === "volunteer-scheduling"
                ? "volunteer-scheduling-hover"
                : "no-display"
            }
          >
            <img
              src={volunteerSchedulingImg}
              alt="Volunteer Scheduling"
              className="lower-hover-img"
            />
          </div>

          <div className="work-items">
            <Link
              to="/mobile-app"
              className="work-items-link"
              onMouseOver={() => setLowerHoverState("crm")}
              onMouseOut={() => setLowerHoverState(null)}
            >
              CRM Mobile App
            </Link>
          </div>
          <div
            className={lowerHoverState === "crm" ? "crm-hover" : "no-display"}
          >
            <img
              src={crmImg}
              alt="CRM Mobile App"
              className="lower-hover-img"
            />
          </div>

          {/* <div className="work-items">
                <Link
                  to="/"
                  className="work-items-link"
                  onMouseOver={() => setLowerHoverState("onboarding")}
                  onMouseOut={() => setLowerHoverState(null)}
                >
                  Customer Onboarding
                </Link>
              </div>
              {lowerHoverState === "onboarding" && (
                <img
                  className="onboarding-hover"
                  src={onboardingImg}
                  alt="Customer Onboarding"
                />
              )} */}

          <div className="work-items">
            <Link
              to="/graphic-design"
              className="work-items-link"
              onMouseOver={() => setLowerHoverState("graphic-design")}
              onMouseOut={() => setLowerHoverState(null)}
            >
              Graphic Design
            </Link>
          </div>
          <div
            className={
              lowerHoverState === "graphic-design"
                ? "graphic-design-hover"
                : "no-display"
            }
          >
            <img
              src={elCactusSaguaroImg}
              alt="Graphic Design"
              className="lower-hover-img"
            />
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}
