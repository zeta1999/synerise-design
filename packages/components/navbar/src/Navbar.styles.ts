import styled from 'styled-components';
import { macro } from '@synerise/ds-typography';

export const Navbar = styled.div<{ color?: string }>`
  background-color: ${(props): string => (props.color ? props.color : props.theme.palette['blue-600'])};
  padding: 16px 24px;
  height: 56px;
  display: flex;
  flex: 0 0 100%;
  align-items: center;
  color: #fff;

  img {
    max-width: 100px;
  }
`;

export const NavbarDescription = styled.div`
  ${macro.h300};
  color: inherit;
  display: flex;
  flex: 1;
  padding-right: 24px;
`;

export const AdditionalNode = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarDivider = styled.div`
  &:not(.btn-focus) {
    width: 1px;
    height: 24px;
    background-color: #fff;
    opacity: 0.3;
    margin: 0 12px;
  }
`;

export const NavbarActions = styled.div`
  display: flex;
  align-items: center;

  > div {
    overflow: hidden;
  }
`;

export const NavbarActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -4px;
  margin-right: -4px;

  > * {
    margin: 0 4px;
  }
`;
