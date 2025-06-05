import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AppNavigator from "./src/navigation/AppNavigator";
import { initDB } from "./src/services/dbService";
import { enableScreens } from 'react-native-screens';
enableScreens();



export default function App() {
  React.useEffect(() => { initDB(); }, []);
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
