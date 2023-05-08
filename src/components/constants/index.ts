export * from "./strings";

export enum Spacing {
  XSmall = "4px",
  Small = "8px",
  Medium = "16px",
  Large = "32px",
  XLarge = "64px",
}

export class Colors {
  static readonly Black = "#0C0C0C";
  static readonly White = "#FFF";

  static readonly GrayXLight = "#F4F6F8";
  static readonly GrayLight = "#DFE4EC";
  static readonly Gray = "#C0C0C0";
  static readonly GrayDark = "#525252";
  static readonly GrayXDark = "#161616";

  static readonly BlueXLight = "#21B2FB";
  static readonly BlueLight = "#0038D9";
  static readonly Blue = "#8093B3";
  static readonly BlueDark = "#0B1D51";

  static readonly Green = "#008000";
  static readonly GrayTransparent = "rgba(10, 10, 10, 0.5)";
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
