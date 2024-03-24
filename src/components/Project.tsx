import { Sites } from "./Sites";
import { Title } from "./Title";

export const Project = () => {
  return (
    <>
      <Title name="Project" />
      <div className="flex flex-row gap-4">
        {data.map((site, index) => (
          <Sites
            key={index}
            name={site.name}
            url={site.url}
            description={site.description}
            icon={site.icon}
          />
        ))}
      </div>
    </>
  );
};

const data = [
  {
    name: "To be done",
    url: "https://github.com/keqing77/fe_interview/issues",
    description: "Waiting for the project to be done",
    icon: "https://www.google.com",
  },
  {
    name: "To be done",
    url: "https://github.com/keqing77/fe_interview/issues",
    description: "I have no idea",
    icon: "https://www.google.com",
  },
];
