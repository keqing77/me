import {
  AWSIcon,
  DockerIcon,
  JavaScriptIcon,
  ReactIcon,
  ReduxIcon,
  TypeScriptIcon,
  VueIcon,
  WebpackIcon,
} from "@/assets/skills";
import { Title } from "./Title";

export const Skills = () => {
  return (
    <>
      <Title name="Skills" />
      <div className="flex flex-row gap-4">
        <JavaScriptIcon className="w-12 h-12" />
        <TypeScriptIcon className="w-12 h-12" />
        <VueIcon className="w-12 h-12" />
        <ReactIcon className="w-12 h-12" />
        <ReduxIcon className="w-12 h-12" />
        <AWSIcon className="w-12 h-12" />
        <DockerIcon className="w-12 h-12" />
        <WebpackIcon className="w-12 h-12" />
      </div>
    </>
  );
};
