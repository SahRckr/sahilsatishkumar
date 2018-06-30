import React from "react";
import { Icon, Button, Flag } from "semantic-ui-react";
import { Images } from "./assets";

const randomNumGenerator = () => Math.ceil(Math.random() * 1000000000);

const universalStyles = {
  padding: "25px",
  margin: "25px"
};

const styles = {
  body: {
    backgroundColor: "white" || "whitesmoke",
    width: "100",
    height: "100",
    ...universalStyles
  },
  borderedBox: {
    border: "3px groove black",
    ...universalStyles
  },
  dottedBorderedBox: {
    border: "2px dotted black",
    ...universalStyles
  }
};

const profile = {
  name: "Sahil Satishkumar",
  contactInformation: [
    {
      type: (
        <p>
          <Icon name="phone" />Phone
        </p>
      ),
      detail: (
        <a href="tel:+919449513893">
          <Flag name="in" />+91-944-951-3893
        </a>
      )
    },
    {
      type: (
        <p>
          <Icon name="mail square" />SMS
        </p>
      ),
      detail: (
        <a href="sms:+919449513893">
          <Flag name="in" />+91-944-951-3893
        </a>
      )
    },
    {
      type: (
        <p>
          <Icon name="mail outline" />E-mail
        </p>
      ),
      detail: (
        <a href="mailto:sahilsatishkumar@gmail.com">
          sahilsatishkumar [at] gmail [dot] com
        </a>
      )
    },
    {
      type: (
        <p>
          <Icon name="circle outline" />Others
        </p>
      ),
      detail: (
        <Button.Group>
          <Button
            color="blue"
            href="https://www.linkedin.com/in/sahrckr"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            color="teal"
            href="https://twitter.com/sahrckr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Button>
          <Button
            color="red"
            href="https://www.quora.com/profile/Sahil-Satishkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quora
          </Button>
          <Button
            color="green"
            href="https://api.whatsapp.com/send?phone=919449513893"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Button>
          <Button
            color="black"
            href="https://github.com/SahRckr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            color="blue"
            href="https://fb.me/sahrckr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Button>
        </Button.Group>
      )
    }
  ],
  workExperience: [
    {
      title: (
        <p>
          <i>Full Stack JavaScript Developer</i> at <b>Dataphi Labs</b>
        </p>
      ),
      description: [
        <p>
          <b>Web Applications:</b> Engineered UI elements using React.js and
          Redux.js for client projects.
        </p>,
        <p>
          <b>Mobile Applications:</b> Built configurable applications using
          React-Native.
        </p>
      ],
      timeline: (
        <p>
          <i>Jan. 2017 - Jun. 2018</i>
        </p>
      ),
      location: <p>Bangalore, IN</p>,
      logo: Images.dataphi
    },
    {
      title: (
        <p>
          <i>Web Developer Intern</i> at <b>Print With Pi</b>
        </p>
      ),
      description: [
        <p>
          <b>Web Applications:</b> Worked on Poster Catalogue, Internal admin
          dashboard using React.js and Redux.
        </p>,
        <p>
          <b>Learnings:</b> Learnt and implemented ES6 and javascript
          frameworks.
        </p>
      ],
      timeline: (
        <p>
          <i>July. 2016 - Oct. 2016</i>
        </p>
      ),
      location: <p>Bangalore, IN</p>,
      logo: Images.printwithpi_bw
    }
  ],
  education: [
    {
      title: <h3>Visvesvaraya Technological University</h3>,
      subTitle: <i>Bachelor of Technology in Computer Science; Grade: N/A</i>,
      timeline: (
        <p>
          <i>Aug. 2012 - Present</i>
        </p>
      ),
      location: <p>Mangalore, IN</p>,
      logo: Images.vtu
    },
    {
      title: <h3>St. Aloysius Pre University College</h3>,
      subTitle: <i>Higher Secondary Education in PCMC; Grade: First Class</i>,
      timeline: (
        <p>
          <i>June. 2010 – March. 2012</i>
        </p>
      ),
      location: <p>Mangalore, IN</p>,
      logo: Images.aloysius
    }
  ],
  projects: [
    {
      title: <h3>HealthSetGo - Health Assessment Platform</h3>,
      subTitle: <i>Client project at Dataphilabs</i>,
      description: [
        <p>
          Majorly involved in critical features of HSG's back office UI
        </p>,
        <p>
          Features involve, platform entity onboarding & platform entity interactions.
        </p>,
        <p>
          Majorly involved in shipping the project off, & providing developer support to client.
        </p>
      ],
      timeline: null
    },
    {
      title: <h3>AskVaidyo - Second Opinion Platform</h3>,
      subTitle: <i>Client project at Dataphilabs</i>,
      description: [
        <p>
          Primarily involved in the last 20% of the project. This project had 2 mobile apps & 4 web apps.
        </p>,
        <p>
          Performed many bug fixes, many workflow fixes, a lot of code cleaning, at several instances implementation of good practices in multiple aspects of the project.
        </p>
      ],
      timeline: null
    },
    {
      title: <h3>LeaderAmp - Leadership Coaching Platform</h3>,
      subTitle: <i>Client project at Dataphilabs</i>,
      description: [
        <p>
          Major contribution in the Design & Development of LeaderAmp's app flow creation tool. This tool is used by the admin to pre-configure the flow of LeaderAmp's mobile application, from the web UI.
        </p>,
        <p>
          Minorly involved in minor tweaks and bug fixes of the LeaderAmp Mobile application.
        </p>
      ],
      timeline: null
    },
    {
      title: <h3>Automated Attendance System using Face Based Biometrics</h3>,
      subTitle: <i>Final year project</i>,
      description: [
        <p>
          <b>Code base:</b> Developed on MATLAB.
        </p>,
        <p>
          <b>Documentation:</b> Documented on LATEX.
        </p>
      ],
      timeline: (
        <p>
          <i>Jan. 2016 - May. 2016</i>
        </p>
      )
    },
    {
      title: <h3>Draughts using OpenGL</h3>,
      subTitle: <i>Computer Graphic and Visualisation project</i>,
      description: [
        <p>
          <b>Abstract:</b> Developed the game of Draughts using existing
          algorithm.
        </p>
      ],
      timeline: (
        <p>
          <i>Feb. 2016 - April. 2015</i>
        </p>
      )
    },
    {
      title: <h3>Organisational/Event Websites</h3>,
      subTitle: <i>Side Projects done for an event or college organisation</i>,
      description: [
        <p>
          <b>Technothon ’16:</b> Event website created using Bootstrap, for PACE
          TECHNOTHON 16. Implemented basic UI elements.
        </p>,
        <p>
          <b>GLUG PACE:</b> Organisational website created using Wordpress. Used
          customised plugins, and custom CSS. Edited parts of the wordpress
          theme package to GLUG PACEs requirements.
        </p>,
        <p>
          <b>Bytestruck ’16:</b> Event Website created using Bootstrap.
          Introduced JS countdown timer. PHP to accept registrations.
        </p>
      ],
      timeline: (
        <p>
          <i>Oct. 2015 - April. 2016</i>
        </p>
      )
    }
  ],
  associations: ["SCA", "FSMK", "GLUG PACE", "ISTE"],
  technicalSkills: [
    {
      title: <h3>Languages and frameworks:</h3>,
      subTitle: <p> Javascript (ES6), React/React-Native, Redux/Redux-Saga</p>
    },
    {
      title: <h3>Other Interests:</h3>,
      subTitle: (
        <p>
          Functional Programming (specially with JS), LATEX, Clojure
        </p>
      )
    }
  ],
  hobbies: [
    "Trending Technologies",
    "Badminton",
    "Table Tennis",
    "Travelling",
    "Technical Meetups",
    "Fountain Pens",
    "Blogging",
    "Bike-Riding"
  ]
};

const workExperience = "Work Experience";
const education = "Education";
const projects = "Projects";
const associations = "Associations";
const technicalSkills = "Technical Skills";
const hobbies = "Hobbies";

const sectionMap = {
  workExperience,
  projects,
  technicalSkills,
  education,
  associations,
  hobbies
};

const ImageMap = {
  profile: Images.profile,
  contactMe: Images.contactMe,
  [workExperience]: Images.workExperience,
  [education]: Images.education,
  [projects]: Images.projects,
  [associations]: Images.associations,
  [technicalSkills]: Images.technicalSkills,
  [hobbies]: Images.hobbies
};

const sections = {
  sectionMap,
  ImageMap,
};

export { styles, profile, randomNumGenerator, sections };
