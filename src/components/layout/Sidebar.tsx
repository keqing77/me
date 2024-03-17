import { Avatar } from "../Avatar";

export const Sidebar = () => {
  return (
    <aside className=" max-w-72 px-8 h-screen items-center flex-col">
      {/* <aside className="w-1/3 max-w-96 px-4 h-screen items-center fixed flex-col "> */}
      <Job />
      <Tag />
      <TimeLine />
    </aside>
  );
};

const Job = () => {
  const info = [
    {
      icon: "  ",
      text: "中国 - 广州",
    },
    {
      icon: "  ",
      text: "Genshin Impact",
    },
  ];
  return (
    <section className="flex justify-center flex-col">
      <Avatar />
      <div className="flex flex-col pl-12 py-2 mt-4 bg-gray-bg rounded-[13px] text-left backdrop-blur-lg ">
        {info.map((item, index) => (
          <div key={index} className="flex  mb-2">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm font-mono">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Tag = () => {
  const tags = ["前端", "linux", "nerd", "社畜", "动漫", "骑行"];
  return (
    <div className="flex flex-row flex-wrap gap-1 p-4 flex-shrink-0 rounded-[13px] mt-4 backdrop-blur-lg bg-gray-bg items-center justify-center">
      {tags.map((tag, index) => (
        <span
          key={index}
          className=" p-3 text-sm rounded-xl bg-gray-tag font-mono"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

const TimeLine = () => {
  const jobs = [
    {
      time: "2024-3-25",
      company: "Genshin Impact",
    },
    {
      time: "2022-12-16",
      company: "Thoughtworks",
    },
    {
      time: "2018-09-01",
      company: "Guangdong University of Finance & Economics",
    },
  ];
  return (
    <section className="flex overflow-y-auto justify-center bg-gray-100 flex-shrink-0 rounded-[13px] mt-4 backdrop-blur-lg bg-gray-bg">
      <div className="p-4">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {jobs.map((job, index) => (
            <li key={index} className="ml-4 py-2">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                {job.time}
              </time>
              <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
                {job.company}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
