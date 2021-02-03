import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import NameInfo from './NameInfo'

class NameInfoList extends Component{

    static defaultProps = {
        data:[],
        onRemove: () => console.log('remove 못함'),
        onUpdate: () => console.log('update 못함')
    }

    render(){
        const {data, onRemove, onUpdate} = this.props

        const list = data.map(
            info => (
            <NameInfo 
            key={info.id} 
            info={info} 
            onRemove = {onRemove} 
            onUpdate = {onUpdate} 
            ></NameInfo>)
        )


        return(
            <View>
                {list}
            </View>
        )
    }

}

export default NameInfoList