export * from "./strings";

export enum Spacing {
  XSmall = "4px",
  Small = "8px",
  Medium = "16px",
  Large = "32px",
  XLarge = "64px",
}

export enum Colors {
  Black = "#0C0C0C",
  White = "#FFF",

  GrayXLight = "#F4F6F8",
  GrayLight = "#DFE4EC",
  Gray = "#C0C0C0",
  GrayDark = "#525252",
  GrayXDark = "#161616",

  BlueXLight = "#8093B3",
  BlueLight = "#21B2FB",
  Blue = "#0038D9",
  BlueXDark = "#0B1D51",

  Alert = "#B31010",
  GreenLight = "#8DF53D",
  Green = "#008000",
  GrayTransparent = "rgba(10, 10, 10, 0.5)",
}

export const Border = {
  Radius: Spacing.XSmall,
  RadiusLarge: "10px",
  Width: "1px",
};

export enum Shadow {
  Light = "0px 1px 1px 1px rgba(0, 0, 0, 0.1)",
  Medium = "0px 2px 8px 5px rgba(0, 0, 0, 0.15)",
}

export enum FontSize {
  XSmall = "12px",
  Small = "14px",
  Medium = "16px",
  Large = "18px",
  XLarge = "20px",
}

export enum FontWeight {
  Lighter = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
}

export enum FontFamily {
  Primary = "system-ui",
}
