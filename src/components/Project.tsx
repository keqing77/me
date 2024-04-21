import { useId } from "react";
import { projects } from "../constants";
import { Sites } from "./Sites";
import { Title } from "./Title";

export const Project = () => {
  const id = useId();

  return (
    <>
      <Title name="Project" />
      <div className="flex flex-row gap-4">
        {projects.map((site) => (
          <Sites
            key={id + site.name}
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
