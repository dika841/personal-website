import React from "react";
import MainLayout from "../layouts/main-layout";
import ContentLayout from "../layouts/content-layout";
import Button from "../components/Button";

const Contact = () => {
  return (
    <MainLayout>
      <ContentLayout>
        <section className="w-full" data-aos="fade-up">
          <div className="flex flex-col  justify-center max-w-screen-lg h-full">
            <article className="pb-8">
              <h1 className="md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Contact
              </h1>
              <p className="text-blue-950 dark:text-slate-200 font-semibold text-base md:text-lg">
                Submit the form below to get in touch with me
              </p>
            </article>

            <div className=" flex justify-center ">
              <form
                action="https://getform.io/f/8e1b0e1c-e15c-42f5-9c83-ba6b6e72bf94"
                method="POST"
                className=" flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2  border-2 rounded-md text-black focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2  border-2 rounded-md text-black focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 border-2 rounded-md text-black focus:outline-none"
                ></textarea>
                <div className="flex justify-center p-3">
                  <Button type="Submit" text="Submit" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default Contact;
