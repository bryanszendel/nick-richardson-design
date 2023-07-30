import React, { useEffect } from "react";
import "normalize.css";

import "../styles/detail-pages.scss";
import NavBar from "../components/NavBar";
import Testimonial from "../components/project-details/Testimonial";
import ParagraphWithTitle from "../components/project-details/ParagraphWithTitle";

import WebsitePageImg from "../img/mobile-app/Website_Page.png";
import AppPeople from "../img/mobile-app/people-1.png";
import AppGroups from "../img/mobile-app/groups.png";
import AppProcessQueues from "../img/mobile-app/process-queues.png";
import LeadUiImg from "../img/mobile-app/LEAD_UI.png";
import AppStoreReviewsImg from "../img/mobile-app/AppStore_Reviews.png";
import LeadSketchImg from "../img/mobile-app/LEAD_Sketch.png";
import LeadAppStoreImg from "../img/mobile-app/LEAD_App_Store.png";
import DesignSystemImg from "../img/mobile-app/Design_System.png";
import DAUGraphImg from "../img/mobile-app/DAU_Graph.png";

import Footer from "../components/Footer";

export default function MobileApp() {
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", "white");
  }, []);

  return (
    <>
      <div id="top" className="outer-container">
        <NavBar landing={false} />
        <div className="inner-container">
          <div className="page-title">The Lead App</div>
          <div className="container-drop-shadow">
            <img src={AppPeople} alt="App People View" />
            <img src={AppGroups} alt="App Groups View" />
            <img src={AppProcessQueues} alt="App Process Queue View" />
          </div>
          {/* <Testimonial
            statement="Their 'Lead' app is awesome, extremely user friendly and packed with valuable features."
            author="Joshua H."
            marginBottom="40px"
          /> */}
          <ParagraphWithTitle
            title="Intro"
            paragraph="Church Community Builder’s original premise was simple: manage your church on your desktop. 15 years ago this was revolutionary, but in 2018 it was behind the times. As the company expanded and added more features, it neglected to address the now obvious necessity to be where users are most - on their phones. The LEAD app became our solution to this problem."
          />
          <ParagraphWithTitle
            title="The Challenge"
            paragraph="Church Community Builder already provided customers with the tools, just not where they needed them - on their phones. The LEAD team took a fresh approach to the desktop product and distilled it down to the critical pieces customers needed on-the-go, then simplified it and tapped into delightful, native functionality."
          />
          <div className="img-container key-improvements-img">
            <img className="detail-images" src={LeadUiImg} alt="Lead App UI" />
          </div>
          {/* <div className="img-container">
            <img
              className="detail-images"
              src={WebsitePageImg}
              alt="Website Page"
            />
          </div> */}
          <ParagraphWithTitle
            title="Know Thy User"
            paragraph="We organized the project around the research we conducted for several months prior to development. Our goal was to be user-focused and provide something our customers couldn’t live without. Myself and one of our Product Managers met with over 20 church partners and other influential church leaders to determine what feature set could be of most value in an app for our target user (small group leaders and volunteers who take on certain administrative responsibilities)."
          />
          <div className="img-container">
            <img
              className="detail-images"
              src={AppStoreReviewsImg}
              alt="App Store Reviews"
            />
          </div>
          {/* <Testimonial
            statement="50K Monthly Active Users on Average in 2018"
            marginBottom="40px"
          /> */}
          <ParagraphWithTitle
            title="The Process"
            paragraph={`We implemented a design sprint in order to get the first lo-fi prototype created in a week and from there, circled back with most of the church partners we met within our initial research phase to validate our hypothesis. Months of prototyping (using InVision and Sketch), user testing, and iteration led to our MVP release of what we called "LEAD".

As we collected feedback and better understood how our users were interacting with the app, we gained a true appreciation for our Lean approach to product design. We learned a tremendous amount about how to research, design, validate, and iterate - all while releasing new versions of the app frequently.`}
          />
          {/* <div className="img-container key-improvements-img">
            <img
              className="detail-images"
              src={LeadSketchImg}
              alt="Lead app sketch"
            />
          </div> */}
          <div className="img-container">
            <img
              className="detail-images"
              src={LeadAppStoreImg}
              alt="Lead App Store"
            />
          </div>
          <ParagraphWithTitle
            title="Keeping it Lean"
            paragraph="As we collected feedback and better understood how our users were interacting with the app, we gained a true appreciation for our Lean approach to product design. We learned a tremendous amount about how to research, design, validate, and iterate - all while releasing new versions of the app frequently."
          />
          <Testimonial
            statement="I love the app and how it allows us to seamlessly look up and communicate with a person"
            author="Matt K."
          />

          <ParagraphWithTitle
            title="The Outcome"
            paragraph={`Our marketing efforts, combined with word of mouth referrals lead to quickly expanding adoption of the new app. Since releasing LEAD our customers have begun to give us improved NPS scores directly attributed to the product, satisfied reviews, and we have seen an increase in retention.

LEAD has helped transform our customer’s perception of us being an older, enterprise-level solution into being a progressive, forward-thinking company. As mobile technology becomes more and more embedded in our lives, we recognize it’s more important than ever to invest and progress in our mobile-first solutions.`}
          />
          <div className="img-container drop-shadow">
            <img className="detail-images" src={DAUGraphImg} alt="DAU Graph" />
          </div>
          <ParagraphWithTitle
            title="Parting Stats"
            paragraph={`In 2018, users of the LEAD app:
• Averaged ~50K in Monthly Active Users
• Saved 512,429 attendance records
• Made 99,230 phone calls through the app
• Sent 98,660 unique text messages
• Sent 59,895 emails
• Mapped 45,258 addresses`}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
