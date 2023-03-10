import React from 'react'
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import JobCard from '../components/JobCard';
import useFetch from '../hooks/useFetch'
import { selectJob } from '../redux/slice/FavouriteSlice';

const Jobs = ({ navigation }) => {

    const { data, error, loading } = useFetch('https://www.themuse.com/api/public/jobs?page=0');

    const dispatch = useDispatch();

    const onSelect = (id) => {
        navigation.navigate('Detail', { id })
    }

    const renderJobs = ({ item }) => <JobCard item={item} onSelect={() => { onSelect(item.id), dispatch(selectJob(item.name)) }} />

    if (loading) {
        return <ActivityIndicator color={'#ee5b5a'} size={'large'} style={styles.loading} />
    }

    if (error) {
        return Alert.alert(error)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.results}
                renderItem={renderJobs}
            />
        </View>
    )
}

export default Jobs

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e7e7e7',
        flex: 1
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})