import styled from 'styled-components';

export const Title = styled.h1`
  color: teal;

  &::before {
    content: 'aaa';
    dsiplay: block;
  }

  &:hover {
    color: red;
  }
`;