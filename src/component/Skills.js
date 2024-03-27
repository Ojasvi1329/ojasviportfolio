import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import node from "../../assets/node.png";
import typescript from "../../assets/typescript.png";
import jquery from "../../assets/jquery.png";
import java from "../../assets/Java-Logo.png";
import redux from "../../assets/redux.png";
import springBoot from "../../assets/spring Boot.png";
import restapi from "../../assets/restapis.jpeg";
import python from "../../assets/python.jpeg";
import MUI from "../../assets/MUI.png";
import express from "../../assets/express.png";
import firebase from "../../assets/firebase.png";
import netlify from "../../assets/netlify.jpeg";
import mysql from "../../assets/mysql.jpg";
import postgresql from "../../assets/postgresql.png";
import ajax from "../../assets/ajax.png";
import postman from "../../assets/postman.png";
import mongodb from "../../assets/mongodb.png";

const Skills = () => {
  const frontEndTechs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-violet-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-pink-500" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-green-500" },
    { id: 5, src: MUI, title: "MUI", style: "shadow-teal-500" },
    { id: 6, src: redux, title: "Redux", style: "shadow-purple-500" },
    { id: 22, src: ajax, title: "AJAX", style: "shadow-blue-900" },
    // ... add more front-end technologies if needed
  ];

  const backEndTechs = [
    { id: 8, src: node, title: "Node.js", style: "shadow-green-700" },
    { id: 9, src: express, title: "Express", style: "shadow-pink-900" },
    { id: 10, src: java, title: "Java", style: "shadow-red-900" },
    { id: 11, src: python, title: "Python", style: "shadow-red-900" },
    { id: 12, src: springBoot, title: "SpringBoot", style: "shadow-red-900" },
    { id: 13, src: restapi, title: "RestAPI", style: "shadow-yellow-900" },
    {
      id: 14,
      src: typescript,
      title: "Typescript",
      style: "shadow-yellow-900",
    },
    { id: 15, src: jquery, title: "Jquery", style: "shadow-yellow-900" },

    // ... add more back-end technologies if needed
  ];

  const databases = [
    { id: 16, src: mongodb, title: "MongoDB", style: "shadow-yellow-900" },
    { id: 20, src: postgresql, title: "PostgreSQL", style: "shadow-blue-900" },
    { id: 21, src: mysql, title: "MySQL", style: "shadow-blue-900" },
    // ... add more database technologies if needed
  ];

  const toolsAndTechs = [
    { id: 6, src: github, title: "GitHub", style: "shadow-purple-900" },
    { id: 23, src: postman, title: "Postman", style: "shadow-blue-900" },
    { id: 24, src: firebase, title: "Firebase", style: "shadow-blue-900" },
    { id: 25, src: netlify, title: "Netlify", style: "shadow-blue-900" },
    // ... add more tools and technologies if needed
  ];

  const renderTechs = (techs, borderColor) => (
    <div className={`flex flex-wrap justify-center items-center gap-4 p-4`}>
      {techs.map(({ id, src, title, style }) => (
        <div
          key={id}
          className={`flex flex-col items-center justify-center p-2 rounded-md border-2 ${borderColor} ${style} transform  duration-300`}
        >
          <img src={src} alt={title} className="w-10 h-10 object-contain" />
          <p className="mt-2 text-sm">{title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            Skills
          </p>
        </div>
        <p className="py-6">These are the technologies I've worked with</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-purple-500 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 p-4 text-purple-500">
              Frontend
            </h3>
            {renderTechs(frontEndTechs, "border-pink-500")}
          </div>
          <div className="border-2 border-green-500 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 p-4 text-green-500">
              Backend
            </h3>
            {renderTechs(backEndTechs, "border-sky-500")}
          </div>
          <div className="border-2 border-yellow-500 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 p-4 text-yellow-500">
              Databases
            </h3>
            {renderTechs(databases, "border-red-800")}
          </div>
          <div className="border-2 border-orange-500 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 p-4 text-orange-500">
              Tools & Technologies
            </h3>
            {renderTechs(toolsAndTechs, "border-gray-400")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
