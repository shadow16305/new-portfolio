import { cn } from "@/utils/cn";
import SectionTitle from "./ui/section-title";
import { roboto } from "@/utils/fonts";

const Skills = () => {
  return (
    <section className="flex flex-col items-center gap-y-8 mt-12 scroll-mt-80" id="skills">
      <SectionTitle title="My Skills" border="bg-blue-600" />
      <p
        className={cn(
          "border border-white px-6 md:px-12 py-8 text-white text-center max-w-[340px] md:max-w-[744px] lg:max-w-[768px]",
          roboto.className
        )}>
        HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Express, Tailwind, Node.js, Bootstrap, MongoDB, Mongoose,
        Prisma, Figma and basic UX/UI design
      </p>
    </section>
  );
};

export default Skills;
