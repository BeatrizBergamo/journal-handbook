import { Border, Colors, FontFamily, FontSize, FontWeight, Spacing } from '@components/constants';
import styled from 'styled-components';

export const TextInputStyled = styled.input`
  border: ${Border.Width} solid ${Colors.GrayLight};
  border-radius: ${Border.Radius};
  color: ${Colors.GrayXDark};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Regular};
  font-family: ${FontFamily.Primary};
  padding-left: ${Spacing.XSmall};
  padding-block: ${Spacing.XSmall};
`;
