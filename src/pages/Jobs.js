import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import JobCard from '../components/JobCard';
import useFetch from '../hooks/useFetch'

const Jobs = () => {

    const data = useFetch('https://www.themuse.com/api/public/jobs?page=0');

    const renderJobs = ({ item }) => <JobCard item={item} />
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data.data}
                renderItem={renderJobs}
            />
        </View>
    )
}

export default Jobs

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e7e7e7'
    }
})