export default function Header(){
    return (
        <>
            <div className='w-[85%] mx-auto flex justify-between items-center py-2'>
                <div className='logo'>
                    <picture>
                        <source srcSet="./images/header-section/header-logo-tablet.png" media="(min-width: 321px) and (max-width: 768px)" />
                        <source srcSet="./images/header-section/header-logo-mobile.png" media="(max-width: 320px)" />
                        <img src="./images/header-section/header-logo-desktop.png" alt="My website Logo" />
                    </picture>
                    {/* <img src="./images/header-section/header-logo-desktop.png" alt="My website Logo" /> */}
                </div>
                <div className="nav-menu hidden md:flex">
                    <nav>
                        <ul className="flex justify-center items-center text-shade-of-light-blue font-medium list-none lg:text-[clamp(0.75rem,2.5vw,1.5rem)] text-[clamp(0.75rem,2vw,1.25rem)] gap-[clamp(1rem,4vw,3rem)]">
                            <li><a href="#" className="hover:text-shade-of-purple no-underline">About Me</a></li>
                            <li><a href="#" className="hover:text-shade-of-purple no-underline">Projects</a></li>
                            <li><a href="#" className="hover:text-shade-of-purple no-underline">Skills</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contact-button hidden md:block">
                    <button className="bg-shade-of-contact-button text-shade-of-white font-medium text-[clamp(0.75rem,2vw,1.25rem)] rounded-lg py-2 px-4 border-none">Contact Me</button>
                </div>

                <div className="menu-icon md:hidden">
                    <img src="./images/header-section/hamburger-icon-mobile.svg" alt="hamburger menu icon" />
                </div>
            </div>
        </>
    );
}