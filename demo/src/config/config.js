import React from "react";
import Loadable from "react-loadable";
import getMenuItems from "./menuItems";
import LoadingComponent from "zip-shell/lib/components/LoadingComponent";
import grants from "./grants";
import locales from "./locales";
import routes from "./routes";
import themes from "./themes";

const Loading = () => <LoadingComponent />;

const LPAsync = Loadable({
  loader: () => import("../../src/pages/LandingPage"),
  loading: Loading
});

const config = {
  firebase_config: {
    apiKey: "AIzaSyDf-qNPLMLV3SXcMcK8qyuoRBNCSzKxSMo",
    authDomain: "adminzip-79996.firebaseapp.com",
    databaseURL: "https://adminzip-79996.firebaseio.com",
    projectId: "adminzip-79996",
    storageBucket: "adminzip-79996.appspot.com",
    messagingSenderId: "953847456320",
    appId: "1:953847456320:web:e8ec399d60fd76d16db5a5",
    measurementId: "G-EW8LK8T1HJ"
  },
  firebase_config_dev: {
    apiKey: "AIzaSyDf-qNPLMLV3SXcMcK8qyuoRBNCSzKxSMo",
    authDomain: "adminzip-79996.firebaseapp.com",
    databaseURL: "https://adminzip-79996.firebaseio.com",
    projectId: "adminzip-79996",
    storageBucket: "adminzip-79996.appspot.com",
    messagingSenderId: "953847456320",
    appId: "1:953847456320:web:e8ec399d60fd76d16db5a5",
    measurementId: "G-EW8LK8T1HJ"
  },
  firebase_providers: ["google.com", "password"],
  initial_state: {
    locale: "vi",
    themeSource: {
      isNightModeOn: false,
      source: "default"
    }
  },
  drawer_width: 256,
  routes,
  getMenuItems,
  locales,
  themes,
  grants,
  firebaseLoad: () => import("./firebase"),
  landingPage: LPAsync
};

export default config;
