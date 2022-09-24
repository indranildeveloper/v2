import Heading from "../components/Heading";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { work } from "../data/work";

const Work = () => {
  return (
    <section id="work" className="flex items-center my-32">
      <div className="container w-full md:w-3/5 lg:w-3/4 mx-auto flex flex-col items-start gap-10 px-10">
        <Heading num="03">My Creations</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 mx-auto">
          {work.map((item) => (
            <div key={item.id} className="card rounded-sm  glass">
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="flex flex-wrap gap-2 items-center justify-start my-4">
                  {item.tags.map((tag) => (
                    <div
                      key={tag}
                      className="badge badge-primary badge-outline"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="card-actions justify-start">
                  <a
                    href={item.githubLink}
                    className="btn btn-ghost text-xl rounded-sm hover:text-primary"
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={item.projectLink}
                    className="btn btn-ghost text-xl rounded-sm hover:text-primary"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto">
          <span className="text-primary">*</span> External links might not work,
          I am in the process of moving the applications from Heroku to other
          platforms.
        </p>
      </div>
    </section>
  );
};
export default Work;
