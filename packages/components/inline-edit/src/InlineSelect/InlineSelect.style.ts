import styled, { css, FlattenInterpolation, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeProps } from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import { macro } from '@synerise/ds-typography';

type InPlaceEditableInputContainerProps = {
  size: 'small' | 'normal';
  disabled?: boolean;
  error?: boolean;
  icon?: string;
  expanded?: boolean;
  pressed?: boolean;
};
const applyColor = (props: ThemeProps & InPlaceEditableInputContainerProps): string => {
  if (props.error) return props.theme.palette['red-600'];
  return props.theme.palette['blue-600'];
};

const applyColorHover = (props: ThemeProps & InPlaceEditableInputContainerProps): string => {
  if (props.error) return props.theme.palette['red-600'];
  return props.theme.palette['blue-500'];
};

const applyColorActive = (props: ThemeProps & InPlaceEditableInputContainerProps): string => {
  if (props.error) return props.theme.palette['red-600'];
  return props.theme.palette['blue-700'];
};

const applyDots = (props: ThemeProps & InPlaceEditableInputContainerProps): string => {
  if (props.error) return props.theme.palette['red-600'];
  return props.theme.palette['blue-600'];
};

const applyDotsOnError = (props: ThemeProps & InPlaceEditableInputContainerProps): string => {
  if (props.error)
    return `background-image: linear-gradient(to right, ${applyDots(props)} 20%, rgba(255, 255, 255, 0) 10%);
  background-color: transparent;
  background-position: bottom left;
  background-size: 5px 1px;
  background-repeat: repeat-x;`;
  return '';
};

export const FontStyleWatcher = styled.div`
  visibility: hidden;
  pointer-events: none;
`;

export const IconWrapper = styled.div<{ size: string; expanded: boolean } & ThemeProps>`
  margin: 0;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props): string => (props.size === 'normal' ? '0px' : '4px')};
  width: 24px;
  height: 24px;
  line-height: inherit;
  cursor: pointer;
  &:hover {
    background-color: ${(props): string => props.theme.palette.white};
  }
  &&& {
    svg {
      transition: transform 0.1s linear;
      transform: rotateZ(${(props): string => (props.expanded ? '180deg' : '0deg')});
    }
  }
`;

export const InPlaceEditableInputContainer = styled.div<InPlaceEditableInputContainerProps>`
  display: flex;
  max-width: 100%;
  align-items: center;
  opacity: ${({ disabled }): number => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }): string => (disabled ? 'none' : 'all')};
  ${IconWrapper} {
    svg {
      color: ${(props): string => applyColor(props)};
      fill: ${(props): string => applyColor(props)};
    }
  }
  ${(props): string => applyDotsOnError(props)}

  &&&:hover {
    input {
      color: transparent;
      cursor: pointer;
      text-shadow: 0 0 0 ${(props): string => applyColorHover(props)};
    }
    ${IconWrapper} {
      background-color: transparent;
      svg {
        fill: ${(props): string => applyColorHover(props)};
      }
    }
  }
  ${(props): FlattenSimpleInterpolation | false =>
    !props.pressed &&
    css`
      &&&:focus:not(:active),
      &&&:focus-within {
        background-color: transparent;
        background-position: bottom left;
        background-size: 5px 1px;
        background-repeat: repeat-x;
        background-image: linear-gradient(to right, ${applyDots(props)} 20%, rgba(255, 255, 255, 0) 10%);
        input {
          color: transparent;
          cursor: pointer;
          text-shadow: 0 0 0 ${applyColor(props)};
        }
        ${IconWrapper} {
          background-color: transparent;
          svg {
            fill: ${applyColor(props)};
          }
        }
      }
    `}

  &&&:active {
    input {
      color: transparent;
      cursor: pointer;
      text-shadow: 0 0 0 ${(props): string => applyColorActive(props)};
    }
    ${IconWrapper} {
      background-color: transparent;
      svg {
        fill: ${(props): string => applyColorActive(props)};
      }
    }
  }

  > .autosize-input {
    display: inline-block;
    overflow: hidden;
  }

  > .autosize-input > input,
  > ${FontStyleWatcher} {
    border: none;
    background-color: transparent;
    background-position: bottom left;
    background-size: 5px 1px;
    background-repeat: repeat-x;
    ${({ size }): FlattenInterpolation<ThemeProps> => (size === 'normal' ? macro.h500 : macro.small)}; //todo: set type
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    padding: 0;
    margin: 0;
    vertical-align: top;
    color: transparent;
    text-shadow: 0 0 0 ${(props): string => applyColor(props)};
    ::placeholder {
      color: ${(props): string => props.theme.palette[props.error ? 'red-600' : 'grey-400']};
    }
  }
`;
