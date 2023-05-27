import React from "react";
import MainLayout from "../layouts/main-layout";
import ContentLayout from "../layouts/content-layout";

const About = () => {
  const skills = [
    { id: 1, name: "html", skillsImg: "./html.svg" },
    { id: 2, name: "css", skillsImg: "./css.svg" },
    { id: 3, name: "javascript", skillsImg: "./javascript.svg" },
    { id: 4, name: "react js", skillsImg: "./react.svg" },
    { id: 5, name: "tailwind", skillsImg: "./tailwind.svg" },
    { id: 6, name: "git", skillsImg: "./git.svg" },
  ];
  return (
    <MainLayout>
      <ContentLayout>
        <section className="flex flex-col gap-y-2 dark:text-slate-200 text-blue-950">
          <div className="flex flex-col gap-y-4">
            <h1 className="md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              About me
            </h1>
            <p className="md:text-lg text-base text-justify ">
              I am a student pursuing a degree in technology. I have experience
              in web programming, especially in front-end development using
              HTML, CSS and JavaScript. I also have skills in using javascript
              framework like React and CSS frameworks like Tailwind. I am very
              interested in doing an internship in front-end web development and
              am confident that I can add positive value to the company.
            </p>
          </div>
          <h1 className="text-xl md:text-4xl font-bold mt-6 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            These are the technologies I've worked with
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-3 md:gap-y-6 items-center py-3 ">
            {skills.map((skill) => (
              <div
                className="flex gap-x-2 items-center rounded border-2 border-slate-200 p-2"
                key={skill.id}
              >
                <img
                  className="w-8 md:w-16"
                  src={skill.skillsImg}
                  alt={skill.name}
                />
                <p className="capitalize">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default About;
