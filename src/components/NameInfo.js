import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


class Nameinfo extends Component{

    static defaultProps ={
        info:{
            id:0,
            name:'김방탄'
        }
    }

    state = {
        editing:false,
        name:''
    }

    handleRemove = () =>{
        const {info, onRemove} = this.props
        onRemove(info.id)
    }

    handleToggleEdit = () =>{
        const {editing} = this.state
        this.setState({
            editing: !editing
        })
    }

    handleChange = (e) =>{
        const {target,text} = e.nativeEvent

        console.log(e.nativeEvent.text,' dddd');
        this.setState({
            [target]: text
        })
    }

    componetDidUpdate(prevProps, prevState){
        const {info, onUpdate} = this.props

        if(!prevState.editing && this.state.editing){
            this.setState({
                name:info.name
            })
        }

        if(prevState.editing && !this.state.editing){

            onUpdate(info.id,{
                name:this.state.name
            })
        }
    }


    render(){

        const { editing } = this.state

        if(editing){
           return(
            <View style={style.flex_column}>
                <TextInput name='name' onChange={this.handleChange}></TextInput>

            <TouchableOpacity onPress={this.handleToggleEdit}>
                <Text>save</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleRemove}>
                <Text>remove</Text>
            </TouchableOpacity>
            </View>
           )
        }
        else{
            const {id,name} = this.props.info
            return(
                <View style={style.flex_column}>
                    <Text>id: {id}</Text>
                    <Text>name: {name}</Text>
                    <TouchableOpacity
                        style = {style}
                        onPress={this.handleToggleEdit}
                    >
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style}
                        onPress={this.handleRemove}
                    >
                        <Text>Remove</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const style = StyleSheet.create({
    flex_column:{
        flexDirection:'column',
        borderWidth:1,
        borderColor:'black',
        padding:8,
        margin:8
    },
    removeBtn:{
        backgroundColor:'pink'
    }
})

export default Nameinfo