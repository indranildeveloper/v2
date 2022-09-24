import Heading from "../components/Heading";
import AboutImg from "../assets/about/about.jpg";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  const technologies = [
    {
      id: 1,
      title: "React",
    },
    {
      id: 2,
      title: "Redux",
    },
    {
      id: 3,
      title: "Typescript",
    },
    {
      id: 4,
      title: "NextJS",
    },
    {
      id: 5,
      title: "GatsbyJS",
    },
    {
      id: 6,
      title: "Tailwind Css",
    },
    {
      id: 7,
      title: "NodeJS",
    },
    {
      id: 8,
      title: "REST API",
    },
  ];

  return (
    <section id="about" className="flex items-center relative my-32">
      <div className="container w-full md:w-3/5 lg:w-3/4 mx-auto flex flex-col items-start gap-10 px-10">
        <Heading num="01">About Me</Heading>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-12 lg:col-start-1 lg:col-end-8">
            <p className="mb-4">
              Hello My name is Indranil Halder and I enjoy building full stack
              web applications. I am writing code for 4+ years. I started my
              programming journey when I was in the First Year of my Graduation.
              I have completed my Graduation in Physics and Currently doing my
              Masters Degree in Physics.
            </p>

            <p className="mb-4">
              Programming is my hobby and passion. I am a self-taught developer
              and most of the things I have learnt is from Internet, whether it
              is a Youtube Video or Some Udemy Courses.
            </p>

            <p className="mb-4">
              Fast forward to today I have worked on several technologies and I
              have built several projects. Recently I have joined a Canadian
              Startup{" "}
              <a
                href="https://www.private-ai.com/"
                className="link link-hover link-primary"
                target="_blank"
              >
                Private AI
              </a>{" "}
              as a frontend developer.
            </p>

            <div className="mb-4">
              Here are some technologies which I have been working on:
              <div className="grid grid-rows-4 grid-cols-2 mt-4">
                {technologies.map((item) => (
                  <p key={item.id} className="flex items-center">
                    <FiArrowRight className="mr-4 text-primary" />
                    <span className="font-mono text-sm">{item.title}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-12 lg:col-start-8 lg:col-end-12">
            <img
              src={AboutImg}
              className="h-64 w-64 object-cover mx-auto rounded-sm shadow-lg shadow-primary-content"
              alt="Indranil Halder"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
