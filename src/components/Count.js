import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import ActionCreator from '../actions'

class Count extends Component{
    constructor(props, context){
        super(props, context)

    }

    render(){
        return(
            <View style={s.container}>
                <Text style={s.myText}>{this.props.count}</Text>

                <TouchableOpacity style={s.upButton} onPress={() => this.props.countUp(1)}>
                    <Text style={s.myText}>+1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={s.upButton} onPress={() => this.props.countUp(2)}>
                    <Text style={s.myText}>+2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={s.downButton} onPress={() => this.props.countDown(1)}>
                    <Text style={s.myText}>-1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={s.downButton} onPress={() => this.props.countDown(2)}>
                    <Text style={s.myText}>-2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const s = StyleSheet.create({
    container:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center'
    },
    upButton:{
        marginLeft:20,
        backgroundColor:'cyan',
        padding:10,
        borderRadius:20
    },
    downButton:{
        marginLeft:20,
        backgroundColor:'pink',
        padding:10,
        borderRadius:20
    },
    myText:{
        fontSize:20
    }
})

function mapStateToProps(state){
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        countUp: (num) =>{
            dispatch(ActionCreator.countUP(num))
        },
        countDown:(num)=>{
            dispatch(ActionCreator.countDown(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);