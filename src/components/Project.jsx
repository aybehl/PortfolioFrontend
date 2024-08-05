import React from 'react';

const Project = ({ imageTablet, imageMobile, image, title, imageAltText, description, tags, link }) => {
  return (
    <div className="w-full flex xs:flex-row flex-col bg-shade-of-dark-blue border-2 border-shade-of-light-blue md:rounded-[1.25rem] xs:rounded-[0.75rem] rounded-[0.5rem] xs:gap-x-[1.5rem] gap-y-[0.5rem] md:p-[1.5rem] xs:p-[0.75rem] p-[0.5rem]">
      <div className="flex justify-center items-center flex-col">
        <picture className="flex justify-center items-center">
          <source srcSet={imageTablet} media="(min-width: 321px) and (max-width: 768px)" />
          <source srcSet={imageMobile} media="(max-width: 320px)" />
          <img
            src={image}
            alt={imageAltText}
            className="md:rounded-[1.25rem] xs:rounded-[0.625rem] rounded-[0.75rem] border border-[#D9D9D9] shadow-md max-w-full h-auto"
          />
        </picture>
      </div>

      <div className="flex flex-col justify-center w-full gap-y-[0.5rem] md:gap-y-[1.125rem]">
        <div className="md:text-[1.5rem] font-semibold text-shade-of-white text-[0.75rem] xs:text-left text-center">
          {title}
        </div>
        <div className="md:text-[1.25rem] font-normal text-shade-of-white text-[0.75rem]">
          {description}
        </div>
        <div className="flex items-center xs:justify-start justify-around flex-wrap md:gap-x-[1.5rem] gap-y-[0.5rem] gap-x-[1rem]">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-shade-of-project-tags text-shade-of-white md:text-[0.875rem] font-medium xs:py-[0.25rem] md:px-[1.5rem] md:rounded-[0.5rem] shadow-md border-none text-[0.5rem] xs:px-[1rem] rounded-[0.25rem] px-[0.5rem]"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex items-center xs:gap-x-[0.5rem] gap-[0.25rem]">
          <span className="md:text-[1rem] font-semibold text-shade-of-white text-[0.5rem]">View Project</span>
          <a href={link} target="_blank">
            <picture className="flex justify-center items-center">
                <source srcSet="./images/project-section/arrow-icon-tablet.svg" media="(min-width: 321px) and (max-width: 768px)" />
                <source srcSet="./images/project-section/arrow-icon-mobile.svg" media="(max-width: 320px)" />
                <img src="./images/project-section/arrow-icon.svg" alt="Arrow icon" className="max-w-full h-auto" />
            </picture>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
