import { faChevronRight, faChevronDown, faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

type FaIconItemProps = Omit<FontAwesomeIconProps, "icon">;

export const FaIcon = {
  Book: (props: FaIconItemProps) => <FontAwesomeIcon {...props} icon={faBook} />,
  ChevronRight: (props: FaIconItemProps) => <FontAwesomeIcon {...props} icon={faChevronRight} />,
  ChevronDown: (props: FaIconItemProps) => <FontAwesomeIcon {...props} icon={faChevronDown} />,
  Plus: (props: FaIconItemProps) => <FontAwesomeIcon {...props} icon={faPlus} />,
};
