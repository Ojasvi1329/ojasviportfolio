import React from "react";
import crypto from "../../assets/portfoilio/crypto.png";
import buildcon from "../../assets/portfoilio/buildcon.png";
import figma from "../../assets/portfoilio/figma.png";
import Mern from "../../assets/portfoilio/Mern.png";
import travelfigma from "../../assets/portfoilio/travelfigma.png";
import hospital from "../../assets/portfoilio/hospital.jpeg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      name: "CryptoHunter",
      src: crypto,
      techStack: ["React JS", "Material UI", "ChartJS"],
    },
    {
      id: 2,
      name: "Buildcon",
      src: buildcon,
      techStack: ["HTML5", "CSS3", "BootStrap"],
    },
    {
      id: 3,
      name: "Health Hut",
      src: figma,
      techStack: ["Figma"],
    },
    {
      id: 4,
      name: "Hotels CR7: Stay with the best",
      src: Mern,
      techStack: [
        "React JS",
        "JavaScript",
        "HTML5",
        "Bootstrap",
        "Express.js",
        "MongoDB",
        "Node.js",
      ],
    },
    {
      id: 5,
      name: "Travel Odessey",
      src: travelfigma,
      techStack: ["Figma"],
    },
    {
      id: 6,
      name: "MedicalRestPlan",
      src: hospital,
      techStack: [
        "Java",
        "SpringBoot",
        "Redis",
        "GCP",
        "Google OAuth 2.0",
        "Rabbit MQ",
        "Kafka",
      ],
    },
  ];

  // const handleDemoClick = (id) => {
  //   switch (id) {
  //     case 1:
  //       window.open("https://namaste-react-chi.vercel.app/", "_blank");
  //       break;
  //     // Add more cases for other portfolio items if needed
  //     default:
  //       break;
  //   }
  // };

  const handleCodeClick = (id) => {
    switch (id) {
      case 1:
        window.open("https://ojasviprasad-crypto.netlify.app/");
        break;
      case 2:
        window.open("https://precious-chaja-b7b415.netlify.app/#home");
        break;
      case 3:
        window.open(
          "https://www.figma.com/proto/BAATLrQuVXDb68yupQByke/Untitled?type=design&node-id=176-1382&t=HN2LP7L1FvI3ihTn-0&scaling=scale-down&page-id=0%3A1"
        );
        break;
      case 4:
        window.open("https://github.com/PrathamHusky07/INFO6150_Final_Project");
        break;
      case 5:
        window.open(
          "https://www.figma.com/proto/CPiimlHSrbiTdxjRRbv9vO/Final-Project-Group-4?type=design&node-id=49-317&t=KQiMyrKemepA36zy-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=49%3A881&show-proto-sidebar=1"
        );
        break;
      case 6:
        window.open("https://github.com/Ojasvi1329/INFO7255");
        break;
      default:
        break;
    }
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 rounded-lg">
          {portfolios.map(({ id, name, src, techStack }) => (
            <div key={id} className="border-2 border-purple-700 rounded-md">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200"
                style={{ height: "250px", width: "100%" }} // Increased height
              />
              <div className=" text-white p-2 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <h4 className="text-sm mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-violet-500 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center px-4 py-4 mt-2">
                <button
                  onClick={() => handleCodeClick(id)}
                  className="w-1/2 px-8 py-3 bg-pink-500 hover:bg-purple-800 text-white rounded-md duration-200"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
