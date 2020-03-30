import React from 'react';
import Head from 'next/head';
import { withTheme } from '@material-ui/core';
import Whitening from '../components/pdp/Whitening';
import { ProductSortKeys } from '../models';
import { withApollo } from '../services/apollo';
import NavBar from '../components/NavBar/NavBar';

interface Props {
  product: any;
}

function WhiteningPage({
  product,
}: Props) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar items={['test']} />
        <Whitening product={product} />
    </>
  );
}

export default withTheme(withApollo({ ssr: true })(WhiteningPage));