import React from "react";
import accenture from "../../assets/accenture.jpg";
import bharat from "../../assets/bharat.jpeg";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer/Application Development Analyst",
      company: "Accenture",
      location: "India",
      startDate: "Oct 2020",
      endDate: "Jan 2022",
      achievements: [
        "Led modernization of legacy healthcare web app using React JS and Redux, reducing load times by 40%.",
        "Developed JSON-based RESTful services in Node.js for PostgreSQL database interactions, resulting in a 20% increase in data processing.",
        "Implemented AJAX for asynchronous data fetching, improving app performance by 30%.",
        "Adopted Test-Driven Development (TDD) with Jest & React Testing Library achieving 93% unit test coverage.",
        "Enhanced user experience and conversion rates by about 15% through collaboration with UI/UX designers.",
        "Established Continuous Integration/Continuous Deployment (CI/CD) pipelines using GitHub Actions.",
        "Mentored 4 interns in front-end development frameworks like React.js, Typescript, Javascript.",
      ],
    },
    {
      title: "Associate Software Developer",
      company: "Accenture",
      location: "India",
      startDate: "July 2019",
      endDate: "Oct 2020",
      achievements: [
        "Collaborated in transforming an outdated monolithic Java 5 application into a microservices architecture.",
        "Developed features in a fintech application using Java and Spring Boot, leading to a 35% increase in successful payments.",
        "Automated email generation upon successful payment using Java, achieving a 2x efficiency improvement.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Bharat Bijlee",
      location: "India",
      startDate: "May 2017",
      endDate: "July 2017",
      achievements: [
        "Refactored Java codebase to ensure clean, reusable, and maintainable solutions.",
        "Orchestrated the complete end-to-end Software Development Life Cycle (SDLC) & Agile (Scrum) methodology processes.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-12"
    >
      <div className="max-w-screen-lg px-4 mx-auto">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            Experience
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border-2 border-purple-700 p-7 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-15 mb-6"
            >
              <div className="flex items-center space-x-4">
                {experience.company === "Accenture" ? (
                  <img
                    src={accenture}
                    alt="Accenture"
                    className="h-20 w-20 mr-4"
                  />
                ) : experience.company === "Bharat Bijlee" ? (
                  <img
                    src={bharat}
                    alt="Bharat Bijlee"
                    className="h-20 w-20 mr-4"
                  />
                ) : null}
                <div>
                  <h3 className="font-semibold">
                    {experience.title} at {experience.company}
                  </h3>
                  <p className="italic">{experience.location}</p>
                  <p>
                    {experience.startDate} – {experience.endDate}
                  </p>
                </div>
              </div>
              <ul className="list-disc ml-8">
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
