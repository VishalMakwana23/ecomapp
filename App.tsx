import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation'
import store from './src/redux/store'
import { Provider as StoreProvider } from 'react-redux';

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreProvider>
  )
}

export default App