import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import utilitySlice from "./slices/utilitySlice";
import productSlice from "./slices/productSlice";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import localStorage from "redux-persist/es/storage";
import session from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
const isClient = typeof window == "undefined";

const persistConfig = {
  key: "root1234",
  storage,
  // whitelist: ["user"],
};
const rootPersistConfig = {
  key: "root1234",
  session,
  // whitelist: ["user"],
};
const rootReducer = combineReducers({
  user: userSlice,
  utilities: utilitySlice,
  products: productSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore: any = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    console.log("server rendering");
    const store = configureStore({
      reducer: rootReducer,
      // devTools: process.env.NODE_ENV !== "production",
      middleware: [thunk],
    });
    return store;
  } else {
    console.log("client rendering");
    const store: any = configureStore({
      reducer: persistedReducer,
      // devTools: process.env.NODE_ENV !== "production",
      middleware: [thunk],
    });
    const persistor = persistStore(store);
    store.__persistor = persistStore(store); // Nasty hack
    return store;
  }
  // return store;
  // export const store = configureStore({
  //   reducer: {
  //     user: userSlice,
  //     utilities: utilitySlice,
  //     products: productSlice,
  //   },
  // });
};
// export const makeStore = makeStore(

// export const store = configureStore({
//   reducer: persistedReducer,
//   // devTools: process.env.NODE_ENV !== "production",
//   middleware: [thunk],
// });
// export const persistor = persistStore(store);
export const wrapper = createWrapper(makeStore);
