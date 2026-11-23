import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { socials } from "../data/homeData";
import { socialIcons } from "../assets/constant";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <ul className="social-links" aria-label="Social profiles">
          {socials.map((social) => {
            const Icon = socialIcons[social.id];

            return (
              <li key={social.id}>
                <a
                  href={social.href}
                  target={social.target}
                  rel={
                    social.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="site-nav__links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {/* Add links for other pages when their routes exist. */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;