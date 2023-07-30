import React, { useEffect } from "react";
import "normalize.css";

import "../styles/detail-pages.scss";
import NavBar from "../components/NavBar";
import Testimonial from "../components/project-details/Testimonial";
import ParagraphWithTitle from "../components/project-details/ParagraphWithTitle";
import Footer from "../components/Footer";

import SchedulesSketchImage from "../img/volunteer-scheduling/Schedules_Sketch.png";
import Schedules1 from "../img/volunteer-scheduling/schedules1.png";
import Schedules2 from "../img/volunteer-scheduling/schedules2.png";
import Schedules3 from "../img/volunteer-scheduling/schedules3.png";
import Collage2Image from "../img/volunteer-scheduling/Collage_2.png";
import MacImg from "../img/volunteer-scheduling/mac-image.png";
import EditSettingsModalImage from "../img/volunteer-scheduling/Edit_Settings_Modal.png";

export default function VolunteerScheduling() {
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", "white");
  }, []);

  return (
    <>
      <div id="top" className="outer-container">
        <NavBar landing={false} />
        <div className="inner-container">
          <div className="page-title">Scheduling Made Simple</div>
          <div className="img-container">
            <img
              className="detail-images"
              src={MacImg}
              alt="laptop with schedules app open"
            />
          </div>
          <ParagraphWithTitle
            title="Intro"
            paragraph={`Scheduling volunteers to serve is one of the keys to the success of any church. Without a great scheduling experience, no church management software will see mass adoption. At Church Community Builder, I worked as design lead on a project to create a usable schedulding app that users loved.`}
          />
          <ParagraphWithTitle
            title="Begin with Research"
            paragraph={`Our company already offered a tool that attempted to do this. It had thousands of monthy users so we took audit of the current experience and met with users to better understand what was working and what wasn't. We uncovered painful workarounds and flows that just didn't align with their processes and mental models. These findings, along with quantitative analysis of our data led us towards solutions.`}
          />
          <div className="img-container">
            <img
              className="detail-images"
              src={Collage2Image}
              alt="fresh interface 1"
            />
          </div>

          <ParagraphWithTitle
            title="Ideate, Test, Repeat"
            paragraph={`After months of customer and market research, meeting with over 120 churches, user testing competitor’s software, analyzing features, dissecting jobs to be done, we developed a hypothysis and designed our initial prototypes. 

After iterating as far as we felt we could without the user being able to experience something that felt more realistic, we had our devs build a working prototype that did just about everything except save to the database. This allowed us to confirm our hypothesis for only about $20,000 instead of $300,000. In addition, the work that was done on the prototype was also entirely recyclable for the real build.`}
          />

          <div className="img-container">
            <img
              className="detail-images"
              src={SchedulesSketchImage}
              alt="Sketch app workflow"
            />
          </div>

          <div className="img-container">
            <img
              className="detail-images"
              src={EditSettingsModalImage}
              alt="Edit settings modal"
            />
          </div>

          <ParagraphWithTitle
            title="The Outcome"
            paragraph={`Our scheduling tool was a smash hit in Beta and even more successful in Stable. The Lean methodology paid off and we achieved something special. Each week we are seeing significant increases in use and big drops in the use of the old tool.

Our scheduling product launched in summer 2018 and as of about a year later, we saw an increase of 686.05% in usage.`}
          />

          <Testimonial
            color="pink"
            statement={`I love the ease of use with this product. I use the scheduling software on a daily basis and they have made it easy to schedule my teams and keep everyone informed about upcoming needs.`}
            author="Dana S."
          />
          <div className="container-drop-shadow">
            <img src={Schedules1} alt="Schedules View" />
            <img src={Schedules2} alt="Schedules View Alt" />
            <img src={Schedules3} alt="Schedules View Alt" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
