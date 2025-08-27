"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-start pt-6 md:pt-24 md:gap-12 group"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div
                className="h-12 w-12 absolute left-2 md:left-2 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-300/30 dark:border-blue-400/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
              >
                <motion.div
                  className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-inner relative overflow-hidden"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                </motion.div>
              </motion.div>
              <motion.h3
                className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-slate-600 dark:text-slate-300 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-blue-500 group-hover:to-indigo-500 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {item.title}
              </motion.h3>
            </div>

            <motion.div
              className="relative pl-20 pr-6 md:pl-6 w-full"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="md:hidden block text-2xl mb-6 text-left font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <div className="bg-gradient-to-br from-slate-50/80 to-white/50 dark:from-slate-900/80 dark:to-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:border-purple-300/50 dark:group-hover:border-blue-400/50">
                {item.content}
              </div>
            </motion.div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-[1.9375rem] left-[1.9375rem] top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-slate-300/50 dark:via-slate-600/50 to-transparent rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-indigo-400 rounded-full shadow-lg"
          />
          {/* Animated glow effect */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[6px] -left-[1.5px] bg-gradient-to-t from-purple-500/30 via-blue-500/30 to-indigo-400/30 rounded-full blur-sm"
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};
