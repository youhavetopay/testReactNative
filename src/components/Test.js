import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


class Test extends Component{

    render(){
        return(
            <Text>{this.props.name}</Text>
        )
    }
}

export default Test