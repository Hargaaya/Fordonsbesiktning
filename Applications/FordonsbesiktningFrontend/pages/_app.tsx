import GlobalStyle from "../layout/GlobalStyle";
import Variables from "../layout/Variables";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Variables />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
