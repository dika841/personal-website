import ContentLayout from "../layouts/content-layout";
import MainLayout from "../layouts/main-layout";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "bmi calculator",
      projectImg: "./bmiCalculator.jpg",
      href: "https://randika-bmi-calculator.netlify.app/",
      github: "https://github.com/dika841/skilvul-TPA-002",
    },
    {
      id: 2,
      name: "photo gallery",
      projectImg: "./photoGallery.jpg",
      href: "https://randika-fe2835657.netlify.app/",
      github: "https://github.com/dika841/photo-gallery-rg-camp",
    },
    {
      id: 3,
      name: "random user",
      projectImg: "./randomUser.jpg",
      href: "https://randika-random-user.netlify.app/",
      github: "https://github.com/dika841/react-random-user",
    },
    {
      id: 4,
      name: "todo list",
      projectImg: "./todoList.jpg",
      href: "https://randika-todo-app.netlify.app/",
      github: "https://github.com/dika841/skilvul-todo-list-with-redux",
    },
  ];
  return (
    <MainLayout>
      <ContentLayout>
        <section className="flex flex-col gap-y-2 dark:text-slate-200 text-blue-950">
          <div className="flex flex-col">
            <h1 className="md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Project
            </h1>
          </div>
          <h1 className="text-base md:text-lg font-semibold mb-3 ">
            Checkout my work here
          </h1>
          <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="shadow-md shadow-gray-600 bg-slate-100 rounded-lg duration-200 hover:scale-105"
              >
                <div>
                  <img
                    src={project.projectImg}
                    alt={project.name}
                    className="rounded-t-md overflow-hidden h-36 w-full"
                  />
                  <p className="text-center text-lg font-semibold py-3 capitalize text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {project.name}
                  </p>

                  <div className="w-full px-8 py-3 flex gap-x-4">
                    <a href={project.github}>
                      <FaGithub className="text-xl md:text-3xl text-blue-950" />
                    </a>
                    <a href={project.href}>
                      <TbWorld className="text-xl md:text-3xl text-blue-950" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default Project;
