import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/card";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  github: string;
  site: string;
  width: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imgSrc, github, site, width }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={cn(
          "relative group/card bg-[#201F23] w-[340px] md:w-[360px] lg:w-[330px] xl:w-[370px] 2xl:w-[400px] h-auto p-6 rounded-lg",
          width
        )}>
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imgSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            target="__blank"
            className="px-4 py-2 rounded-xl font-normal text-white">
            Github →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={site}
            target="__blank"
            className="px-4 py-2 bg-indigo-700 text-white font-bold">
            Live Site
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
