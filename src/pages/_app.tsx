import "../styles/globals.scss";
import "modern-css-reset/dist/reset.min.css";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
