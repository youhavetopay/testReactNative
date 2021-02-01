/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Component
} from 'react-native';

import Count from './components/Count'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const izone = '김민주 짱짱'
let testNum = 0
const App = () => {
  return (
    <>
      
      <Provider store={createStore(reducers)}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:10}}>
        <Text style={styles.text}>izone test app {izone}</Text>
        
        
        <TextInput style={styles.input}>

        </TextInput>
        <Text></Text>
      </View>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  input:{
    padding:10,
    width:'100%',
    borderColor:'black',
    borderWidth:2,
    marginLeft:20,
    marginRight:20
  
  },
  text:{
    margin:10
  }
});

export default App;
