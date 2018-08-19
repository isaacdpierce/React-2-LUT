import styled from 'styled-components';
import { elevation, transition, lAqua } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${lAqua};
  ${elevation[3]};
  ${transition({
    ease: 'ease-in',
    length: '.2s'
  })};
  &:hover {
    ${elevation[5]};
  }
`;
