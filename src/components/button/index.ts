import { Border, Colors, FontFamily, FontSize, FontWeight, Spacing } from "@components/constants";
import styled from "styled-components";

const buttonHeight = "32px";

type ButtonVariants = "primary" | "secondary" | "callToAction" | "neutral";

const buttonVariants: Record<
  ButtonVariants,
  { bg: string; action: string; border: string; text: string }
> = {
  primary: {
    bg: Colors.PrimaryXLight,
    action: Colors.PrimaryXDark,
    border: Colors.PrimaryXLight,
    text: Colors.White,
  },
  secondary: {
    bg: Colors.GrayXLight,
    action: Colors.PrimaryXLight,
    border: Colors.PrimaryXLight,
    text: Colors.GrayDark,
  },
  callToAction: {
    bg: Colors.PrimaryLight,
    action: Colors.PrimaryLight,
    border: Colors.PrimaryLight,
    text: Colors.White,
  },
  neutral: {
    bg: Colors.White,
    action: Colors.GrayLight,
    border: Colors.GrayLight,
    text: Colors.GrayDark,
  },
};

interface ButtonProps {
  expanded?: boolean;
  variant: ButtonVariants;
}

export const Button = styled.button<ButtonProps>`
  margin-inline: auto;
  margin-block: ${Spacing.Medium};
  height: ${buttonHeight};
  min-width: ${(props) => (props.expanded ? "100%" : `calc(${Spacing.XLarge} * 2)`)};
  border: none;
  border-radius: ${Border.Radius};
  cursor: pointer;

  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  text-align: center;

  ${(props) => {
    const variant = buttonVariants[props.variant];

    return `
      color: ${variant.text};
      background-color: ${variant.bg};
      border: ${variant.border} solid ${Border.Width};
      
      &:active {
        background-color: ${variant.action};
      }
      
      &:hover {
        background-color: ${variant.action};
      }
    `;
  }}
`;
