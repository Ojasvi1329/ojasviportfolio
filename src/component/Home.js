import React from "react";
import profile from "../../assets/profile.jpg";
import Typewriter from "typewriter-effect";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = ({ developerType }) => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="max-w-screen-lg flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Hi 👋, I’m Ojasvi Patel {/* Added space here */}{" "}
            <span className="font-medium" style={{ fontSize: "1.75rem" }}>
              a passionate
            </span>{" "}
            <span
              className="ml-1"
              style={{ fontSize: "3rem", color: "purple" }} // Increased font size
            >
              <Typewriter
                options={{
                  strings: [developerType],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  fontSize: "6 px", // Increased font size
                }}
              />
            </span>
          </h2>
          <p
            className="text-gray-500 py-4 max-w-md"
            style={{ fontSize: "1.25rem" }}
          >
            {" "}
            {/* Increased font size */}I have 3+ years of experience in
            Full-Stack Engineering! Connect with me for opportunites!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-violet w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex p-20 justify-end md:justify-end w-full md:w-1/2">
          <img
            src={profile}
            alt="my profile"
            style={{
              borderRadius: "30%",
              border: "3px solid violet",
              width: "300px",
              height: "320px",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
