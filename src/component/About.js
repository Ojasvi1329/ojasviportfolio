import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-10">
          Hello there! I'm Ojasvi Patel, a graduate student at Northeastern
          University pursuing Masters in Software Engineering.
        </p>

        <p className=" text-xl mt-10">
          I'm passionate Software Engineer with interest in Full-Stack,
          Frontend, Backend Development.
        </p>
        <p className=" text-xl mt-10">
          Prior to my studies at Northeastern, I worked as a Full Stack
          Developer at Accenture. During my tenure at Accenture I worked with
          various clients across domains such as Healthcare and Fintech. I have
          also worked on deployment of the applications on cloud (AWS) and was
          involved in other cloud related activities.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
