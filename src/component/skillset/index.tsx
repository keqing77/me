import { JSIcon } from "@/icons/js";
import { NextIcon } from "@/icons/next";
import { PythonIcon } from "@/icons/python";
import { ReactIcon } from "@/icons/react";
import { TailwindIcon } from "@/icons/tailwind";
import { VueIcon } from "@/icons/vue";
import Typography from "@mui/joy/Typography";

export const Skillset = () => {
  return (
    <section>
      <Typography
        sx={{ margin: "0 0 .5rem 0", textAlign: "center" }}
        level="h3"
        noWrap
        variant="plain"
      >
        技术栈
      </Typography>
      <div className="flex" style={{ gap: ".8rem" }}>
        <JSIcon />
        <VueIcon />
        <TailwindIcon />
        <ReactIcon />
        <NextIcon />
        <PythonIcon />
      </div>
    </section>
  );
};
