import React from "react";
import "normalize.css";

import "../styles/project-pages.scss";
import NavBar from "../components/NavBar";
import Testimonial from "../components/project-details/Testimonial";
import ParagraphWithTitle from "../components/project-details/ParagraphWithTitle";

import ChallengeImage from "../img/event_checkin/Challenge_Image.png";
import CheckInAppImage from "../img/event_checkin/Check-In_App_Image.png";
import KeyImprovementsImage from "../img/event_checkin/Key_Improvements_Image.png";
import ProcessImage from "../img/event_checkin/Process_Image.png";
import Footer from "../components/Footer";

export default function EventCheckin() {
  return (
    <>
      <div id="top" className="outer-container">
        <NavBar landing={false} />
        <div className="inner-container">
          <div className="page-title">Event Check-In App</div>
          <div className="img-container">
            <img
              className="detail-images"
              src={CheckInAppImage}
              alt="Check in app"
            />
          </div>

          <ParagraphWithTitle
            title="Intro"
            paragraph="Sunday mornings are already far too stressful if you’re a church volunteer. Now imagine your check-in software breaks and the line of parents who need to check their kids into childcare or bible study ends up out the door… For far too many of our customers, this was a common reality."
          />

          <ParagraphWithTitle
            title="The Challenge"
            paragraph="Church Community Builder’s web browser based check-in app was solid and reliable. But unfortunately there was not an acceptable mobile solution, which is where the tool needed to be. Our team needed to design and build a brand-new check-in app for iOS, iPad, and Android using the React Native platform."
          />
          <div className="img-container">
            <img
              className="detail-images"
              src={ChallengeImage}
              alt="challenge"
            />
          </div>
          <ParagraphWithTitle
            title="The Process"
            paragraph="Since this was a product that already existed (in non-responsive web app form) and we had thousands of customers currently depending on it, it was necessary for me to have a deep understanding of the existing experience and its users before I could make changes that would be well-received. We met with users to understand their jobs to be done, their struggles, and what they would hope to see in a check-in native app."
          />
          <div className="img-container">
            <img className="detail-images" src={ProcessImage} alt="process" />
          </div>
          <ParagraphWithTitle
            title="Key Improvements"
            paragraph="We were able to recycle much of the same functionality and user flows. Along with UX improvements, the biggest wins were found in the mobile-first UI, new backend platform, and performance improvements."
          />
          <div className="img-container key-improvements-img">
            <img
              className="detail-images"
              src={KeyImprovementsImage}
              alt="key improvements"
            />
          </div>
          <ParagraphWithTitle
            title="A Fresh Interface"
            paragraph="I focused most of my efforts on a new UI which was a slight alteration to our existing app UI style that introduced a softer version of Proxima Nova, larger font sizes, and more white space (taking cues from Air BnB’s app). In the process, I developed new style guidelines and a Sketch symbols library which we will use for our future mobile apps."
          />
          <Testimonial
            statement="We used this system over the weekend and it was AMAZING!"
            author="Sara Barlow"
            marginBottom="40px"
          />

          <ParagraphWithTitle
            title="A Fresh Interface"
            paragraph="I focused most of my efforts on a new UI which was a slight alteration to our existing app UI style that introduced a softer version of Proxima Nova, larger font sizes, and more white space (taking cues from Air BnB’s app). In the process, I developed new style guidelines and a Sketch symbols library which we will use for our future mobile apps."
          />
        </div>
      </div>
      <Footer style={{ marginTop: "96px" }} />
    </>
  );
}
