import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

// TODO ADD styles in props and props types
export const CustomButton = ({onPress, title}:any) =>{
    return(
        <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const CustomIconButton = (props:any) =>{
    return(
        <Pressable disabled={props.disabled} style={{alignSelf:'flex-end', paddingVertical:15}} android_ripple={{color:'cyan',radius:24, foreground:false}} onPress={props.onPressAddButton} >
            <Icon style={[styles.shadows,{borderRadius:55}]} color={props.disabled ? 'grey' : 'black'} name={props.name} size={55} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#212121',
        borderRadius:10,
        marginTop:10,
        padding:10
    },
    text:{
        color:'#ffffff',
        textAlign:'center',
        fontWeight:'700'
    },
    shadows:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 14,
    }
})