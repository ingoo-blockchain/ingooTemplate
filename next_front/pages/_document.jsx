import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document';
  import { ServerStyleSheet } from "styled-components";
  
  export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
  
      try {
        // sheet을 사용해 정의된 모든 스타일을 수집
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          });
  
        // Documents의 initial props
        const initialProps = await Document.getInitialProps(ctx);
  
        // props와 styles를 반환
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        };
      } finally {
        sheet.seal();
      }
    }
    render(){
      return(
        <Html>
        <Head>
        <link 
            rel="preconnect"
            href="https://fonts.googleapis.com" 
        />
        <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com" 
            crossOrigin="true"
        />
        <link 
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" 
            rel="stylesheet" 
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      )
    }
  }