import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper'
import { connect } from 'react-redux';
import ActionCreator from '../actions'
import morse from 'morse-decoder'


class MyTextInput extends Component{

    state = {
        text:'',
        inputText:'',
        transText:'',
        name:'',
        age:''
    }

    englishToCode = {
        'A':'.- ', 'B':'-... ', 'C':'-.-. ', 'D':'-.. ', 'E':'. ',
        'F':'..-. ', 'G':'--. ', 'H':'.... ', 'I':'.. ', 'J':'.--- ',
        'K':'-.- ', 'L':'.-.. ', 'M':'-- ', 'N':'-. ', 'O':'--- ',
        'P':'.--. ', 'Q':'--.- ', 'R':'.-. ', 'S':'... ', 'T':'- ',
        'U':'..- ', 'V':'...- ', 'W':'.-- ', 'X':'-..- ', 'Y':'-.-- ',
        'Z':'--.. ', 
        
        ' ':'   '
    }
    hangeulToCode = {
        'ㄱ':'.-..', 'ㄴ':'..-.', 'ㄷ':'-...', 'ㄹ':'...-', 'ㅁ':'--',
        'ㅂ':'.--', 'ㅎ':'.---', 'ㅅ':'--.', 'ㅇ':'-.-', 'ㅈ':'.--.',
        'ㅊ':'-.-.', 'ㅋ':'-..-', 'ㅌ':'--..', 'ㅍ':'---', 

        'ㄲ':'.-.. .-..', 'ㄸ':'-... -...', 'ㅃ':'.-- .--', 'ㅆ':'--. --.', 'ㅉ':'.--. .--.',
        'ㄳ':'.-.. --.', 'ㄵ':'..-. .--.', 'ㄶ':'..-. .---', 'ㄺ':'...- .-..', 'ㄻ':'...- --',
        'ㄼ':'...- .--', 'ㄽ':'...- --.', 'ㄾ':'...- --..', 'ㄿ':'...- ---', 'ㅀ':'...- .---',
        'ㅄ':'.-- --.', 

        'ㅏ':'.', 'ㅑ':'..', 'ㅓ':'-', 'ㅕ':'...', 'ㅗ':'.-',
        'ㅛ':'-.', 'ㅜ':'...', 'ㅠ':'.-.', 'ㅡ':'-..', 'ㅣ':'..-',
        'ㅔ':'-.--', 'ㅔ':'-.--', 'ㅐ':'--.-',

        'ㅘ':'.- .', 'ㅙ':'.- --.-', 'ㅚ':'.- ..-', 'ㅝ':'... -', 'ㅞ':'... -.--',
        'ㅟ':'... ..-',


        ' ':'   '
    }


    static defaultProps = {
        info:{
            'name':'김민주'
        }
    }

    transTextToCode = () =>{

        let text = this.state.inputText

        const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
        const s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
               'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
               'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
        const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
               'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
               'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
               'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

        const compile = [
            'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
               'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
               'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
               'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
               'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
        ]

        let x = ''
        const ga = 44032;
        for(let i in text){
            if(text[i] == ' '){
                x += '  '
                continue
            }
            if(compile.includes(text[i])){
                x += text[i]
                continue
            }
            let uni = text.charCodeAt(i);
           
            uni = uni - ga;
           
            let fn = parseInt(uni / 588);
            let sn = parseInt((uni - (fn * 588)) / 28);
            let tn = parseInt(uni % 28);
        
            console.log(f[fn], s[sn], t[tn]);
            
            if(f[fn] != undefined && s[sn] != undefined && t[tn] != undefined){
                x += f[fn] + s[sn] + t[tn] + ' '
            }
        }

        let result_text = ''

        

        for(let i in x){
            result_text += this.hangeulToCode[x[i]]
        }
        console.log(result_text);

        this.setState({text:x})
           
        let testArr = result_text.split(' ')
        console.log(testArr);


        // let code = morse.encode(text)

        // this.setState({text:code})
    }

    transCodeToText = () =>{

        let text = morse.decode(this.state.text)

        this.setState({transText:text})
        
    }

    handSubmit = ()=>{

        this.props.onCreate(this.state)

        this.setState({
            text:'',
            inputText:'',
            transText:'',
            name:'',
            age:''
        })
    }

    render(){
        return(
            <View style={style.ComponentView}>
                
                <RadioButton.Group style={style.flex_row}>
                    <TextInput
                        onChangeText={(text)=>{this.setState({
                            name:text
                        })}}
                        name='name'
                    >

                    </TextInput>
                    <Text>{this.state.name}adw</Text>
                    <TouchableOpacity 
                    style={{backgroundColor:'pink'}}
                    onPress={this.handSubmit}
                    >
                        <Text>dmdkdkd</Text>
                    </TouchableOpacity>

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
                onChangeText={(text)=>{this.setState({inputText:text})}}
                autoCompleteType={'off'}

                multiline ={true}
                ></TextInput>
               
                {/* <TouchableOpacity style={style.btn} onPress = {this.transTextToCode}>
                    <Text style={{textAlign:'center'}}>
                        convert
                    </Text>
                </TouchableOpacity> */}
                <Text style={style.text}>{this.state.text}</Text>
                <TouchableOpacity style={style.btn} onPress = {this.transTextToCode}>
                    <Text style={{textAlign:'center'}}>Convert to Text</Text>
                </TouchableOpacity>
                <Text>{this.state.text}</Text>
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
        padding:10,
        borderRadius:10
    },
    text:{
        fontSize:40,
        marginTop:20,
        width:350,
        padding:10
    }
})

export default MyTextInput