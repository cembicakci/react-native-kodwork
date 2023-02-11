import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
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
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})