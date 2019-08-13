import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();

    return {
      ...page
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-40862413-1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-40862413-1');
`
            }}
          />
        </Head>

        <body>
          <a
            className="github-fork-ribbon"
            href="https://github.com/kevincobain2000/google-cloud-icons"
            data-ribbon="Fork me on GitHub"
            title="Fork me on GitHub"
          >
            Fork me on GitHub
          </a>

          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
