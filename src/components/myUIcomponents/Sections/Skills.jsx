import Skills from "../Skills/Skills";

export default function SkillSection() {
  return (
        <div className="mt-4 sm:mt-14">
          <div className="py-5 text-center">
            <h2 className="headings mb-2">Skills</h2>
            <p className="text-neutral-500 text-sm md:text-base">my tech stack</p>
          </div>
          <Skills />
        </div>
  );
}
