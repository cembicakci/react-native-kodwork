import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './pages/Jobs';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jobs" component={Jobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;