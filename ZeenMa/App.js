import React from "react";
import Tabs from "./routes/homeStack";
import '../ZeenMa/config/firebase';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';


function App() {
  return (
    <Tabs/>
  );
}

AppRegistry.registerComponent(appName, () => App);
export default App;
