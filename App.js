import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Store from './src/Store/configureStore'
import Navigation from "./src/Navigation/navigation"

//Persister le store
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
console.disableYellowBox = true

export default function App() {
  let persistor = persistStore(Store)
  return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
            <Navigation/>
        </PersistGate>
      </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
      fontFamily: "Raleway",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
