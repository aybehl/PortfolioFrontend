import React from 'react';

const Hexagon = ({ src, name }) => (
    <div className="hexagon">
      <img src={src} alt={`${name} Logo`} className="lg:w-[60%] md:w-[50%] xs:w-[50%] w-[50%] xs:mt-0 mt-[-0.5rem]" />
      <div className="text-center lg:text-[0.65rem] md:text-[0.5rem] xs:text-[0.35rem] text-[0.38rem] font-semibold text-shade-of-light-blue">{name}</div>
    </div>
);

const hexagonData = [
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "Typescript" },
  { logo: "./images/skills-section/logos/css.svg", name: "SpringBoot" },
  { logo: "./images/skills-section/logos/css.svg", name: "ElasticSearch" },
  { logo: "./images/skills-section/logos/css.svg", name: "PHPMyAdmin" },
  { logo: "./images/skills-section/logos/css.svg", name: "Javascript" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  { logo: "./images/skills-section/logos/css.svg", name: "CSS" },
  

  // Add more skill objects here...
];
export default function Skills() {
    return (
      <div>
        <section className="skills-page bg-gradient-to-b from-black to-[#6461CC] py-16 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full md:mb-[2rem] mb-0">
                <div className="relative md:text-[2rem] xs:text-[1rem] font-semibold mb-[2rem] text-shade-of-white font-serif xs:mb-[1.25rem]">
                    Skills<span className="text-shade-of-lighter-purple">.</span>
                    <div className="absolute bottom-[-2px] left-0 w-full h-[0.125rem] bg-shade-of-lighter-purple rounded-md md:bottom-[-4px]" />
                </div>
                <div className="hidden md:text-[1.5rem] xs:text-[0.75rem] font-semibold text-shade-of-white text-center md:mb-[4rem] xs:mb-[2.75rem] xs:w-[70%] xs:block">
                    My arsenal of skills and technologies, driving the success of my projects.
                </div>
            </div>
          
          
          {/* Hexagons for screens greater than 768px */}
          <div className="hidden md:grid grid-cols-10">
            {hexagonData.slice(0, 10).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
          <div className="hidden md:grid grid-cols-9 transform -translate-y-[1rem]">
            {hexagonData.slice(10, 19).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
          <div className="hidden md:grid grid-cols-8 transform -translate-y-[2rem]">
            {hexagonData.slice(19, 27).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
  
          {/* Image for screens greater than 768px */}
          <div className="hidden md:block mt-10">
            <picture>
              <source srcSet="./images/skills-section/coder-with-mug.png" media="(min-width: 1024px)" />
              <source srcSet="./images/skills-section/coder-with-mug-tablet.png" media="(min-width: 768px) and (max-width: 1024px)" />
              <img src="./images/skills-section/coder-with-mug.png" alt="Coder with a mug" className="w-full h-auto"/>
            </picture>
          </div>
  
          {/* Hexagons for screens lesser than 768px */}
          <div className="md:hidden grid grid-cols-5 gap-1">
            {hexagonData.slice(0, 5).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-4 gap-1">
            {hexagonData.slice(5, 9).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-5 gap-1">
            {hexagonData.slice(9, 14).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
  
          {/* Image for screens lesser than 768px */}
          <div className="md:hidden my-[2rem]">
            <picture>
              <source srcSet="./images/skills-section/coder-with-mug-mobile.png" media="(max-width: 320px)" />
              <source srcSet="./images/skills-section/coder-with-mug-tablet.png" media="(min-width: 321px) and (max-width: 768px)" />
              <img src="./images/skills-section/coder-with-mug-mobile.png" alt="Coder with a mug" className="w-full h-auto"/>
            </picture>
          </div>
  
          <div className="md:hidden grid grid-cols-4 gap-1">
            {hexagonData.slice(14, 18).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-5 gap-1">
            {hexagonData.slice(18, 23).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-4 gap-1">
            {hexagonData.slice(23, 27).map((skill, index) => (
              <Hexagon key={index} src={skill.logo} name={skill.name} />
            ))}
          </div>
        </section>
      </div>
    );
  }