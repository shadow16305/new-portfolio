import { projects } from "@/constants/constants";
import SectionTitle from "../ui/section-title";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <article
      className="space-y-8 w-full max-w-[340px] md:max-w-[744px] lg:max-w-[1024px] xl:max-w-[1160px] 2xl:max-w-[1240px] mx-auto mt-24 scroll-mt-32"
      id="projects">
      <SectionTitle title="My Projects" border="bg-orange-500" />
      <section className="w-full flex flex-wrap justify-between gap-y-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgSrc={project.imgSrc}
            github={project.github_link}
            site={project.site_link}
            width={project.id === "p4" ? "lg:w-[680px] xl:w-[765px] 2xl:w-[820px]" : "2xl:w-[400px]"}
          />
        ))}
      </section>
    </article>
  );
};

export default Projects;
