import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "normalize.css";
import "../styles/landing.scss";
import "../styles/global.scss";

import NavBar from "../components/NavBar";

import nickImg from "../../static/hover-images/Headshots.png";
import dribbbleImg from "../../static/hover-images/Dribbble.png";
import linkedinImg from "../../static/hover-images/LinkedIn.png";
import emailImg from "../../static/hover-images/Email.png";
import resumeImg from "../../static/hover-images/Resume.png";
import pushpayImg from "../../static/hover-images/Pushpay.png";
import climbingImg from "../../static/hover-images/Climbing.png";
import cactiImg from "../../static/hover-images/Cacti.png";

import eventCheckinImg from "../../static/hover-images/Event_CheckIn.png";
import financialMgmtImg from "../../static/hover-images/Financial_Mgmt.png";
import volunteerSchedulingImg from "../../static/hover-images/Volunteer_Scheduling.png";
import crmImg from "../../static/hover-images/CRM.png";
import onboardingImg from "../../static/hover-images/Onboarding.png";
import elCactusSaguaroImg from "../../static/hover-images/El_Cactus_Saguaro.png";

import downArrow from "../../static/down_arrow.svg";

export default function Home() {
  const [viewportWidth, setViewportWidth] = useState(1800);
  const [hoverState, setHoverState] = useState(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--bg", "rgb(3, 183, 112)");
  }, []);

  useEffect(() => {
    // if (typeof window !== undefined) {
    window.onresize = () => {
      setViewportWidth(window.innerWidth);
    };
    // }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio of Nick Richardson</title>
      </Helmet>
      <div className="landing-container">
        <NavBar
          landing={true}
          viewportWidth={viewportWidth}
          hoverState={hoverState}
          setHoverState={setHoverState}
        />
        <div className="hello-container">
          <div
            className={
              hoverState === null || viewportWidth <= 768
                ? "hello-text"
                : "no-display"
            }
          >
            Hello!
          </div>
          <div className={hoverState === "nick" ? "hover-state" : "no-display"}>
            <img src={nickImg} alt="headshots" className="hover-img" />
          </div>
          <div
            className={hoverState === "pushpay" ? "hover-state" : "no-display"}
          >
            <img src={pushpayImg} alt="pushpay preview" className="hover-img" />
          </div>
          <div
            className={hoverState === "climbing" ? "hover-state" : "no-display"}
          >
            <img src={climbingImg} alt="climbers" className="hover-img" />
          </div>
          <div
            className={hoverState === "cacti" ? "hover-state" : "no-display"}
          >
            <img src={cactiImg} alt="some cacti" className="hover-img" />
          </div>
          <div
            className={hoverState === "dribbble" ? "hover-state" : "no-display"}
          >
            <img
              src={dribbbleImg}
              alt="dribbble preview"
              className="hover-img"
            />
          </div>
          <div
            className={hoverState === "linkedin" ? "hover-state" : "no-display"}
          >
            <img
              src={linkedinImg}
              alt="linkedin preview"
              className="hover-img"
            />
          </div>
          <div
            className={hoverState === "email" ? "hover-state" : "no-display"}
          >
            <img src={emailImg} alt="email preview" className="hover-img" />
          </div>
          <div
            className={hoverState === "resume" ? "hover-state" : "no-display"}
          >
            <img src={resumeImg} alt="resume preview" className="hover-img" />
          </div>
        </div>

        <div className="description-container">
          <div className="description">
            <span>I am currently a Product Designer at </span>
            <span
              className="underline"
              onMouseOver={() => setHoverState("pushpay")}
              onMouseOut={() => setHoverState(null)}
            >
              Pushpay
            </span>
            <span>
              {" "}
              with seven years SaaS experience and a BFA in Visual Design. A
              lover of{" "}
            </span>
            <span
              className="underline"
              onMouseOver={() => setHoverState("climbing")}
              onMouseOut={() => setHoverState(null)}
            >
              climbing
            </span>
            <span> and </span>
            <span
              className="underline"
              onMouseOver={() => setHoverState("cacti")}
              onMouseOut={() => setHoverState(null)}
            >
              cacti
            </span>
            <span>
              , passionate about solving painfully difficult problems and
              improving customer experiences.
            </span>
          </div>
        </div>

        <div className="work-container">
          <div className="title-arrow-container">
            <div className="work-title">My Work</div>
            <img id="arrow" src={downArrow} alt="Down arrow" />
          </div>
          <div className="work-items-container">
            <div className="work-items">
              <Link
                to="/event-checkin"
                className="work-items-link"
                onMouseOver={() => setHoverState("event-checkin")}
                onMouseOut={() => setHoverState(null)}
              >
                Event Check-In
              </Link>
            </div>
            {hoverState === "event-checkin" && (
              <img
                className="event-checkin-hover"
                src={eventCheckinImg}
                alt="Event Check in"
              />
            )}

            <div className="work-items">
              <Link
                to="/"
                className="work-items-link"
                onMouseOver={() => setHoverState("financial-mgmt")}
                onMouseOut={() => setHoverState(null)}
              >
                Financial Management
              </Link>
            </div>
            {hoverState === "financial-mgmt" && (
              <img
                className="financial-mgmt-hover"
                src={financialMgmtImg}
                alt="Financial Management"
              />
            )}

            <div className="work-items">
              <Link
                to="/volunteer-scheduling"
                className="work-items-link"
                onMouseOver={() => setHoverState("volunteer-scheduling")}
                onMouseOut={() => setHoverState(null)}
              >
                Volunteer Scheduling
              </Link>
            </div>
            {hoverState === "volunteer-scheduling" && (
              <img
                className="volunteer-scheduling-hover"
                src={volunteerSchedulingImg}
                alt="Volunteer Scheduling"
              />
            )}

            <div className="work-items">
              <Link
                to="/"
                className="work-items-link"
                onMouseOver={() => setHoverState("crm")}
                onMouseOut={() => setHoverState(null)}
              >
                CRM Mobile App
              </Link>
            </div>
            {hoverState === "crm" && (
              <img className="crm-hover" src={crmImg} alt="CRM Mobile App" />
            )}

            <div className="work-items">
              <Link
                to="/"
                className="work-items-link"
                onMouseOver={() => setHoverState("onboarding")}
                onMouseOut={() => setHoverState(null)}
              >
                Customer Onboarding
              </Link>
            </div>
            {hoverState === "onboarding" && (
              <img
                className="onboarding-hover"
                src={onboardingImg}
                alt="Customer Onboarding"
              />
            )}

            <div className="work-items">
              <Link
                to="/"
                className="work-items-link"
                onMouseOver={() => setHoverState("graphic-design")}
                onMouseOut={() => setHoverState(null)}
              >
                Graphic Design
              </Link>
            </div>
            {hoverState === "graphic-design" && (
              <img
                className="graphic-design-hover"
                src={elCactusSaguaroImg}
                alt="Graphic Design"
              />
            )}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}
