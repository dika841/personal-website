import MainLayout from "../layouts/main-layout";
import ContentLayout from "../layouts/content-layout";
import Button from "../components/Button";
import SocialLink from "../components/SocialLink";

const Home = () => {
  return (
    <MainLayout>
      <ContentLayout>
        <section className="flex items-center justify-center text-center md:text-justify md:justify-between flex-col md:flex-row-reverse w-full text-blue-950 dark:text-slate-200 gap-y-5">
          <figure className="flex flex-col gap-y-7 justify-center items-center">
            <img
              src="/heroImg.jpg"
              className="rounded-full w-32 md:w-60"
              alt="randika.jpg"
            />
            <SocialLink />
          </figure>
          <div className="md:w-1/2 md:text-xl gap-y-7 md:flex md:flex-col">
            <h1 className="md:text-3xl font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am Randika
            </h1>
            <p className="tracking-tight mb-4 font-semibold">
              Informatics engineering student at Nusantara Islamic University,
              has an interest in website development, especially in front end
              web developer
            </p>
            <Button>
              <a href="#">Download CV</a>
            </Button>
          </div>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default Home;
