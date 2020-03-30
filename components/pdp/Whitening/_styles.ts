import styled from 'styled-components';
import { Grid, Link } from '@material-ui/core';


const Container = styled.div`
`;
const ContainerSec1 = styled.div`
  margin-top: 150px !important;
`;
const ContainerSec2 = styled.div`
  margin-top: 150px !important;
  max-width:700px;
  margin: auto;
`;

const ContainerSec3 = styled.div`
  background: #d2d6df;
  width: 100%;
  margin-top: 50px;
`;

const Sec1Grid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`;
const Sec1Link = styled(Link)`
  text-align: center;
`;

const Sec3Grid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`;
const Sec3Img = styled.img`
  width: 50%;
  margin: auto;
  padding: 50px;
`;
const Img = styled.img`
  width: 50%;
`

export const Styled = {
  Container,
  ContainerSec1,
  ContainerSec2,
  ContainerSec3,
  Sec1Grid,
  Sec3Grid,
  Sec3Img,
  Sec1Link,
  Img
};
