import { Button } from "@components/button";
import { Spacing } from "@components/constants";
import styled from "styled-components";

export const KanbanWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-block: ${Spacing.Medium};
`;

export const KanbanColumnsWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: ${Spacing.Large};
`;

const kanbanColumnWidth = "200px";

export const KanbanColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.XSmall};
  height: 100%;
  width: ${kanbanColumnWidth};
`;

export const AddColumnButton = styled(Button)`
  min-width: auto;
  padding: ${Spacing.XSmall};
  /* height: auto; */
  margin: 0;
`;
