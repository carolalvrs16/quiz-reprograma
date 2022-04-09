import React from 'react';

import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const Document: React.FC = () => (
  <Html lang="pt-BR">
    <Head>
      <link rel="icon" type="image/png" href="/favicon.ico" />

      <link rel="apple-touch-icon" href="/apple-icon.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Quiz with Next.js and PWA</title>

      <link rel="manifest" href="/manifest.json" />

      <meta name="theme-color" content="#131419" />
    </Head>
    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
);

export default Document;
