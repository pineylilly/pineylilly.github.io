import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

    const navLinks = [
        {
          label: "Home",
          link: "home"
        },
        {
          label: "Projects",
          link: "projects"
        },
        {
          label: "Certificates",
          link: "certificates"
        },
      ];

  return (
    <nav className="top-0 items-center justify-between h-16 w-full py-6 px-8 border-b-2 border-x-[100%] bg-background/30 backdrop-blur-md flex fixed z-10">

          {/* Desktop Navigation */}
          <ul className="pl-8 list-none flex items-center flex-1 space-x-8">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className=""
              >
                <Link to={`${nav.link}`} smooth={true} duration={500} className="cursor-pointer">{nav.label}</Link>
              </li>
            ))}
          </ul>
          
          



        </nav>
  )
}

export default Navbar