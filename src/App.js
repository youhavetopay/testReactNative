/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { Component } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput,
  StatusBar, Image, TouchableOpacity, KeyboardAvoidingView, Alert,

} from 'react-native';


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import MyTextInput from './components/MyTextInput'
import NameInfo from './components/NameInfo'
import NameInfoList from './components/NameInfoList'
import Count from './components/Count'


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  constructor(props){
    super(props)
    //this.changeInfoValue = this.changeInfoValue.bind(this)
  }

  answer = {
    userId:'izone',
    userPw:'1234'
  }

  state = {
    userId:'',
    userPw:''
  }

  changeInfoValue = (e, name) =>{
    
    this.setState({
      [name]:e.nativeEvent.text
    })
  }
  
  checkInfoAlert = () =>{
    Alert.alert(
      '입력정보 확인',
      'Id: '+this.state.userId+'\nPw: '+this.state.userPw ,
      [
        {
          text:'확인',
          onPress: () => console.log('으앙')
        }
      ],
      { cancelable:false}
    )
  }

  render (){

    return(
      <>

      <SafeAreaView style={styles.backBody}>
        <View style={{flex:3,  alignItems:'center'}}></View>
        <View style={{flex:13,  alignItems:'center', padding:10}}>
          <Text style={styles.title}>Eyes On Me!</Text>
          <Image style={{width:250, height:100}} source={require('./Image/izone_logo.png')}></Image>
          
          <TextInput 
            style={{backgroundColor:'white', borderRadius:20, width:250, height:50, paddingLeft:20,marginTop:30}} 
            placeholder='아이디'
            name = 'userId'
            onChange={e => this.changeInfoValue(e, 'userId')} ></TextInput>

          <TextInput 
            style={{backgroundColor:'white', borderRadius:20, width:250, height:50, paddingLeft:20,marginTop:10, marginBottom:20}} 
            placeholder='비밀번호'
            name='userPw'
            onChange={e => this.changeInfoValue(e, 'userPw')} 
            secureTextEntry={true} ></TextInput>
          
          <TouchableOpacity style={{backgroundColor:'hotpink', width:250, height:50, borderRadius:20, justifyContent:'center'}} onPress={this.checkInfoAlert} ><Text style={{color:'white', textAlign:'center'}}>로그인</Text></TouchableOpacity>
        </View>

        <View style={{flex:1,  alignItems:'center'}}>
          <Text style={{color:'white'}}>Develop by React Native</Text>
          {/* <Image style={{width:300, height:100}} source={require('./Image/react-native.png')}></Image> */}
        </View>
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
