import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({ text, onPress, iconName }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text><Icon name={iconName} size={25} color='#fff' /></Text>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#ef5350',
        padding: 10,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        marginHorizontal: 5
    }
})