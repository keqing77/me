import Snake from "@/assets/svg/Snake.svg?react";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center py-8 mt-12">
        <div>
          <h1 className="text-4xl text-gray-light">
            Hello, I'm 写前端的刻猫猫
          </h1>
          <p className="mt-8">💻 前端工程师</p>
          <p className="my-4 text-gray-light">🙋‍♂️ 探索世界的好奇心万岁</p>
        </div>
        <div className="flex flex-col  items-start">
          <Icons />
          <Snake />
        </div>
      </div>
    </>
  );
};

const Icons = () => {
  return (
    <>
      <Icon />
    </>
  );
};

const Icon = () => {
  return (
    <a
      className="w-12 h-10 box-border rounded-7 flex gap-5 backdrop-blur-[var(--card-filter)] bg-[var(--item-bg-color)] items-center justify-center transition-all duration-300 flex-shrink-0 hover:w-24 -translate-y-0.5 "
      target="_blank"
      href="https://github.com/keqing77"
    >
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2487"
        width="22px"
        height="22px"
      >
        <path
          d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
          fill="#ffffff"
          p-id="2488"
        ></path>
      </svg>
      <div className="whitespace-nowrap hidden hover:block">Github</div>
    </a>
  );
};
