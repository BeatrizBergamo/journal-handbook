import { Border, Colors, Spacing } from "@components/constants";
import { FaIcon } from "@components/fa-icon";
import styled from "styled-components";

export const ModalBgWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${Colors.GrayTransparent};
  overflow: hidden;
`;

const modalWidth = "250px";
const modalHeight = "350px";

export const ModalWrapper = styled.dialog<{ show: boolean }>`
  position: absolute;
  top: calc(${modalHeight} - ${Spacing.Large});
  right: calc(50% - ${modalWidth} / 2);
  width: ${modalWidth};
  height: ${modalHeight};
  display: flex;
  flex-direction: column;
  padding: ${Spacing.Medium};
  background-color: ${Colors.White};
  border-radius: ${Border.Radius};

  ${(props) =>
    props.show &&
    `
    animation: drop 500ms ease;
  `};

  @keyframes drop {
    0% {
      top: calc(${modalHeight} - ${Spacing.Large});
    }

    100% {
      top: ${Spacing.Large};
    }
  }
`;

export const AsideModalWrapper = styled.aside<{ show: boolean }>`
  position: absolute;
  top: 0;
  right: -60%;
  max-width: 60%;
  flex-grow: 1;
  background-color: ${Colors.White};
  padding-block: ${Spacing.Medium};
  padding-inline: ${Spacing.Large};
  overflow-y: auto;

  ${(props) =>
    props.show &&
    `
    animation: slide 500ms ease;
  `};

  @keyframes slide {
    0% {
      right: -60%;
    }

    100% {
      right: 0%;
    }
  }
`;

export const ModalCloseButton = styled(FaIcon.Close)`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${Spacing.Medium};
  color: ${Colors.Gray};
  cursor: pointer;
`;
