/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import Count from './components/Count'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import MyTextInput from './components/MyTextInput'
import Test from './components/Test'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const izone = '김민주 짱짱'
let testNum = 0

let appInfo = {
  'name':'아이즈원',
  'age':'2',
  'songName':'파노라마'
}

class App extends Component {

  state={
    name:''
  }

  handleCreate = (data) =>{
    console.log(data);
    this.setState({name:data.name})
  }

  render (){
    return(
      <>
      
      
      <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:10}}>
        <Text style={styles.title}>Text Convert MoresCode</Text>
        <MyTextInput onCreate={this.handleCreate}></MyTextInput>
        <Test name={this.state.name}></Test>

        {
          testNum == 0 ? <Text>아이즈원</Text> : <Text>피에스타</Text>
        }
      </View>
      
    </>
    )
  }
};

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:'bold'
  },

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
