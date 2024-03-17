export const Avatar = () => {
  return (
    <div className="max-w-2xl mx-auto mt-4 space-y-4">
      <ul className="flex flex-wrap pt-8 space-x-4">
        <li className="flex flex-col items-center justify-center">
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-purple-100 to-violet-700">
            <a
              className="block p-1 transition transform bg-white rounded-full hover:-rotate-6"
              href="#"
            >
              <img
                className="w-36 h-36 rounded-full"
                src="https://avatars.githubusercontent.com/u/48318812?v=4"
                alt="smile dog"
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
