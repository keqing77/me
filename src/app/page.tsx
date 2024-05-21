import BasicAvatar from "@/component/avatar";
import { SocialItems } from "@/component/social";
import Typography from "@mui/joy/Typography";
import { LaptopProgrammingIcon } from "hugeicons-react";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      <main
        className="relative z-10 flex min-h-screen flex-col
    md:flex-row md:p-24
    items-center p-8"
      >
        <BasicAvatar />
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
        <SocialItems />
        <Typography mt={2} level="h3" noWrap variant="plain">
          作品集
        </Typography>
        <div className="w-48 h-32 p-12 bg-cyan-100"></div>
        <Typography mt={2} level="h3" noWrap variant="plain">
          技术栈
        </Typography>
        <div className="w-48 h-32 p-12 bg-red-400"></div>
        <Typography mt={2} level="h3" noWrap variant="plain">
          时间线
        </Typography>
        <div className="w-48 h-32 p-12  bg-slate-300"></div>
      </main>
    </div>
  );
}
