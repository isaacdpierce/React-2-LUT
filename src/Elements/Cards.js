import styled from 'styled-components';
import { elevation, transition } from 'Utilities';

export const Card = styled.div`
  text-align: center;
  background: white;
  border-radius: 5px;
  width: 320px;
  margin: 0 auto;
  padding: 15px;
  color: #777299;
  ${elevation[3]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[5]};
  }
`;
