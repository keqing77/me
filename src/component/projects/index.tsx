import { projectData } from "@/utils/const";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export const Projects = () => {
  return (
    <section>
      <Typography
        mt={2}
        level="h3"
        noWrap
        variant="plain"
        sx={{ textAlign: "center" }}
      >
        项目
      </Typography>
      <Project data={projectData} />
    </section>
  );
};

const Project = ({ data }: any) => {
  return (
    <>
      {data.map((project: any) => (
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: {
              xs: 260,
              sm: 320,
              md: 360,
            },
            margin: ".5rem 0",
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={project.image} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg" id="card-description">
              {project.title}
            </Typography>
            <Typography
              level="body-sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                {project.description}
              </Link>
            </Typography>

            <Sheet>
              {project.techStack.map((tech: string) => (
                <Chip
                  variant="outlined"
                  color="primary"
                  size="sm"
                  sx={{ margin: ".25rem" }}
                >
                  {tech}
                </Chip>
              ))}
            </Sheet>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
