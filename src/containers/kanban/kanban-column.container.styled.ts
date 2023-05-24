import styled from "styled-components";

export const KanbanColumnContainerWrapper = styled.div<{ isDragging: boolean }>`
  cursor: ${(props) => (props.isDragging ? "grab" : "default")};
`;
