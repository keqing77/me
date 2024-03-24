import { Sites } from "./Sites";
import { Title } from "./Title";

export const Website = () => {
  return (
    <>
      <Title name="WebSite" />
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
    name: "Bento",
    url: "https://bento.me/keqing",
    description: "My bento page",
    icon: "https://bento.me/keqing",
  },
  {
    name: "Blog",
    url: "https://keqingblog.netlify.app/",
    description: "Personal blog",
    icon: "https://keqingblog.netlify.app/",
  },
  {
    name: "fe-interview",
    url: "https://fe-interview.zeabur.app/",
    description: "My fe-interview notes",
    icon: "https://fe-interview.zeabur.app/",
  },
];
