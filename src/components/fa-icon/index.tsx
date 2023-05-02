import { faChevronRight, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

type FaIconItemProps = Omit<FontAwesomeIconProps, "icon">;

export const FaIcon = {
  ChevronRight: (props: FaIconItemProps) => <FontAwesomeIcon {...props} icon={faChevronRight} />,
  Book: (props: FaIconItemProps) => <FontAwesomeIcon {...props} icon={faBook} />,
};
