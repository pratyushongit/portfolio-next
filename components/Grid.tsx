import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section>
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          (
            {
              title,
              description,
              id,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            },
            i
          ) => (
            <BentoGridItem
              key={i}
              title={title}
              description={description}
              id={id}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
