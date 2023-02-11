import React from 'react'
import { SafeAreaView, FlatList, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import JobCard from '../components/JobCard'
import { Text } from 'react-native'

const Favourite = () => {
    const favouriteJobs = useSelector((state) => state.favourite.favouriteJobs)

    return (
        <SafeAreaView>
            {
                favouriteJobs.length === 0
                    ?
                    <View style={styles.container}>
                        <Text style={styles.text}>You don't have any favourite job yet!</Text>
                    </View>
                    :
                    <FlatList
                        data={favouriteJobs}
                        renderItem={({ item }) => <JobCard item={item} remove />}
                    />
            }
        </SafeAreaView>
    )
}

export default Favourite

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ef5350',
        padding: 5,
        borderRadius: 5,
        margin: 5
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})