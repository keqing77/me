import BasicAvatar from "@/component/avatar";
import { Projects } from "@/component/projects";
import { Skillset } from "@/component/skillset";
import { SocialItems } from "@/component/social";
import { Timeline } from "@/component/timeline";
import Typography from "@mui/joy/Typography";
import { LaptopProgrammingIcon } from "hugeicons-react";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-opacity-50"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-white/15 backdrop-blur backdrop-filter"></div>
      <main
        className="relative z-10 flex min-h-screen flex-col
   items-center"
      >
        <BasicAvatar />
        <Info />
        <SocialItems />
        <Skillset />
        <Projects />
        <Timeline />
      </main>
    </div>
  );
}

const Info = () => {
  return (
    <>
      <Typography level="h3" noWrap variant="plain">
        写前端的刻猫猫
      </Typography>
      <Typography
        startDecorator={<LaptopProgrammingIcon />}
        mb={2}
        color="neutral"
        fontSize="xs"
        variant="plain"
      >
        前端工程师&nbsp;&nbsp;&nbsp;中国-广州
      </Typography>
      <Typography noWrap={true} color="neutral" fontSize="sm" variant="plain">
        归根结底，人到底是一种飘流的状态，还是一种随波逐流呢？
      </Typography>
    </>
  );
};
