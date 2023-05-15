import { Border, Colors, FontFamily, FontSize, FontWeight, Spacing } from "@components/constants";
import styled, { css } from "styled-components";

const textFieldCss = css`
  border: ${Border.Width} solid ${Colors.GrayLight};
  width: 100%;
  border-radius: ${Border.Radius};
  color: ${Colors.GrayXDark};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Regular};
  font-family: ${FontFamily.Primary};
  padding-left: ${Spacing.Small};
  padding-block: ${Spacing.XSmall};
`;

export const TextInputStyled = styled.input`
  ${textFieldCss}
`;

const textAreaHeight = "80px";

export const TextAreaFieldStyled = styled.textarea<{ resizable?: boolean }>`
  ${textFieldCss}
  height: ${textAreaHeight};
  ${(props) => (props.resizable != null && !props.resizable ? "resize: none;" : null)}
`;
