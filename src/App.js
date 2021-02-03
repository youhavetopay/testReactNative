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
  Image,
  TouchableOpacity,

} from 'react-native';

import Count from './components/Count'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import MyTextInput from './components/MyTextInput'
import NameInfo from './components/NameInfo'
import NameInfoList from './components/NameInfoList'



import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  

  render (){

    return(
      <>

      <SafeAreaView style={styles.backBody}>
        <View style={{flex:1,  alignItems:'center'}}></View>
        <View style={{flex:3,  alignItems:'center', padding:10}}>
          <Text style={styles.title}>Eyes On Me!</Text>
          <Image style={{width:250, height:100}} source={require('./Image/izone_logo.png')}></Image>
          <TextInput style={{backgroundColor:'white', borderRadius:20, width:250, height:50, paddingLeft:20,marginTop:30}} placeholder='아이디' ></TextInput>
          <TextInput style={{backgroundColor:'white', borderRadius:20, width:250, height:50, paddingLeft:20,marginTop:10, marginBottom:20}} placeholder='비밀번호' ></TextInput>
          <TouchableOpacity style={{backgroundColor:'hotpink', width:250, height:50, borderRadius:20, justifyContent:'center'}}><Text style={{color:'white', textAlign:'center'}}>로그인</Text></TouchableOpacity>
        </View>
        <View style={{flex:1,  alignItems:'center'}}></View>
      </SafeAreaView>
      
      
    </>
    )
  }
};

const styles = StyleSheet.create({
  backBody:{
    width:'100%',
    height:'100%',
    backgroundColor:'pink'
  },
  title:{
    color:'white',
    fontSize:30,
    fontWeight:'bold'
  }
});

export default App;
