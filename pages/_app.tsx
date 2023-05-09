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
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
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
