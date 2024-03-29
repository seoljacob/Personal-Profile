import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import CIcon from "./c-icon";
import FirebaseIcon from "./firebase-icon";
import FlaskIcon from "./flask-icon";
import JavaIcon from "./java-icon";
import JavaScriptIcon from "./javascript-icon";
import MySQLIcon from "./mysql-icon";
import NextIcon from "./next-icon";
import NodeIcon from "./node-icon";
import PixelCode from "./pixel-code";
import PythonIcon from "./python-icon";
import ReactIcon from "./react-icon";
import LinkedInIcon from "./linkedin-icon";
import GithubIcon from "./github-icon";

// https://www.svgrepo.com/svg/90087/rocket-ship for rocket ship
// https://devicon.dev/ for all programming icons

const links = [
  { name: "Work", link: "work" },
  // { name: "About", link: "about" },
  { name: "Experience", link: "experience" },
  { name: "Contact", link: "contact" },
];

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 2 || scrollY - lastScrollY < -2)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function Main() {
  const [activeButton, setActiveButton] = useState("button1");
  const scrollDirection = useScrollDirection();
  const checkboxRef = useRef(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // else {
      //     entry.target.classList.remove('show');
      // }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  const scrollToSection = (link) => {
    document.getElementById(link).scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const sendEmail = () => {
    const subject =
      "[name] from [company-name]: [role-for-jacob][greetings-for-jacob]";
    const body = "";
    const mailtoLink = `mailto:jacobseol96@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  function handleClickMenu() {
    checkboxRef.current.checked = !checkboxRef.current.checked;
  }

  return (
    <>
      <div className="content">
        <div
          className={`${scrollDirection === "down" ? "hide" : "show1"
            } content-header`}
        >
          <a className="content-header-logo" onClick={scrollToTop}>
            JS
          </a>
          <div className="content-header-links">
            {links.map((link, ind) => (
              <a
                className="links"
                onClick={() => scrollToSection(link.link)}
                key={ind}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="content-header-menu">
            <input
              id="page-nav-toggle"
              class="main-navigation-toggle"
              type="checkbox"
              ref={checkboxRef}
            />
            <label for="page-nav-toggle">
              <svg class="icon--menu-toggle" viewBox="0 0 60 30">
                <g class="icon-group">
                  <g class="icon--menu">
                    <path d="M 6 0 L 54 0" />
                    <path d="M 6 15 L 54 15" />
                    <path d="M 6 30 L 54 30" />
                  </g>
                  <g class="icon--close">
                    <path d="M 15 0 L 45 30" />
                    <path d="M 15 30 L 45 0" />
                  </g>
                </g>
              </svg>
            </label>

            <nav class="main-navigation">
              <ul>
                {links.map((link, ind) => (
                  <li>
                    <a
                      className="links"
                      href={`#${link.link}`}
                      onClick={handleClickMenu}
                      key={ind}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <main className="content-main">
          {/* <img className='content-main-pic' src="pixel-art.png" /> */}
          <TypeAnimation
            className="content-main-intro"
            sequence={[1000, "Hi, my name is"]}
          />
          <div className="content-main-title">
            <span>
              <div className="content-main-letter">J</div>
              <div className="content-main-letter">a</div>
              <div className="content-main-letter">c</div>
              <div className="content-main-letter">o</div>
              <div className="content-main-letter">b</div>
            </span>
            <div className="content-main-letter">&nbsp;</div>
            <span>
              <div className="content-main-letter">S</div>
              <div className="content-main-letter">e</div>
              <div className="content-main-letter">o</div>
              <div className="content-main-letter">l</div>
              <div className="content-main-letter">.</div>
            </span>
          </div>
          <div className="content-main-subtitle">
            <div className="content-main-letter">I</div>
            <div className="content-main-letter">&nbsp;</div>
            <span>
              <div className="content-main-letter">b</div>
              <div className="content-main-letter">u</div>
              <div className="content-main-letter">i</div>
              <div className="content-main-letter">l</div>
              <div className="content-main-letter">d</div>
            </span>
            <div className="content-main-letter">&nbsp;</div>
            <span>
              <div className="content-main-letter">t</div>
              <div className="content-main-letter">h</div>
              <div className="content-main-letter">i</div>
              <div className="content-main-letter">n</div>
              <div className="content-main-letter">g</div>
              <div className="content-main-letter">s</div>
            </span>
            <div className="content-main-letter">&nbsp;</div>
            <span>
              <div className="content-main-letter">w</div>
              <div className="content-main-letter">i</div>
              <div className="content-main-letter">t</div>
              <div className="content-main-letter">h</div>
            </span>
            <div className="content-main-letter">&nbsp;</div>
            <span>
              <div className="content-main-letter">c</div>
              <div className="content-main-letter">o</div>
              <div className="content-main-letter">d</div>
              <div className="content-main-letter">e</div>
              <div className="content-main-letter">.</div>
            </span>
          </div>
          <div className="content-main-subtitle-mobile">
            I am a Software Engineer based in Vancouver, BC.
          </div>
          <a
            className="content-main-connect"
            href="https://drive.google.com/file/d/1jc3FLPytHkF7A4l8ZzKt9br_Qsv3xEJ-/view?usp=share_link"
            target="_blank"
          >
            Resume
          </a>
          {/* https://codemyui.com/dripping-down-arrow/ */}
          <a
            class="content-main-arrow-container"
            onClick={() => scrollToSection("work")}
          >
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text">Scroll down</span>
          </a>
        </main>
      </div>

      <div className="body">
        <div className="work" id="work">
          <div className="work-header hidden">
            <div className="border-left"></div>
            <div className="text-center">Some Things I've Built</div>
            <div className="border-right"></div>
          </div>

          <div className="work-main hidden">
            <a
              className="work-square hidden"
              href="https://github.com/seoljacob/GoodStudentBadStudent/tree/master"
              target="_blank"
            >
              <div className="work-square-header">
                <PixelCode />
              </div>
              <div className="work-square-title">
                Good Student Bad Student
              </div>
              <div className="work-square-description">
                Regression model based on the <i>"Higher Education Students Performance Evaluation"</i> data set to predict a student's GPA based on 33 different factors.
              </div>
              <div className="work-square-technologies">
                <div>Python</div>
              </div>
            </a>
          </div>
        </div>

        {/* <div className="about" id="about">
          <div className="about-header hidden">
            <div>About Me</div>
            <div className="border-right"></div>
          </div>

          <div className="about-main hidden">
            <div className="about-description">
              <p>
                Description Here.
              </p>
              <p>Here are some of the technologies I've been working with:</p>
              <div className="tech-stack hidden">
                <div className="image-cover">
                  <JavaIcon />
                </div>
                <div className="image-cover">
                  <JavaScriptIcon />
                </div>
                <div className="image-cover">
                  <PythonIcon />
                </div>
                <div className="image-cover">
                  <CIcon />
                </div>
                <div className="image-cover">
                  <ReactIcon />
                </div>
                <div className="image-cover">
                  <NextIcon />
                </div>
                <div className="image-cover">
                  <NodeIcon />
                </div>
                <div className="image-cover">
                  <FlaskIcon />
                </div>
                <div className="image-cover">
                  <MySQLIcon />
                </div>
                <div className="image-cover">
                  <FirebaseIcon />
                </div>
              </div>
            </div>
            <div className="about-square hidden">
              <a class="card">
                <img
                  className="portrait card__image"
                  src="/self-portrait.jpeg"
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      src="/self-portrait3.jpeg"
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">Jacob Seol</h3>
                      <span className="card__status">Vancouver, BC</span>
                    </div>
                  </div>
                  <p className="card__description">
                    Photo Taken at Ambleside Park
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div> */}

        <div className="experience" id="experience">
          <div className="experience-header hidden">
            <div>My Experience</div>
            <div className="border-right"></div>
          </div>
          <div className="experience-main hidden">
            <div className="experience-buttons">
              <button
                onClick={() => handleClick("button1")}
                className={`${activeButton === "button1" ? "experience-button-active" : ""
                  } experience-button`}
              >
                Innovibe
              </button>
              <button
                onClick={() => handleClick("button2")}
                className={`${activeButton === "button2" ? "experience-button-active" : ""
                  } experience-button`}
              >
                Coming Soon
              </button>
            </div>
            <div className="experience-descriptions">
              {activeButton === "button1" && (
                <div className="experience-description">
                  <div className="experience-description-title">Innovibe</div>
                  <div className="experience-description-role">
                    Software Developer Co-op
                  </div>
                  <div className="experience-description-date">
                    January 2022 - August 2022 | 8 months
                  </div>
                  <ul className="experience-points">
                    <li>
                      Developed a marketplace for the sale and exchange of
                      digital assets using React and TypeScript
                    </li>
                    <li>
                      Implemented server-side rendering to prefetch data with Next, resulting in a 20% reduction in
                      page load time
                    </li>
                    <li>
                      Improved system throughput by 6% by developing a Node/Express server that uses MySQL and
                      Firebase to optimize the storage and retrieval of data
                    </li>
                    <li>
                      Created an admin panel for managing user access to the web application
                    </li>
                    <li>
                      Collaborated with a cross-functional team in an Agile environment to build an enterprise-level
                      application on time and within budget
                    </li>
                  </ul>
                </div>
              )}
              {activeButton === "button2" && (
                <div className="experience-description">
                  <div className="experience-description-title">
                    Next Opportunity
                  </div>
                  <div className="experience-description-role">
                    New Grad | Internship
                  </div>
                  <div className="experience-description-date">Summer 2023</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="contact" id="contact">
          <div className="contact-header hidden">
            <div className="border-left"></div>
            <div className="text-center">Get In Touch</div>
            <div className="border-right"></div>
          </div>

          <div className="contact-main">
            <div className="contact-description hidden">
              I'm currently seeking my next opportunity.
            </div>
            <div className="contact-subdescription hidden">
              My inbox is open for any and all inquiries and for anyone who just
              wants to say hello!
            </div>
            <button className="contact-button hidden" onClick={sendEmail}>
              Let's Chat
            </button>
            <div className="contact-socials">
              <a
                className="contact-socials-cover hidden"
                href="https://www.linkedin.com/in/seoljacob/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="contact-socials-cover hidden"
                href="https://github.com/seoljacob"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </div>
            {/* <div className='contact-main-arrow-container hidden'>
                            <a className='contact-main-arrow' onClick={scrollToTop}>
                                <UpArrow />
                            </a>
                        </div> */}
          </div>
        </div>
      </div>
      <footer className="footer hidden">
        <div className="footer-text">Designed and built by Jacob Seol</div>
      </footer>
    </>
  );
}

export default Main;
