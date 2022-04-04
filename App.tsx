import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { PermissionsProvider } from './src/context/PermissionsContext';
import { Navigator } from './src/navigation/navigation';


interface Props { }

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

function App(props: Props) {
  const { } = props

  return (
    <AppState>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AppState>

  )
}

export default App
