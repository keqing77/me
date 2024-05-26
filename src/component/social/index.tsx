import { BilbilIcon, JuejinIcon } from "@/icons";
import Button from "@mui/joy/Button";
import Tooltip from "@mui/joy/Tooltip";
import { GithubIcon, TwitterIcon } from "hugeicons-react";

export const SocialItems = () => {
  return (
    <>
      <section style={{ margin: "1rem 0" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Tooltip title="Twitter" variant="solid" sx={{ margin: ".2rem" }}>
            <Button variant="soft">
              <TwitterIcon size="32" />
            </Button>
          </Tooltip>
          <Tooltip title="Github" variant="solid" sx={{ margin: ".2rem" }}>
            <Button variant="soft">
              <GithubIcon size="32" />
            </Button>
          </Tooltip>
          <Tooltip title="掘金" variant="solid" sx={{ margin: ".2rem" }}>
            <Button variant="soft">
              <JuejinIcon />
            </Button>
          </Tooltip>
          <Tooltip title="bilbil" variant="solid" sx={{ margin: ".2rem" }}>
            <Button variant="soft">
              <BilbilIcon />
            </Button>
          </Tooltip>
        </div>
      </section>
    </>
  );
};
