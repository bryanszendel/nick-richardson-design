import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { Img } from "gatsby-plugin-image";

import "normalize.css";
import "../styles/global.scss";
import "../styles/landing.scss";

import NavBar from "../components/NavBar";

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

import downArrow from "../img/down_arrow.svg";

export default function Home({ data }) {
  const [viewportWidth, setViewportWidth] = useState(1800);
  const [hoverState, setHoverState] = useState(null);
  const [lowerHoverState, setLowerHoverState] = useState(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--bg", "rgb(3, 183, 112)");
  }, []);

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

      <div className="landing-container is-preload">
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
            {/* <span>I am currently a Product Designer at </span>
            <span
              className="underline"
              onMouseOver={() => setHoverState("pushpay")}
              onMouseOut={() => setHoverState(null)}
            >
              Pushpay
            </span> */}
            <span>
              {/* {" "} */}I am currently a Senior Product Designer at MidFirst
              Bank with {getNumYears()} years SaaS experience and a BFA in
              Visual Design. A lover of{" "}
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
      </div>
    </>
  );
}

// import eventCheckinImg from "../../static/hover-images/Event_CheckIn.png";
// import financialMgmtImg from "../../static/hover-images/Financial_Mgmt.png";
// import volunteerSchedulingImg from "../../static/hover-images/Volunteer_Scheduling.png";
// import crmImg from "../../static/hover-images/CRM.png";
// import onboardingImg from "../../static/hover-images/Onboarding.png";
// import elCactusSaguaroImg from "../../static/hover-images/El_Cactus_Saguaro.png";

// export const query = graphql`
//   query {
//     eventCheckinImg: imageSharp {
//       localFile {
//         childImageSharp {
//           fixed(width: 120) {
//             ...GatsbyImageSharpFixed_withWebp
//           }
//         }
//       }
//     }
//     financialMgmtImg: imageSharp {
//       localFile {
//         childImageSharp {
//           fixed(width: 120) {
//             ...GatsbyImageSharpFixed_withWebp
//           }
//         }
//       }
//     }
//     volunteerSchedulingImg: imageSharp {
//       # credit
//       # title
//       localFile {
//         childImageSharp {
//           fixed(width: 200) {
//             ...GatsbyImageSharpFixed_withWebp
//           }
//         }
//       }
//     }
//     crmImg: imageSharp {
//       # credit
//       # title
//       localFile {
//         childImageSharp {
//           fluid(maxWidth: 600) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//     onboardingImg: imageSharp {
//       # credit
//       # title
//       localFile {
//         childImageSharp {
//           fluid(maxWidth: 600) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//     elCactusSaguaroImg: imageSharp {
//       # credit
//       # title
//       localFile {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   }
// `;
