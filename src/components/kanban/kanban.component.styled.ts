import { Spacing } from "@components/constants";
import styled from "styled-components";

export const KanbanWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-block: ${Spacing.Medium};
`;

export const KanbanColumnsWrapper = styled.div`
  display: flex;
  gap: ${Spacing.Large};
`;

export const KanbanColumnWrapper = styled.div`
  flex: 1;
`;
