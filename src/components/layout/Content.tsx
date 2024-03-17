import { Hero } from "../Hero";
import { Project } from "../Project";
import { Skills } from "../Skills";
import { Website } from "../Website";

export const Content = () => {
  return (
    <section className=" max-w-6xl px-4 h-screen">
      <Hero />
      <Website />
      <Project />
      <Skills />
    </section>
  );
};
