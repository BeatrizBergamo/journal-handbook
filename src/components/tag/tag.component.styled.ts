import { Border, Colors, Spacing } from "@components/constants";
import { TaskStatus } from "@domain/model";
import styled from "styled-components";

export type TagTypes = "primary" | TaskStatus;

export const tagColors: Record<TagTypes, { bg: Colors; text: Colors }> = {
  [TaskStatus.ToDo]: { bg: Colors.FeedbackAlert, text: Colors.White },
  [TaskStatus.Completed]: { bg: Colors.FeedbackSuccessLight, text: Colors.White },
  [TaskStatus.InProgress]: { bg: Colors.PrimaryLight, text: Colors.White },
  primary: { bg: Colors.FeedbackAlert, text: Colors.White },
};

interface TagWrapperProps {
  color: string;
}

export const TagWrapper = styled.div<TagWrapperProps>`
  background-color: ${(props) => props.color};
  padding: ${Spacing.XSmall};
  border-radius: ${Border.Radius};
`;
