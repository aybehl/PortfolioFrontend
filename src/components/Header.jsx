import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header(){
    const [ dropdownOpen, setDropdownOpen ] = useState(false);

    return (
        <>
            <div className='w-[85%] mx-auto flex justify-between items-center py-2 relative'>
                <div className='logo'>
                    <Link to="/">
                        <picture>
                            <source srcSet="./images/header-section/header-logo-tablet.png" media="(min-width: 321px) and (max-width: 768px)" />
                            <source srcSet="./images/header-section/header-logo-mobile.png" media="(max-width: 320px)" />
                            <img src="./images/header-section/header-logo-desktop.png" alt="My website Logo" />
                        </picture>
                    </Link>
                    {/* <img src="./images/header-section/header-logo-desktop.png" alt="My website Logo" /> */}
                </div>
                <div className="nav-menu hidden md:flex">
                    <nav>
                        <ul className="flex justify-center items-center text-shade-of-light-blue font-medium list-none lg:text-[clamp(0.75rem,2.5vw,1.5rem)] text-[clamp(0.75rem,2vw,1.25rem)] gap-[clamp(1rem,4vw,3rem)]">
                            <li>
                                <NavLink to="/" state={{ scrollTo: 'aboutMe' }} className="hover:text-shade-of-purple no-underline">About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" state={{ scrollTo: 'projects' }} className="hover:text-shade-of-purple no-underline">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" state={{ scrollTo: 'skills' }} className="hover:text-shade-of-purple no-underline">Skills</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="contact-button hidden md:block">
                    <NavLink to="/contactMe" className={({ isActive }) => isActive ? 'active-button': ''}>
                        <button className="bg-shade-of-contact-button text-shade-of-white font-medium text-[clamp(0.75rem,2vw,1.25rem)] rounded-lg py-2 px-4 border-none">
                            Contact Me
                        </button>
                    </NavLink>
                </div>

                <div className="menu-icon md:hidden" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <img src="./images/header-section/hamburger-icon-mobile.svg" alt="hamburger menu icon" />
                </div>

                {/* Dropdown Menu */}
                <div className={`md:hidden ${dropdownOpen ? 'block' : 'hidden'} bg-shade-of-dark-blue text-shade-of-white border-shade-of-lighter-purple border-2 rounded-[0.25rem] absolute top-[70%] right-0 w-[50%] z-50`}>
                    <nav>
                        <ul className="flex flex-col items-center list-none gap-1 text-[clamp(0.75rem,2vw,1.25rem)] p-[1rem]">
                            <li className='border-b-2 w-full'>
                                <NavLink to="/" state={{ scrollTo: 'aboutMe' }} className="hover:text-shade-of-purple no-underline">About Me</NavLink>
                            </li>
                            <li className='border-b-2 w-full'>
                                <NavLink to="/" state={{ scrollTo: 'projects' }} className="hover:text-shade-of-purple no-underline">Projects</NavLink>
                            </li>
                            <li className='border-b-2 w-full'>
                                <NavLink to="/" state={{ scrollTo: 'skills' }} className="hover:text-shade-of-purple no-underline">Skills</NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/contactMe" className="hover:text-shade-of-purple no-underline">Contact Me</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}