import Heading from "../components/Heading";

const Contact = () => {
  return (
    <section id="contact" className="flex items-center my-48">
      <div className="container w-full md:w-3/5 lg:w-3/4 mx-auto flex flex-col items-start gap-10 px-10">
        <Heading num="04">Contact Me</Heading>
        <p className="max-w-4xl">
          Although I am not currently looking for any opportunities but my inbox
          is always open. If you want to ask anything or have a chat with me
          feel free to drop a message or connect with me in social media. I will
          do my best to get back to you.
        </p>
        <a
          href="mailto:indranilhalder.dev@gmail.com"
          className="btn btn-outline btn-primary rounded-sm"
        >
          Say Hello!
        </a>
      </div>
    </section>
  );
};
export default Contact;
