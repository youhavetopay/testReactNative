import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import ActionCreator from '../actions'


class MyTextInput extends Component{

    state = {
        text:'',
        inputText:''
    }

    moveToText = () =>{
        this.setState({text:this.state.inputText})
    }

    render(){
        return(
            <View>
                <inputText onChangeText={(text)=>{this.setState({inputText:text})}}></inputText>
                <TouchableOpacity style={style.btn} onPress = {this.moveToText}>aa</TouchableOpacity>
                <Text>{this.state.text}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    btn:{
        backgroundColor:'pink',
        padding:10
    }
})