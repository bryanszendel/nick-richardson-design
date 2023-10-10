import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import "normalize.css";
import "../styles/global.scss";
import "../styles/landing.scss";

import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";

import nickImg from "../img/hover-images/Headshots.png";
import circleText from "../img/Circle Text.svg";

import arrow from "../img/Arrow.svg";
import Project from "../components/Project";
import eventCheckinThumb from "../img/Event Check-In Thumb.png";
import finInsightsThumb from "../img/Financial Insights Thumb.png";
import savingsGoalsThumb from "../img/Savings Goals Thumb.png";
import volSchedulingThumb from "../img/Volunteer Scheduling Thumb.png";
import crmNativeThumb from "../img/CRM Native App.png";
import Footer from "../components/Footer";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Home({ data }) {
  const [viewportWidth, setViewportWidth] = useState(1800);
  const [hoverState, setHoverState] = useState(null);
  const [displayToast, setDisplayToast] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      setViewportWidth(window.innerWidth);
    };
  }, []);

  const scrollBottom = () => {
    document.querySelector("#projects-anchor").scrollIntoView({
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

  const toolbox = [
    "Figma | Sketch",
    "Adobe Ps | Ai | In",
    `InVision`,
    `Principle`,
    "Maze | UserZoom",
    "Jira | Confluence",
    "Slack | Basecamp | Zoom",
  ];

  const books = [
    "The Lean Startup",
    "Inspired",
    "The Buddha and the Badass",
    "Blue Ocean Shift",
    "Badass: Making Users Awesome",
    "Competing Against Luck",
    "Kitchen Confidential",
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio of Nick Richardson</title>
        <link href="../styles/global.scss" rel="stylesheet" />
        <link href="../styles/landing.scss" rel="stylesheet" />
      </Helmet>

      <div id="top" className="landing-container">
        <SideNav />
        <div className="inner-container is-preload">
          <NavBar
            landing={true}
            viewportWidth={viewportWidth}
            hoverState={hoverState}
            setHoverState={setHoverState}
            // displayToast={displayToast}
            setDisplayToast={setDisplayToast}
          />

          <div className="description-container">
            <div className="circle-text">
              <img
                className="rotating"
                src={circleText}
                alt="Have you closed your knowledge gaps?"
              />
            </div>
            <div className="description">
              <div
                className={
                  hoverState === "nick" ? "nick-hover-state" : "no-display"
                }
              >
                <img src={nickImg} alt="headshots" className="nick-hover-img" />
              </div>
              <span>I’m </span>
              <span
                className="highlight"
                onMouseOver={() => setHoverState("nick")}
                onMouseOut={() => setHoverState(null)}
              >
                Nicholas
              </span>
              , a Product Designer currently working in FinTech. I build bridges
              between human and machine.
            </div>
          </div>
        </div>
      </div>

      <div className="intro-outer-container">
        <div id="intro-anchor"></div>
        <div className="inner-container">
          <div className="sub-description-container">
            <div className="sub-description-text">
              I am currently a Senior Product Designer at Maestro with{" "}
              {getNumYears()} years SaaS experience.
            </div>
            <div className="sub-description-text mobile-hide"></div>
          </div>
          <div className="sub-description-container">
            <div className="sub-description-text mobile-hide"></div>
            <div className="sub-description-text">
              User-focused, I solve experience problems leveraging design
              thinking.
            </div>
          </div>
        </div>
      </div>

      <div className="work-container">
        <div id="projects-anchor"></div>
        <div className="inner-container">
          <div className="title-arrow-container">
            <div className="work-title">Selected Projects</div>
            <AnchorLink to="#projects-anchor">
              <img
                id="arrow"
                src={arrow}
                alt="Down arrow"
                onClick={scrollBottom}
              />
            </AnchorLink>
          </div>

          <Project
            id="savings-goals"
            title="Savings Goals"
            imgSrc={savingsGoalsThumb}
            imgAlt="Savings Goals"
            switchDir={true}
            external={true}
            linkTo="https://www.behance.net/gallery/148534371/Goals-Case-Study"
          />
          <Project
            id="financial-mgmt"
            title="Financial Insights"
            imgSrc={finInsightsThumb}
            imgAlt="Financial Insights"
            linkTo="https://www.behance.net/gallery/147772499/Financial-Insights"
            external={true}
          />
          <Project
            title="Volunteer Scheduling"
            imgSrc={volSchedulingThumb}
            imgAlt="Volunteer Scheduling"
            linkTo="volunteer-scheduling"
            switchDir={true}
          />
          <Project
            title="Event Check-In"
            imgSrc={eventCheckinThumb}
            imgAlt="Event Check-In"
            linkTo="event-checkin"
          />
          <Project
            title="CRM Native App"
            imgSrc={crmNativeThumb}
            imgAlt="CRM Native App"
            linkTo="mobile-app"
            switchDir={true}
          />
        </div>
      </div>

      <div className="toolbox-container">
        <div id="toolbox-anchor"></div>
        <div className="inner-container flex-row">
          <div className="toolbox">
            <div className="toolbox-title">My Toolbox:</div>
            {toolbox.map((line, index) => {
              return <div key={index}>{line}</div>;
            })}
          </div>
          <div className="books">
            <div className="toolbox-title">Favorite Books:</div>
            {books.map((line, index) => {
              return <div key={index}>{line}</div>;
            })}
          </div>
        </div>
      </div>

      <div className={displayToast ? "toast-message show" : "toast-message"}>
        Email Copied 👍
      </div>

      <Footer setDisplayToast={setDisplayToast} />
    </>
  );
}
