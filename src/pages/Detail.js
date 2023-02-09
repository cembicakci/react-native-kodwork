import React from 'react'
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import useFetch from '../hooks/useFetch';
import RenderHtml from 'react-native-render-html';
import Button from '../components/Button';

export const Detail = ({ route }) => {

    const { id } = route.params;
    const { width } = useWindowDimensions()

    const { data, loading, error } = useFetch(`https://www.themuse.com/api/public/jobs/${id}`);

    if (loading) {
        return <ActivityIndicator color={'#ee5b5a'} size={'large'} style={styles.loading} />
    }

    if (error) {
        return Alert.alert(error)
    }

    const source = {
        html: `${data.contents}`
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.text}>Locations: <Text style={styles.innerText}>{data.locations[0].name}</Text></Text>
                <Text style={styles.text}>Job Level: <Text style={styles.innerText}>{data.levels[0].name}</Text></Text>
                <Text style={styles.title}>Job Detail</Text>
            </View>
            <View style={styles.bottomContainer}>
                <RenderHtml baseStyle={styles.content} contentWidth={width} source={source} />
            </View>
            <View style={styles.btnContainer}>
                <Button text={'Submit'} />
                <Button text={'Favourite Job'} />
            </View>
        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginBottom: 50
    },
    topContainer: {
        padding: 5,
    },
    name: {
        color: '#49575f',
        fontWeight: 'bold',
        fontSize: 22
    },
    text: {
        fontWeight: 'bold',
        color: '#ef5350',
        marginTop: 10,
        fontSize: 16
    },
    innerText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16
    },
    title: {
        textAlign: 'center',
        color: '#49575f',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    bottomContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        padding: 0,
        margin: 0
    },
    content: {
        paddingHorizontal: 2
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})