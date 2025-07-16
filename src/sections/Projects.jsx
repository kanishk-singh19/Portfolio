import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { items } from "../constants";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Projects() {
  return (
    <section className="bg-black w-full">
    <BentoGrid className="max-w-7xl mx-auto ">
      {items.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg}) => (
        <BentoGridItem
        id={id}
          key={id}
          title={title}
          description={description}
          className={className}
          img={img}
          imgClassName={imgClassName}
          titleClassName={titleClassName}
          spareImg={spareImg}
          buttonText={items.buttonText || "View Project"}
        />
      ))}
    </BentoGrid>
    </section>
  );
}


