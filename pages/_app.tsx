import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { store } from "@/redux/store";
import Head from "next/head";
import Wrapper from "./wrapper";
import { PersistGate } from "redux-persist/integration/react";
// import { persistor } from "@/redux/store";
import { useStore } from "react-redux";
import { wrapper } from "@/redux/store";
import { ReactDOM } from "react";
import { ClipLoader } from "react-spinners";
import classes from "../styles/Home.module.css";
function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  const isClient = typeof window == "undefined";
  const store: any = useStore();
  return (
    <div className={classes.bg}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={false} persistor={persistor}> */}
      {/* <Wrapper> */}
      <PersistGate
        persistor={store.__persistor}
        loading={
          <div className="text-center mt-[40vh]">
            <ClipLoader
              color="black"
              // loading={loading}
              className="relative"
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        }
      >
        <Component {...pageProps} />
      </PersistGate>
      {/* </PersistGate> */}
      {/* </Provider> */}
    </div>
  );
  // persistor.subscribe(()=>{
  //   const { bootstrapped } = persistor.getState();

  //  if (bootstrapped) {
  //     ReactDOM.hydrate(<App />, document.getElementById("root"));
  //  }
  // })
}
export default wrapper.withRedux(App);
