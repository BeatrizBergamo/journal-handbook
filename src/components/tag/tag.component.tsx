import React from "react";

import { TagTypes, TagWrapper, tagColors } from "./tag.component.styled";
import { TagLabel } from "@components/typography";

interface TagProps {
  textColor?: string;
  bgColor?: string;
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ textColor, bgColor, children }) => {
  const randomColor = React.useMemo(() => {
    const tagColorsKeys = Object.keys(tagColors) as TagTypes[];
    const randomColorIndex = Math.floor(tagColorsKeys.length * Math.random());
    const randomColorKey = tagColorsKeys[randomColorIndex];

    return tagColors[randomColorKey];
  }, []);

  return (
    <TagWrapper color={bgColor ?? randomColor.bg}>
      <TagLabel color={textColor ?? randomColor.text}>{children}</TagLabel>
    </TagWrapper>
  );
};
