import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItementerView from './components/ItementerView';

import ListItemView from './components/ViewListItem';
import { ItemProvider } from './state/ItemContext';



const Stack = createNativeStackNavigator();
export default function App() {
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
      </View >
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

//CREATE TABLE IF NOT EXISTS itesm (
// id INTIGER PRIMARY KEY AUTOINCRIMENT,
// name TEXT
//)

//TODO:
//1. Create a database to store the items
//2. Create a function to add items to the database
//3. Create a function to retrieve items from the database
//4. Create a function to delete items from the database
//5. Create a function to update items in the database

//LEARN:
//1. How to use SQLite in React Native
//2. How to create a database in React Native
// WHAT IS PRIMARY KEY?
//A primary key is a unique identifier for a record in a database table. It is used to ensure that each record can be uniquely identified and accessed. In the context of the code snippet, the "id" field is designated as the primary key for the "items" table, meaning that each item will have a unique "id" value that can be used to reference it in the database.
