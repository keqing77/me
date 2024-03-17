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
    name: "Project1",
    url: "https://www.google.com",
    description: "amazing project",
    icon: "https://www.google.com",
  },
  {
    name: "Project2",
    url: "https://www.google.com",
    description: "amazing project",
    icon: "https://www.google.com",
  },
];
