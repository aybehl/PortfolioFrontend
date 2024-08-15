import React from 'react';

export default function AboutMe() {
  return (
    <div id="aboutMe">
      <section
        className="flex flex-col items-center justify-center text-[1rem] py-[2.5rem] md:pt-[5rem] md:pb-[5.25rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./images/about-me-section/about-me-background.png')" }}
      >
        <div className="relative md:text-[2rem] xs:text-[1rem] font-semibold mb-[2rem] text-shade-of-white font-serif xs:mb-[1.25rem]">
          About Me<span className="text-shade-of-lighter-purple">.</span>
          <div className="absolute bottom-[-2px] left-0 w-full h-[0.125rem] bg-shade-of-lighter-purple rounded-md md:bottom-[-4px]" />
        </div>
        <div className="hidden md:text-[1.5rem] xs:text-[0.75rem] font-semibold text-shade-of-white text-center md:mb-[4rem] xs:mb-[2.75rem] xs:w-[70%] xs:block">
          <span className='block'>These are just a few aspects that define me, giving you a glimpse into</span>
          <span>who I am and what drives me forward</span>
        </div>
        <div className="flex flex-col xs:flex-row xs:items-start xs:justify-center gap-4 w-full md:w-[80%] xs:w-[85%] items-center md:gap-x-[2.5rem] xs:gap-x-[clamp(1rem, 2vw + 1rem, 3.25rem)]">
          
          {/* Efficient */}
          <div className="flex flex-row xs:flex-col items-center gap-x-[1rem] xs:gap-y-[0.5rem]">
            <picture className="flex items-center justify-center">
              <source srcSet="./images/about-me-section/icons/efficient-icon-tablet.svg" media="(min-width: 321px) and (max-width: 768px)" />
              <source srcSet="./images/about-me-section/icons/efficient-icon-mobile.svg" media="(max-width: 320px)" />
              <img src="./images/about-me-section/icons/efficient-icon.svg" alt="Efficient icon" className="max-w-full h-auto" />
            </picture>
            <div className="flex flex-col items-center mt-0 md:mt-[1rem] xs:mt-[0.25rem] xs:w-full w-[118px]">
              <div className="font-semibold text-shade-of-white mb-[0.5rem] md:text-[1.5rem] text-[0.75rem]">Efficient</div>
              <div className="text-center text-shade-of-white font-semibold md:leading-[1.875rem] md:tracking-[0.04rem] md:text-[1rem] xs:leading-[1rem] xs:tracking-[0] text-[0.5rem] leading-[0.75rem]">
                <span className='block'>Straight to the point.</span>
                <span>No redundancies</span>
              </div>
            </div>
          </div>

          {/* Scalable */}
          <div className="flex flex-row xs:flex-col items-center gap-x-[1rem] xs:gap-y-[0.5rem]">
            <picture className="flex items-center justify-center">
              <source srcSet="./images/about-me-section/icons/scalable-icon-tablet.svg" media="(min-width: 321px) and (max-width: 768px)" />
              <source srcSet="./images/about-me-section/icons/scalable-icon-mobile.svg" media="(max-width: 320px)" />
              <img src="./images/about-me-section/icons/scalable-icon.svg" alt="Scalable icon" className="max-w-full h-auto" />
            </picture>
            <div className="flex flex-col items-center mt-0 md:mt-[1rem] xs:mt-[0.25rem] xs:w-full w-[118px]">
              <div className="font-semibold text-shade-of-white mb-[0.5rem] md:text-[1.5rem] text-[0.75rem]">Scalable</div>
              <div className="text-center text-shade-of-white font-semibold md:leading-[1.875rem] md:tracking-[0.04rem] md:text-[1rem] xs:leading-[1rem] xs:tracking-[0] text-[0.5rem] leading-[0.75rem]">
                <span className='block'>I thrive in dynamic</span>
                <span className='block'>environments where challenges</span>
                <span>are opportunities for growth</span>
              </div>
            </div>
          </div>

          {/* Modular */}
          <div className="flex flex-row xs:flex-col items-center gap-x-[1rem] xs:gap-y-[0.5rem]">
            <picture className="flex items-center justify-center">
              <source srcSet="./images/about-me-section/icons/modular-icon-tablet.svg" media="(min-width: 321px) and (max-width: 768px)" />
              <source srcSet="./images/about-me-section/icons/modular-icon-mobile.svg" media="(max-width: 320px)" />
              <img src="./images/about-me-section/icons/modular-icon.svg" alt="Modular icon" className="max-w-full h-auto" />
            </picture>
            <div className="flex flex-col items-center mt-0 md:mt-[1rem] xs:mt-[0.25rem] xs:w-full w-[118px]">
              <div className="font-semibold text-shade-of-white mb-[0.5rem] md:text-[1.5rem] text-[0.75rem]">Modular</div>
              <div className="text-center text-shade-of-white font-semibold md:leading-[1.875rem] md:tracking-[0.04rem] md:text-[1rem] xs:leading-[1rem] xs:tracking-[0] text-[0.5rem] leading-[0.75rem]">
                <span className='block'>Structured mindset, breaking</span>
                <span className='block'>down complex tasks into</span>
                <span>manageable components</span>
              </div>
            </div>
          </div>

          {/* Robust */}
          <div className="flex flex-row xs:flex-col items-center gap-x-[1rem] xs:gap-y-[0.5rem]">
            <picture className="flex items-center justify-center">
              <source srcSet="./images/about-me-section/icons/robust-icon-tablet.svg" media="(min-width: 321px) and (max-width: 768px)" />
              <source srcSet="./images/about-me-section/icons/robust-icon-mobile.svg" media="(max-width: 320px)" />
              <img src="./images/about-me-section/icons/robust-icon.svg" alt="Robust icon" className="max-w-full h-auto" />
            </picture>
            <div className="flex flex-col items-center mt-0 md:mt-[1rem] xs:mt-[0.25rem] xs:w-full w-[118px]">
              <div className="font-semibold text-shade-of-white mb-[0.5rem] md:text-[1.5rem] text-[0.75rem]">Robust</div>
              <div className="text-center text-shade-of-white font-semibold md:leading-[1.875rem] md:tracking-[0.04rem] md:text-[1rem] xs:leading-[1rem] xs:tracking-[0] text-[0.5rem] leading-[0.75rem]">
                <span className='block'>Unbreakable is my first name </span>
                <span>and reliable is my second</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
