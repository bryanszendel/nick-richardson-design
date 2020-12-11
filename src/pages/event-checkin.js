import React, { useEffect } from "react";
import "normalize.css";

import "../styles/detail-pages.scss";
import NavBar from "../components/NavBar";
import Testimonial from "../components/project-details/Testimonial";
import ParagraphWithTitle from "../components/project-details/ParagraphWithTitle";

import ChallengeImage from "../../static/event_checkin/Challenge_Image.png";
import CheckInAppImage from "../../static/event_checkin/Check-In_App_Image.png";
import CheckInAppStore from "../../static/event_checkin/Check-In_App_Store.png";
import FreshInterfaceImage1 from "../../static/event_checkin/Fresh_Interface_Image_1.png";
import FreshInterfaceImage2 from "../../static/event_checkin/Fresh_Interface_Image_2.png";
import KeyImprovementsImage from "../../static/event_checkin/Key_Improvements_Image.png";
import ProcessImage from "../../static/event_checkin/Process_Image.png";
import Footer from "../components/Footer";
export default function EventCheckin() {
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", "white");
  }, []);

  return (
    <div className="outer-container">
      <NavBar landing={false} />
      <div className="inner-container">
        <Testimonial
          statement="We used this system over the weekend and it was AMAZING!"
          author="Sara Barlow"
          marginBottom="40px"
        />
        <ParagraphWithTitle
          title="Redesigning How We Check Into Events"
          paragraph="Sunday mornings are already far too stressful if you’re a church volunteer. Now imagine your check-in software breaks and the line of parents who need to check their kids into childcare or bible study ends up out the door… For far too many of our customers, this was a common reality."
        />
        <div className="img-container">
          <img
            className="detail-images"
            src={CheckInAppImage}
            alt="Check in app"
          />
        </div>
        <ParagraphWithTitle
          title="The Challenge"
          paragraph="Since this was a product that already existed (in non-responsive web app form) and we had thousands of customers currently depending on it, it was necessary for me to have a deep understanding of the existing experience and its users before I could make changes that would be well-received. We met with multiple users to understand their jobs to be done, their struggles, and what they would hope to see in a check-in native app."
        />
        <div className="img-container">
          <img className="detail-images" src={ChallengeImage} alt="challenge" />
        </div>
        <ParagraphWithTitle
          title="The Process"
          paragraph="Since this was a product that already existed (in non-responsive web app form) and we had thousands of customers currently depending on it, it was necessary for me to have a deep understanding of the existing experience and its users before I could make changes that would be well-received. We met with multiple users to understand their jobs to be done, their struggles, and what they would hope to see in a check-in native app."
        />
        <div className="img-container">
          <img className="detail-images" src={ProcessImage} alt="process" />
        </div>
        <ParagraphWithTitle
          title="Key Improvements"
          paragraph="Since this was a product that already existed, we were able to recycle much of the same functionality and user flows. Although we made key UX improvements, the real wins would be found in the elegant UI, new backend platform, performance improvements, and the fact that it would work exceptionally well on mobile devices of all kinds."
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
          paragraph="I focused most of my efforts on a new UI which was just a slight alteration to our existing app UI style that introduced a softer version of Proxima Nova, larger font sizes, and more white space (taking queues from Air BnB’s design, which I love). In the process I developed new style guidelines and a Sketch symbols library which we will use for our future mobile apps."
        />
        <div className="img-container drop-shadow">
          <img
            className="detail-images"
            src={FreshInterfaceImage1}
            alt="fresh interface 1"
          />
        </div>
        <div className="img-container drop-shadow">
          <img
            className="detail-images"
            src={FreshInterfaceImage2}
            alt="fresh interface 2"
          />
        </div>
        <div className="img-container drop-shadow">
          <img
            className="detail-images"
            src={CheckInAppStore}
            alt="check in app store"
          />
        </div>
        <ParagraphWithTitle
          title="For the Win"
          paragraph="The new Check-In app was released in June, 2019. So far it has been very well received and is changing the way churches run event check-in. We are very excited to see more churches adopt our check-in system as the months go on. We managed to build a mobile app of an existing product with key improvements, pleasing the existing customers, and giving prospective customers something big to bite on. We are iterating on new releases and will continue to improve the product."
        />
        <Footer />
      </div>
    </div>
  );
}
