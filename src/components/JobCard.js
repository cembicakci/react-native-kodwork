import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { removeFavourites } from '../redux/slice/FavouriteSlice'
import Button from './Button'

const JobCard = ({ item, onSelect, remove }) => {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                <Text style={styles.companyName}>{item.company.name}</Text>
                <Text style={styles.location}>{item.locations[0].name}</Text>
                <Text style={styles.level}>{item.levels[0].name}</Text>
                {
                    remove &&
                    <View style={styles.btnContainer}>
                        <Button text={'Remove '} onPress={() => dispatch(removeFavourites(item.id))} />
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}

export default JobCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 7,
        padding: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#bdbdbd'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    companyName: {},
    location: {
        backgroundColor: '#ef5350',
        color: '#fff',
        fontWeight: 'bold',
        padding: 5,
        marginTop: 3,
        borderRadius: 12,
        overflow: 'hidden'
    },
    level: {
        alignSelf: 'flex-end',
        color: '#ef5350',
        fontWeight: 'bold',
        marginVertical: 10
    },
    btnContainer: {
        alignSelf: 'center',
        width: '100%'
    }
})