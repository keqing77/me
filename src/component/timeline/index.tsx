import { Typography } from "@mui/joy";

export const Timeline = () => {
  return (
    <section>
      <Typography mt={2} level="h3" noWrap variant="plain">
        时间线
      </Typography>
      <div className="flex flex-col items-center relative">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col items-center my-4 relative">
            {index < events.length - 1 && (
              <div className="w-px h-10 bg-gray-300 absolute top-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const events = [
  { title: "Event 1", label: "Label 1" },
  { title: "Event 2", label: "Label 2" },
  { title: "Event 3", label: "Label 3" },
];
