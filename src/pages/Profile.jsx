export default function Profile() {
  return (
    <main>
      {/* Profile Page for Desktop and Tablet */}
      <section className="hidden xs:flex xs:w-[85%] xs:mx-auto md:my-[6.25rem] md:justify-between md:gap-x-[4.5rem] xs:mt-[2.5rem] xs:mb-[3.75rem] xs:gap-x-[2rem]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="md:text-[2rem] font-semibold xs:text-[1.5rem] xs:px-[0.5rem] text-shade-of-light-blue md:px-4">Hi there!</div>
            <div className="md:text-[5rem] xs:text-[2.75rem] font-semibold text-shade-of-dark-blue md:pt-[0.25rem] md:pb-[1rem] md:px-[1rem] xs:py-[0rem] xs:px-[0.5rem]">
              <span className="text-shadow">
                <span className="text-shade-of-contact-button">I'm</span> Ayushi <span className="relative">
                  Behl<span className="text-shade-of-contact-button">.</span>
                  <span className="absolute bottom-[-4px] left-0 w-full h-[0.25rem] bg-shade-of-contact-button rounded-[0.5rem]" />
                </span>
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className="md:text-xl xs:text-[0.75rem] font-medium text-shade-of-light-blue md:px-4 xs:px-[0.5rem] md:mb-[1.5rem] xs:mb-[0.75rem]">
              <span className="text-shade-of-contact-button">&lt;</span>Bringing Vision to Life in Pixels and Code<span className="text-shade-of-contact-button">/&gt;</span>
            </div>
            <div className="flex xs:gap-[12px] md:gap-[1.5rem] xs:mx-[0.5rem] md:mx-4">
              <div className="md:text-base xs:text-[0.5rem] font-medium text-shade-of-white bg-shade-of-contact-button rounded-[0.5rem] xs:rounded-[0.25rem] xs:py-[0.25rem] xs:px-[0.5rem] md:py-[0.75rem] md:px-[1rem] shadow text-center">Frontend Developer</div>
              <div className="md:text-base xs:text-[0.5rem] font-medium text-shade-of-white bg-shade-of-contact-button rounded-[0.5rem] xs:rounded-[0.25rem] xs:py-[0.25rem] xs:px-[0.5rem] md:py-[0.75rem] md:px-[1rem] shadow text-center">Backend Developer</div>
            </div>
          </div>
        </div>
        <div className="text-right flex flex-col justify-center">
          <picture>
            <source srcSet="./images/profile-section/profile-pic-1.5x.png" media="(min-width: 1440px)" />
            <source srcSet="./images/profile-section/profile-pic-tablet.png" media="(max-width: 768px)" />
            <img src="./images/profile-section/profile-pic-1x.png" alt="my profile picture" className="max-w-full h-auto" />
          </picture>
        </div>
      </section>

      {/* Profile Page for Mobile */}
      <section className="xs:hidden flex flex-col w-[85%] mx-auto my-[3.75rem] gap-[2.75rem]">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-xl font-semibold text-shade-of-light-blue">Hi there!</div>
          <div className="text-2xl font-semibold text-shade-of-dark-blue py-1 text-center">
            <span className="text-shade-of-contact-button">I'm</span> Ayushi <span className="relative">
              Behl<span className="text-shade-of-contact-button">.</span>
              <span className="absolute bottom-[-2px] left-0 w-full h-[0.125rem] bg-shade-of-contact-button rounded-[0.5rem]" />
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <picture>
            <source srcSet="./images/profile-section/profile-pic-1.5x.png" media="(min-width: 1440px) and (max-width: 769px)" />
            <source srcSet="./images/profile-section/profile-pic-tablet.png" media="(min-width: 321px) and (max-width: 768px)" />
            <source srcSet="./images/profile-section/profile-pic-mobile.png" media="(max-width: 320px)" />
            <img src="./images/profile-section/profile-pic-1x.png" alt="my profile picture" className="max-w-full h-auto" />
          </picture>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="text-xs font-medium text-shade-of-lighter-purple"><span className="text-shade-of-contact-button">&lt;</span>Bringing Vision to Life in Pixels and Code<span className="text-shade-of-contact-button">/&gt;</span></div>
          <div className="flex gap-[0.75rem]">
            <div className="text-xs font-medium text-shade-of-white bg-shade-of-contact-button rounded-[0.25rem] py-[0.25rem] px-[0.4rem] text-center">Frontend Developer</div>
            <div className="text-xs font-medium text-shade-of-white bg-shade-of-contact-button rounded-[0.25rem] py-[0.25rem] px-[0.34rem] text-center">Backend Developer</div>
          </div>
        </div>
      </section>
    </main>
  );
}
