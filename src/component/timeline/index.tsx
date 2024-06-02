"use client";

import { Stack, Step, StepIndicator, Stepper, Typography } from "@mui/joy";

export const Timeline = () => {
  return (
    <section>
      <Typography
        mt={2}
        level="h3"
        noWrap
        variant="plain"
        sx={{ textAlign: "center" }}
      >
        时间线
      </Typography>

      <Stepper orientation="vertical" sx={{ margin: "1rem 0 0 0" }}>
        <Step indicator={<StepIndicator></StepIndicator>}>
          <Typography>HSBC 2024</Typography>
          <Stack spacing={1}>
            <Typography level="body-sm">
              FullStack Engineer
              <br />
            </Typography>
          </Stack>
        </Step>
        <Step indicator={<StepIndicator></StepIndicator>}>
          <div>
            <Typography level="title-sm">Thoughtworks 2022-2024</Typography>
            <Typography level="body-xs">Software Engineer</Typography>
          </div>
        </Step>
        <Step indicator={<StepIndicator></StepIndicator>}>
          <div>
            <Typography level="title-sm">GDFU 2018-2022</Typography>
            <Typography level="body-xs">Student </Typography>
          </div>
        </Step>
      </Stepper>
    </section>
  );
};
