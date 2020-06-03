import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";

export default class StadionySzczegóły extends Component {

    render() {
        const { params } = this.props.navigation.state;
        const record = params.data.item;
        return (
            <View style={styles.scrollview}>
                <Text style={styles.container}>
                    <Text style={styles.label}>Nazwa: </Text> <Text style={styles.data}>{record.nazwa}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Pojemność: </Text> <Text style={styles.data}>{record.pojemnosc}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Zespół: </Text> <Text style={styles.data}>{record.zespol}</Text>
                </Text>
                <Text style={styles.container3}>

                </Text>
                <ImageBackground
                    source={{uri: record.zdjecie}}
                    style={[styles.fixed, styles.containter2, {zIndex: -1}]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: 20,
        fontWeight: "bold"
    },
    data: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: 20,
    },
    scrollview: {
        backgroundColor: 'transparent',
    },
    containter2: {
        opacity: 0.3,
        width: '100%', //for full screen
        height: '100%' //for full screen
    },
    container3: {
        marginTop: 500 //for full screen
    },
    fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    container: {
        textShadowColor: 'rgba(0, 0, 0, 4.21)',
        textShadowOffset: {width: 2, height: -2},
        textShadowRadius: 20,
        fontSize: 30,
        color: '#000000',
        marginBottom: 30,
        textAlign: 'left'
    },
});
