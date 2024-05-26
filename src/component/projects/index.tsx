import { projectData as data } from "@/utils/const";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

export const Projects = () => {
  return (
    <section>
      <Typography mt={2} level="h3" noWrap variant="plain">
        项目
      </Typography>
      {data.map((item) => (
        <Project key={item.title} {...item} />
      ))}
    </section>
  );
};

const Project = () => {
  return (
    <>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          margin: ".5rem 0",
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg" id="card-description">
            Yosemite Park
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
              California, USA
            </Link>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            Cool weather all day long
          </Chip>
        </CardContent>
      </Card>
    </>
  );
};
