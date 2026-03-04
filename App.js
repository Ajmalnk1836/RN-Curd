import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItementerView from './components/ItementerView';

import ListItemView from './components/ViewListItem';
import { ItemProvider } from './state/ItemContext';
// import { createAsyncStorage } from "@react-native-async-storage/async-storage";



const Stack = createNativeStackNavigator();
export default function App() {
 // const storage = createAsyncStorage("items");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen (){
  return(
    <ItemProvider>
      <View style={styles.container}>
     < ListItemView/>
      <ItementerView/>
      </View>
    </ItemProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },

  
});
