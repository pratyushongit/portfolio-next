import React from "react";
import { Timeline } from "./ui/Timeline";
import { workExperience } from "@/data";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const Experience = () => {
  const processTimelineData = (): TimelineEntry[] => {
    return workExperience.map((experience) => ({
      title: experience.year,
      content: (
        <div className="space-y-2">
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              {experience.title}
            </h3>
            <h4 className="text-base font-medium text-blue-600 dark:text-blue-400">
              {experience.company}
            </h4>
            <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
              {experience.desc}
            </p>
          </div>

          <div className="mt-6">
            {experience.work.map((work) => (
              <div key={work} className="flex items-center space-x-2 mt-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-blue-500"></div>
                <span className="text-sm text-neutral-500 dark:text-neutral-500">
                  {work}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    }));
  };

  const processedTimelineData = processTimelineData();
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="text-center text-4xl leading-10 font-bold md:text-5xl md:leading-none">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="relative w-full overflow-clip">
        <Timeline data={processedTimelineData} />
      </div>
    </div>
  );
};

export default Experience;
