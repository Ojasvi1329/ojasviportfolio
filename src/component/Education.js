import React from "react";
import Northeastern_seal from "../../assets/Northeastern_seal.png"; // Ensure the path is correct
import Srmseal from "../../assets/Srmseal.png"; // Ensure the path is correct

const Education = () => {
  const educationData = [
    {
      university: "Northeastern University",
      location: "Boston, Massachusetts",
      degree: "Master of Science in Computer Software Engineering",
      graduationDate: "September 2022 - May 2024",
      courses: [
        "Web Design",
        "UI/UX",
        "Concepts of Object-Oriented Design",
        "Data Structures and Algorithms",
        "Database Design and Management",
        "Design Patterns",
        "Advanced Big Data Indexing",
      ],
      seal: Northeastern_seal, // Added image reference
    },
    {
      university: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      degree: "Bachelor of Engineering in Technology",
      graduationDate: "May 2015 - May 2019",
      courses: [
        "Data Structures and Algorithms",
        "Probability and Statistics",
        "Operating Systems",
        "Python for Everybody",
      ],
      seal: Srmseal, // Added image reference
    },
  ];

  return (
    <div
      name="education"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-8 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            Education
          </p>
        </div>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="text-m mt-10 mb-10 p-5 border-2 border-purple-950 rounded-lg transform transition duration-300 ease-in-out shadow-orange-900"
          >
            <div className="flex items-center">
              {" "}
              {/* Flex container for alignment */}
              <img
                src={edu.seal}
                alt={`${edu.university} Seal`}
                className="h-20 w-20 mr-4"
              />
              <div>
                <h3 className="font-semibold">
                  {edu.university},{edu.location}
                </h3>
                <p>{edu.degree}</p>
                <p> {edu.graduationDate}</p>
              </div>
            </div>
            <p className="font-medium mt-4">Relevant Course Work:</p>
            <ul className="list-disc ml-5">
              {edu.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
