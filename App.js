import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Pagina1 from './src/screens/Pagina1';
import Pagina2 from './src/screens/Pagina2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Pagina2" component={Pagina2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
