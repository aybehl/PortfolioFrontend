import React from 'react';
import Project from '../components/Project';

const mockData = [
  {
    imageTablet: "./images/project-section/canada-road-ready-image-tablet.jpeg",
    imageMobile: "./images/project-section/canada-road-ready-image-mobile.jpeg",
    image: "./images/project-section/canada-road-ready-image.jpeg",
    title: "Canada Road Ready",
    description: "Learning app to prepare for driving test in Canada. It is for people to practice and get familiar with the G1 exam.",
    tags: ["Javascript", "CSS", "HTML"],
    imageAltText: "Car road exam evaluation",
    link: "https://github.com/aybehl/frontend-web-dev-http-5122/tree/main/PetProject"
  },
  {
    imageTablet: "./images/project-section/online-bakery-image-tablet.jpeg",
    imageMobile: "./images/project-section/online-bakery-image-mobile.jpeg",
    image: "./images/project-section/online-bakery-image.jpeg",
    title: "Online Bakery App",
    description: "An online bakery, implemented into a mobile application. This project was entirely created using Figma.",
    tags: ["Figma", "Prototypes", "Wireframes"],
    imageAltText: "An image of a bakery shop",
    link: "https://www.figma.com/design/miuCSZCfeirr00sEkNrLrA/Assignment4-Design-Sprint?node-id=0-1&t=55XUTo7szPolc7dS-0"
  },
  {
    imageTablet: "./images/project-section/google-calendar-image-tablet.jpeg",
    imageMobile: "./images/project-section/google-calendar-image-mobile.jpeg",
    image: "./images/project-section/google-calendar-image.jpg",
    title: "LLD of Google Calendar",
    description: "The Low Level Design of Google Calendar implemented using Design patterns in Java.",
    tags: ["Java", "GitHub", "System Design"],
    imageAltText: "A girl checking out a Calendar",
    link: "https://github.com/"
  }
];

export default function Projects() {
  return (
    <div>
      <section
        className="flex flex-col items-center justify-center md:pt-[3.75rem] md:pb-[6.25rem] bg-gradient-to-b from-[#615EC6] to-[#0A092D] md:gap-y-[3rem] xs:py-[3.75rem] xs:gap-y-[1rem] pt-[3rem] pb-[2.5rem] gap-y-[0.5rem]"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative md:text-[2rem] xs:text-[1rem] font-semibold mb-[2rem] text-shade-of-white font-serif xs:mb-[1.25rem]">
            Projects<span className="text-shade-of-light-blue">.</span>
            <div className="absolute bottom-[-2px] left-0 w-full h-[0.125rem] bg-shade-of-light-blue rounded-md md:bottom-[-4px]" />
          </div>
          <div className="hidden md:text-[1.5rem] xs:text-[0.75rem] font-semibold text-shade-of-white text-center md:mb-[4rem] xs:mb-[2.75rem] xs:w-[70%] xs:block">
            A collection of my most significant projects, showcasing skills in design and development
          </div>
        </div>

        <div className="flex flex-col items-center md:w-[72%] md:gap-y-[1.875rem] xs:w-[72%] xs:gap-y-[1rem] xs:w-[80%] md:row-gap-[1rem] w-[72%] gap-y-[0.75rem]">
          {mockData.map((project, index) => (
            <Project
              key={index}
              imageTablet={project.imageTablet}
              imageMobile={project.imageMobile}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageAltText={project.imageAltText}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
