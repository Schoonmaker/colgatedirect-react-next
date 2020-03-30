import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TransformedProduct } from '../../PDPComponent/_types';
import { TestInterface } from './_types';
import HeroBanner from '../../sections/HeroBanner';
import ImageGallery from 'react-image-gallery';

import {
  Grid
} from '@material-ui/core';
import AdvLinks from './advLinks.json';

const images = require('./imageGallery.json');
const sec3data = require('./sec3.json');

type Props = {
  product: TransformedProduct;
};

interface AdvLinks {
  src: string;
  link: string;
}
const WhiteningPage: FunctionComponent<Props> = ({ product }: Props) => (
  <Styled.Container>
    <HeroBanner
      title="Whitening"
      subtitle="Our first non-electric connected toothbrush tracks your brushing to help you get a complete clean."
      bgColor="#69d2f9"
      bgUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/190918_COLGATE_MFIX_22_169.jpg?v=1579097587"
      fontColor="#FFFFFF"
      textAlign="left"
    />

    <Styled.ContainerSec1>
      <Grid container spacing={2}>
        {AdvLinks.advlinks.map(({ src, link }, key) => (
          <Styled.Sec1Grid item xs={12} sm={6} md={4} lg={4}>
            <Styled.Sec1Link href={link}>
              <Styled.Img item src={src}></Styled.Img>
            </Styled.Sec1Link>
          </Styled.Sec1Grid>
          ))}
      </Grid>
    </Styled.ContainerSec1>

    <Styled.ContainerSec2>
      <ImageGallery items={images} />
    </Styled.ContainerSec2>
    
    <Styled.ContainerSec3>
      <Grid container spacing={2}>
        {sec3data.map(({src},key) => (
          <Styled.Sec3Grid item xs={12} sm={6} md={4} lg={3}>
            <Styled.Sec3Img item src={src}></Styled.Sec3Img>
          </Styled.Sec3Grid>
        ))}
      </Grid>
    </Styled.ContainerSec3>
  </Styled.Container>
);

export default WhiteningPage;

// Create componenet in PDPComponent?
