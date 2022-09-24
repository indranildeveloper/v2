import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Heading from "../components/Heading";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col  my-32">
      <div className="container w-full md:w-3/5 lg:w-3/4 mx-auto flex flex-col items-start gap-10 px-10">
        <Heading num="02">Experience</Heading>
        <p className="max-w-4xl">
          I am a Full-stack Software Developer and Javascript Enthusiast, Who
          Loves Building Things In Javascript. I have a predilection for design
          and enjoy working on projects where approaching design and development
          as co-dependent processes can lead to smarter solutions and a better
          overall product experience for fellow humans. Currently I am Frontend
          Engineer at{" "}
          <a
            href="https://www.private-ai.com/"
            className="link link-hover link-primary"
            target="_blank"
          >
            Private AI
          </a>
          .
        </p>
        <VerticalTimeline>
          {experience.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#0C1322", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid #0C1322",
              }}
              date={`${item.from} - ${item.to}`}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={item.icon}
            >
              <h1 className="text-primary">{item.name}</h1>
              <p className="text-neutral-content">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default Experience;
