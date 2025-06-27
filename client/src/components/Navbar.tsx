import React from "react";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 flex justify-end space-x-8 p-4 text-lg">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`transition-colors duration-300 hover:text-gray-400 ${
            activeSection === link.id ? "text-teal-500" : "text-white"
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};