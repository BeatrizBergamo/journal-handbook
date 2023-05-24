import { Button } from "@components/button";
import { Border, Colors, Shadow, Spacing } from "@components/constants";
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

export const KanbanColumnWrapper = styled.div<{ drag: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.XSmall};
  height: 100%;
  width: ${kanbanColumnWidth};

  ${(props) =>
    props.drag &&
    `
    cursor: grab;
  `}
`;

export const AddColumnButton = styled(Button)`
  min-width: auto;
  padding: ${Spacing.XSmall};
  margin: 0;
`;

const defaultCardHeight = "26px";

export const HighlightedCard = styled.div`
  border: ${Border.Width} solid ${Colors.Gray};
  height: ${defaultCardHeight};
  border-radius: ${Border.Radius};
  padding: ${Spacing.XSmall} ${Spacing.Small};
  box-shadow: ${Shadow.Light};
  cursor: pointer;
  opacity: 0.2;
`;
