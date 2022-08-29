import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CharacterDetail from './screens/characterDetailsScreen';
import CharacterSearch from './screens/characterSearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='CharacterSearchScreen'>
        <Stack.Screen component={CharacterSearch} name="CharacterSearchScreen"></Stack.Screen>
        <Stack.Screen component={CharacterDetail} name="CharacterDetailScreen"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
