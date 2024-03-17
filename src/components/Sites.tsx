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
    backdrop-blur-3xl "
    >
      <a href={data.url} className="hover:cursor-pointer">
        <div className="bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className=" mt-3 text-2xl font-bold text-white">{data.name}</h3>
        <div className=" overflow-hidden text-sm leading-6 text-gray-300">
          {data.description}
        </div>
      </a>
    </article>
  );
};
