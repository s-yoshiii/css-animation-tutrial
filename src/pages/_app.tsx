import Home from ".";
import "../styles/globals.scss";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
