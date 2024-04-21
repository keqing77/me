import { websites } from "@/constants";
import { Sites } from "./Sites";
import { Title } from "./Title";

export const Website = () => {
  return (
    <>
      <Title name="WebSite" />
      <div className="flex flex-row gap-4">
        {websites.map((site, index) => (
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
