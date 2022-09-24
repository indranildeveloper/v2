import Typed from "react-typed";

const Hero = () => {
  return (
    <section id="hero" className="flex items-center my-32">
      <div className="container w-full md:w-3/5 lg:w-3/4 mx-auto flex flex-col items-start gap-10 px-10">
        <p className="font-mono text-primary">Hi, My name is</p>
        <h1 className="text-6xl md:text-8xl font-bold">Indranil Halder</h1>

        <Typed
          strings={[
            "I build Single Page Applications",
            "I build Full Stack Applications",
            "I build Awesome Experiences",
          ]}
          typeSpeed={60}
          backSpeed={60}
          loop
          className="text-2xl md:text-4xl font-bold text-primary"
        />

        <p className="text-lg md:text-xl max-w-4xl">
          I am a full stack(MERN) software engineer specializing in building
          (and occasionally designing) exceptional web experiences. Currently, I
          am focused on learning new technologies and building awesome web
          applications at{" "}
          <a
            href="https://www.private-ai.com/"
            className="link link-hover link-primary"
            target="_blank"
          >
            Private AI
          </a>
          .
        </p>
        <a href="#work" className="btn btn-outline btn-primary rounded-sm">
          See My Work
        </a>
      </div>
    </section>
  );
};
export default Hero;
