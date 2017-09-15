import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class CodeTestDocument extends Document {
  static getInitialProps({ req, renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Code Test</title>
          <link rel="stylesheet" href="/static/css/normalize.css" />
          <link rel="stylesheet" href="/static/css/skeleton.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
