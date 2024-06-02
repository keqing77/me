type Project = {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  image: string;
};

const projectData:Project[] = [
  {
    title: "Sirius's Heart",
    description: "A personal blog",
    techStack: ["Next", "Tailwind", "Antd"],
    url: "https://siriusheart.vercel.app/",
    image: "https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90",
  },
  {
    title: "Yosemite Park",
    description: "A travel blog",
    techStack: ["React", "Next"],
    url: "https://yosemite.vercel.app/",
    image: "https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90",
  },
  {
    title: "California",
    description: "A travel blog",
    techStack: ["React", "Next","Joyui"],
    url: "https://california.vercel.app/",
    image: "https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90",
  }
];

export { projectData };
