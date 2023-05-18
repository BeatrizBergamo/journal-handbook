import { Spacing } from "@components/constants";
import styled from "styled-components";

interface FlexItemProps {
  noGrow?: boolean;
  flex?: number;
  vAlign?: string;
  hAlign?: string;
}

const FlexStyled = styled.div`
  display: flex;
  justify-items: stretch;
`;

const FlexItem = styled.div<FlexItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.vAlign ?? "stretch"};
  align-items: ${(props) => props.hAlign ?? "center"};
  flex: ${(props) => (props.noGrow ? null : props.flex ?? 1)};
`;

interface FlexSeparatorProps {
  size?: Spacing;
}

const FlexSeparator = styled.div<FlexSeparatorProps>`
  margin-left: ${(props) => props.size ?? Spacing.Small};
`;

type FlexType = typeof FlexStyled & { Item: typeof FlexItem; Separator: typeof FlexSeparator };

export const Flex: FlexType = FlexStyled as any;
Flex.Item = FlexItem;
Flex.Separator = FlexSeparator;
