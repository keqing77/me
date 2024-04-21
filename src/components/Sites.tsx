type SitesProps = {
  name: string;
  url: string;
  description: string;
  icon: string;
};

export const Sites = (data: SitesProps) => {
  return (
    <article
      className="relative isolate flex overflow-hidden rounded-2xl px-4 py-4 max-w-sm mt-4
    backdrop-blur-3xl cursor-pointer hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
    >
      <div className="max-w-28 max-h-20 overflow-clip">
        <a href={data.url} className="hover:cursor-pointer" target="_blank">
          <div className="bg-gradient-to-t from-gray-900 via-gray-900/40 "></div>
          <h3 className="text-xl font-bold text-white">{data.name}</h3>
          <div className="mt-2 overflow-hidden text-sm leading-6 text-gray-300 text-clip">
            {data.description}
          </div>
        </a>
      </div>
      <div className=" flex-1 px-2">
        <img
          className="w-24 h-24 rounded-full overflow-hidden"
          src={data.icon ? data.icon : "pojo.jpg"}
          alt="image"
        />
      </div>
    </article>
  );
};
