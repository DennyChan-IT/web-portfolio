import codeImage from "../assets/florian-olivo-4hbJ-eymZ1o-unsplash modified.jpg";
import profilePic from "../assets/IMG_5248.jpg";
import animationPic from "../assets/ChatGPT Image Mar 26, 2025, 06_07_09 PM_modified no bg.png";
import posAppSc from "../assets/POS.png";
import shiftEaseAppSc from "../assets/ShiftEase.png";
import htmlLogo from "../assets/Html Logo.png";
import cssLogo from "../assets/Css Logo.png";
import sassLogo from "../assets/Sass Logo.png";
import tailwindCssLogo from "../assets/Tailwind Logo.png";
import javascriptLogo from "../assets/Js Logo.png";
import typescriptLogo from "../assets/Ts Logo.png";
import jQueryLogo from "../assets/jQuery Logo.png";
import reactLogo from "../assets/React Logo.png";
import nextJsLogo from "../assets/Nextjs Logo.png";
import nodeJsLogo from "../assets/NodeJS Logo.png";
import mongoDbLogo from "../assets/Mongodb Logo.png";
import gitLogo from "../assets/Git Logo.png";
import figmaLogo from "../assets/Figma Logo.png";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

function Home() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "contact"];
    const handleScroll = () => {
      let current = "home";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          // Check if the section's middle is within the viewport
          if (
            top <= window.innerHeight / 2 &&
            top + height > window.innerHeight / 2
          ) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set the initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Message sent!");
        // Clear form
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Use the Navbar component and pass activeSection */}
      <Navbar activeSection={activeSection} />
      {/* Hero Section with Background Image */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <img
          src={codeImage}
          alt="Code Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Fade overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_0%,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.95)_70%)] z-10" />

        {/* Hero Content */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center h-full px-6 md:px-16 gap-10">
          {/* Left: Text Content */}
          <div className="text-white text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I am <span className="text-teal-500">Denny</span>,
              <br />
              <span className="text-white">A Web Developer</span>
            </h1>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open("/Denny Chan-resume.pdf", "_blank")}
                className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-6 py-3 rounded shadow transition"
              >
                Resume ↓
              </button>
              <a
                href="#contact"
                className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded transition inline-block"
              >
                Contact Me
              </a>{" "}
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 ">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-teal-500/60 blur-lg opacity-70 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section id="about" className="bg-white text-black pt-16 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2">
            <div>
              <img
                src={animationPic}
                alt="Animation Picture"
                className="w-80 h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg leading-relaxed mb-4">
                Hello! I’m a passionate web developer with a focus on creating
                beautiful, functional, and user-friendly websites. As a Web
                Developer, I'm proficient in a variety of programming languages
                and frameworks, including HTML, CSS. and Javascript. I have
                experience with popular technologies such as MongoDB, Express,
                React and NodeJS.
              </p>
              <p className="text-lg leading-relaxed">
                In my free time, I enjoy watching movies and traveling.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gradient-to-b from-zinc-900 to-zinc-700 text-white pt-16 pb-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-80">
            {/* Project Card #1 – Restaurant Point of Sale */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="bg-gray-700 h-40 rounded mb-4 flex items-center justify-center">
                <img
                  src={posAppSc}
                  alt="POS App Screenshot"
                  className="w-full h-full object-fill"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Restaurant Point of Sale
              </h3>
              <p className="text-gray-300 mb-4">
                A dynamic point-of-sale system. It manages menus, orders, and
                payments for a restaurant, featuring robust endpoints for
                real-time ordering and payment processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm">Tech Stack:</span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  HTML
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  Express
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  MongoDB
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  Mongoose
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  Bootstrap
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/DennyChan-IT/point-of-sale-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition"
                >
                  Code
                </a>
                <a
                  href="https://point-of-sale-app-dc.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded transition"
                >
                  Demo
                </a>
              </div>
            </div>

            {/* Project Card #2 – ShiftEase */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="bg-gray-700 h-40 rounded mb-4 flex items-center justify-center">
                <img
                  src={shiftEaseAppSc}
                  alt="POS App Screenshot"
                  className="w-full h-full object-fill"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">ShiftEase</h3>
              <p className="text-gray-300 mb-4">
                ShiftEase is a comprehensive scheduling and shift management
                system designed for organizations. It features dynamic
                availability management, role-based requests/approvals, and
                real-time scheduling updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm">Tech Stack:</span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  TypeScript
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  Tailwind CSS
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  Clerk
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  Express
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  Prisma
                </span>
                <span className="bg-gray-600 text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/DennyChan-IT/shift-ease-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition"
                >
                  Code
                </a>
                <a
                  href="https://shift-ease-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded transition"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="bg-white text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills
          </h2>

          {/* Programming Skills */}
          <h3 className="text-2xl font-semibold mb-6">Programming Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mb-12 justify-items-center">
            {[
              { name: "HTML5", imgSrc: htmlLogo },
              { name: "CSS3", imgSrc: cssLogo },
              { name: "Sass", imgSrc: sassLogo },
              { name: "Tailwind CSS", imgSrc: tailwindCssLogo },
              { name: "JavaScript", imgSrc: javascriptLogo },
              { name: "TypeScript", imgSrc: typescriptLogo },
              { name: "jQuery", imgSrc: jQueryLogo },
              { name: "React", imgSrc: reactLogo },
              { name: "Next.js", imgSrc: nextJsLogo },
              {
                name: "Express",
                imgSrc:
                  "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
              },
              { name: "Node.js", imgSrc: nodeJsLogo },
              {
                name: "Prisma",
                imgSrc: "https://prismalens.vercel.app/header/logo-white.svg",
              },
              {
                name: "PostgreSQL",
                imgSrc:
                  "https://www.postgresql.org/media/img/about/press/elephant.png",
              },
              { name: "MongoDB", imgSrc: mongoDbLogo },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="w-28 h-28 flex flex-col items-center justify-center p-4 bg-zinc-800 rounded-lg shadow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:brightness-125 hover:ring-2 hover:ring-teal-500 cursor-pointer"
              >
                <img
                  src={skill.imgSrc}
                  alt={skill.name}
                  className="w-16 h-16 rounded-[3px] object-contain mb-2"
                />
                <span className="text-white text-sm">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Tools & Other Skills */}
          <h3 className="text-2xl font-semibold mb-6">Tools & Other Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "Git", imgSrc: gitLogo },
              {
                name: "GitHub",
                imgSrc:
                  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
              },
              { name: "Figma", imgSrc: figmaLogo },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="w-28 h-28 flex flex-col items-center justify-center p-4 bg-zinc-800 rounded-lg shadow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:brightness-125 hover:ring-2 hover:ring-teal-500 cursor-pointer"
              >
                <img
                  src={tool.imgSrc}
                  alt={tool.name}
                  className="w-16 h-16 rounded-[3px] object-contain mb-2"
                />
                <span className="text-white text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-b from-zinc-900 to-zinc-700 text-white py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left side */}
            <div>
              <p className="mb-6 leading-relaxed">
                Feel free to reach out to me for any inquiries, project
                proposals, or just to say hello. I’m always open to discussing
                new projects and opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Email:</span>
                  <span className="text-gray-300">denny.tanuji@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Location:</span>
                  <span className="text-gray-300">
                    Vancouver, British Columbia, Canada
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-zinc-800 p-6 rounded-lg shadow">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-semibold text-sm"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-semibold text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message"
                    className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-6 py-3 rounded shadow transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default Home;
