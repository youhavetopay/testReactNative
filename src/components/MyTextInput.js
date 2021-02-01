import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper'
import { connect } from 'react-redux';
import ActionCreator from '../actions'


class MyTextInput extends Component{

    state = {
        text:'',
        inputText:''
    }

    transTextToCode = (text) =>{
        let inputData = text
        
        let englishToCode = {
            'A':'.- ', 'B':'-... ', 'C':'-.-. ', 'D':'-.. ', 'E':'. ',
            'F':'..-. ', 'G':'--. ', 'H':'.... ', 'I':'.. ', 'J':'.--- ',
            'K':'-.- ', 'L':'.-.. ', 'M':'-- ', 'N':'-. ', 'O':'--- ',
            'P':'.--. ', 'Q':'--.- ', 'R':'.-. ', 'S':'... ', 'T':'- ',
            'U':'..- ', 'V':'...- ', 'W':'.-- ', 'X':'-..- ', 'Y':'-.-- ',
            'Z':'--.. ', 
            
            ' ':'   '
        }

        let hangeulToCode = {
            'ㄱ':'.-..', 'ㄴ':'..-.', 'ㄷ':'-...', 'ㄹ':'...-', 'ㅁ':'--',
            'ㅂ':'.--', 'ㅎ':'.---', 'ㅅ':'--.', 'ㅇ':'-.-', 'ㅈ':'.--.',
            'ㅊ':'-.-.', 'ㅋ':'-..-', 'ㅌ':'--..', 'ㅍ':'---', 

            'ㅏ':'.', 'ㅑ':'..', 'ㅓ':'-', 'ㅕ':'...', 'ㅗ':'.-',
            'ㅛ':'-.', 'ㅜ':'...', 'ㅠ':'.-.', 'ㅡ':'-..', 'ㅣ':'..-',
            'ㅔ':'-.--', 'ㅔ':'-.--', 'ㅐ':'--.-',

            ' ':'   '
        }

        let transCodeValue = ''

        for(let i in inputData){
            transCodeValue += hangeulToCode[inputData[i].toUpperCase()]
        }
        console.log(transCodeValue);
        this.setState({text:transCodeValue})
    }

    render(){
        return(
            <View style={style.ComponentView}>
                
                <RadioButton.Group style={style.flex_row}>
                    <View style={style.flex_row}>
                        <Text>KR</Text>
                        <RadioButton value="KR"></RadioButton>
                    </View>

                    <View style={style.flex_row}>
                        <Text>EN</Text>
                        <RadioButton value="EN"></RadioButton>
                    </View>
                </RadioButton.Group>
                
                <TextInput 
                style={style.input} 
                onChangeText={(text)=>{this.transTextToCode(text)}}
                multiline ={true}
                ></TextInput>
               
                {/* <TouchableOpacity style={style.btn} onPress = {this.transTextToCode}>
                    <Text style={{textAlign:'center'}}>
                        convert
                    </Text>
                </TouchableOpacity> */}
                <Text style={style.text}>{this.state.text}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    flex_row:{
        flexDirection:'row'
    },
    ComponentView:{
        marginTop:30,
        flexDirection:'column',
        alignItems:'center'
    },
    input:{
        width:350,
        height:100,
        padding:10,
        borderWidth:2,
        borderColor:'pink',
        fontSize:20,
        marginBottom:20
    },
    btn:{
        width:300,
        backgroundColor:'pink',
        padding:10
    },
    text:{
        fontSize:40,
        marginTop:20,
        width:350,
        padding:10
    }
})

export default MyTextInput