export default function Footer(){
    return (
        <footer className="bg-shade-of-dark-blue pt-[3.75rem] pb-[2.5rem] md:pt-[3.75rem] md:pb-[2.5rem]">
          <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-8 md:gap-[12.5rem] lg:gap-[18.25rem]">
            <div className="my-info">
              <div className="text-shade-of-white uppercase text-sm lg:text-2xl font-bold mb-2 text-center md:text-left">Ayushi Behl</div>
              <div className="text-shade-of-lighter-purple lg:text-xl text-xs font-normal w-full text-center md:text-left">
                A Full Stack Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product.
              </div>
            </div>
            <div className="socials">
              <div className="hidden md:block text-shade-of-white uppercase text-xs lg:text-2xl font-bold mb-2">Socials</div>
              <div className="flex gap-6 md:gap-3 justify-center md:justify-start">
                <div>
                  <a href="https://www.linkedin.com/in/ayushi-behl-51a2bb163/" target="_blank">
                    <picture>
                        <source srcSet="./images/footer-section/social-icons/linkedln-icon-tablet.png" media="(min-width: 321px) and (max-width: 768px)" />
                        <source srcSet="./images/footer-section/social-icons/linkedln-icon-mobile.png" media="(max-width: 320px)" />
                        <img src="./images/footer-section/social-icons/linkedln.png" alt="LinkedIn icon" />
                    </picture>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/aybehl" target="_blank">
                    <picture>
                        <source srcSet="./images/footer-section/social-icons/github-icon-tablet.png" media="(min-width: 321px) and (max-width: 768px)" />
                        <source srcSet="./images/footer-section/social-icons/github-icon-mobile.png" media="(max-width: 320px)" />
                        <img src="./images/footer-section/social-icons/github.png" alt="GitHub icon" />
                    </picture>
                  </a>
                </div>
                <div>
                  <picture>
                    <source srcSet="./images/footer-section/social-icons/twitter-icon-tablet.png" media="(min-width: 321px) and (max-width: 768px)" />
                    <source srcSet="./images/footer-section/social-icons/twitter-icon-mobile.png" media="(max-width: 320px)" />
                    <img src="./images/footer-section/social-icons/twitter.png" alt="Twitter icon" />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source srcSet="./images/footer-section/social-icons/youtube-icon-tablet.png" media="(min-width: 321px) and (max-width: 768px)" />
                    <source srcSet="./images/footer-section/social-icons/youtube-icon-mobile.png" media="(max-width: 320px)" />
                    <img src="./images/footer-section/social-icons/youtube.png" alt="YouTube icon" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div className="separator border-t-[0.125rem] border-shade-of-white mx-auto mb-[2rem] mt-[3rem] w-4/5 md:mb-4 md:mt-6" />
          <div className="text-shade-of-white text-center text-xs lg:font-normal lg:text-base">
            © Copyright 2024, Made by Ayushi Behl
          </div>
        </footer>
      );
}