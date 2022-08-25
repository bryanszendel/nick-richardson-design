import React, { useEffect } from "react";
import "normalize.css";

import "../styles/detail-pages.scss";
import NavBar from "../components/NavBar";
import Testimonial from "../components/project-details/Testimonial";
import ParagraphWithTitle from "../components/project-details/ParagraphWithTitle";
import Footer from "../components/Footer";

import ScheduleGridImage from "../img/volunteer_scheduling/Schedule_Grid.png";
import Collage1Image from "../img/volunteer_scheduling/Collage_1.png";
import CategoryListImage from "../img/volunteer_scheduling/Category_List.png";
import SchedulesSketchImage from "../img/volunteer_scheduling/Schedules_Sketch.png";
import BlackWhiteImage from "../img/volunteer_scheduling/Black_White.png";
import Collage2Image from "../img/volunteer_scheduling/Collage_2.png";
import laptopImg from "../img/volunteer_scheduling/laptop-img.png";
import EditSettingsModalImage from "../img/volunteer_scheduling/Edit_Settings_Modal.png";

export default function VolunteerScheduling() {
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", "white");
  }, []);

  return (
    <div className="outer-container">
      <NavBar landing={false} />
      <div className="inner-container">
        <div className="page-title">Scheduling Make Simple</div>
        <img
          className="detail-images"
          src={laptopImg}
          alt="laptop with schedules app open"
        />
        {/* <Testimonial
          statement="I love the ease of use with this product. I use the scheduling software on a daily basis and they have made it easy to schedule my teams and keep everyone informed about upcoming needs."
          author="Dana S."
          marginBottom="40px"
        /> */}
        <ParagraphWithTitle
          title="Intro"
          paragraph={`Scheduling volunteers to serve is one of the keys to the success of any church. Without a great scheduling experience, no church management software will see mass adoption.
          
At Church Community Builder, I worked as design lead on a project to create a usable schedulding app that users loved.`}
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
        <ParagraphWithTitle />
        <div className="img-container">
          <img
            className="detail-images"
            src={ScheduleGridImage}
            alt="Scheduling app grid view"
          />
        </div>
        <ParagraphWithTitle
          title="Embracing The Reality"
          paragraph={`Competitors had come out with better products, our UI became outdated, the UX needed overhauling, years of saying yes to feature requests resulted in a convoluted and overly complex experience, it wasn’t mobile-friendly, customer practices and expectations had changed… It was time for a ground-up rebuild and we internally called this project “Luna Scheduling.””

So much work needed to be done on this project that we decided to rebuild it fully from the ground up - New platform, new design, new everything. The catch was we had to replace a tool that currently existed and was being used by thousands of people. There was a lot on the line. In addition, our biggest competitor’s primary feature was their volunteer scheduling tool. 

Our customers were forced to do terrible things to work around our existing sub-par product.`}
        />
        <div className="img-container">
          <img
            className="detail-images"
            src={Collage1Image}
            alt="Collage of design process"
          />
        </div>
        <ParagraphWithTitle
          title="Getting From Point A to B"
          paragraph={`We started by embarking on months of customer and market research. Meeting with over 120 churches, user testing competitor’s software, analyzing features, dissecting jobs to be done.

Both volunteer and on-staff scheduling administrators needed to use this tool. It needed to be so simple that anyone could use it without training, but powerful enough to accomplish hundreds of tasks which vary greatly between the 4,000+ organizations we serve.

We created spreadsheets of features that customers said they “had to have,” added the job to be done to each and designed our initial prototypes. After iterating as far as we felt we could without the user being able to experience something that felt more realistic, we had our devs build a working prototype that did just about everything except save to the database. This allowed us to confirm our hypothesis for only about $20,000 instead of $300,000. In addition, the work that was done on the prototype was also entirely recyclable for the real thing.`}
        />
        <div className="img-container">
          <img
            className="detail-images"
            src={CategoryListImage}
            alt="Schedule Category View"
          />
        </div>
        <div className="img-container">
          <img
            className="detail-images"
            src={SchedulesSketchImage}
            alt="Sketch app workflow"
          />
        </div>
        <ParagraphWithTitle
          title="The Initial Release"
          paragraph={`When dealing with something so important, we needed to get real user feedback in the lowest-risk form possible. We implemented our lean approach and released the new tool to a few “project partners” who agreed to test the product early on, in the context of it being nothing more than an experiment. This ensured appropriate expectations and allowed us to get deep levels of feedback by regularly meeting with these users both in-person and remotely.

The relationship with our project partners was a huge success as it gave us the ability to learn and iterate rapidly in a very safe environment. After several months of this we took care of hundreds of bug fixes, feature tweaks, and UI improvements, and once the user feedback seemed to settle somewhere around, “this is amazing, It’s better than anything else that’s out there!" we shipped it to Beta.`}
        />
        <div className="img-container">
          <img
            className="detail-images"
            src={EditSettingsModalImage}
            alt="Edit settings modal"
          />
        </div>
        <Testimonial
          statement="THANK YOU AGAIN!! Y’all continue to improve the software on a regular basis like no other ChMS company I’ve seen!"
          author="Angie B."
          marginBottom="40px"
        />
        <div className="img-container">
          <img
            className="detail-images"
            src={BlackWhiteImage}
            alt="Black and white view of schedules on a computer"
          />
        </div>
        <ParagraphWithTitle
          title="Changing the Bottom Line"
          paragraph="Luna schedules was a smash hit in Beta and even more successful in Stable. It seemed like the Lean methodology really paid off and we really achieved something special. Each week we are seeing significant increases in the use of Luna and big drops in the use of the old tool. We continue to work on the scheduling tool and it’s proving to be a critical piece to our company's targeted growth. Luna launched in summer 2018 and as of about a year later, we have seen an increase of 686.05% in usage."
        />
        <Footer appStore={false} />
      </div>
    </div>
  );
}
