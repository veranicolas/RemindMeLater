import React, {type PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/routes/Navigator';

const App = () =>{

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};


export default App;
