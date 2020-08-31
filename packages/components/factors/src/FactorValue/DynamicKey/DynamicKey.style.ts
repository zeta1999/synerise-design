import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const DynamicKey = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  .ant-input {
    flex: 1;
    &:first-of-type {
      border-radius: 0;
    }
    &:last-of-type {
      border-radius: 0 3px 3px 0;
      margin-left: -1px;
    }
  }
`;
