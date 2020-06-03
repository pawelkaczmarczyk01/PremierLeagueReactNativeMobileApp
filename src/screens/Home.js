import React, { Component } from 'react';
import { Button, ImageBackground, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default class Home extends Component {

    state = {
        chosenIndex: 0
    };

    header = () => {
        return (
            <View>
                <Text style={[styles.textMain]}>Witaj w Premier League</Text>
                <Text style={[styles.textSecond]}>Bieżące informacje o najlepszych piłkarskich rozgrywkach w zasięgu Twojej ręki !</Text>
            </View>
        )
    }

    button = () => {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.buttonView}>
                <View style={styles.buttonContainer}>
                    <Button title={'Start'} onPress={() => navigate('Menu')} />
                </View>
            </View>
        )
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ScrollView style={styles.scrollview}>
                    <FlatList ListHeaderComponent={this.header} />
                    <FlatList ListHeaderComponent={this.button} />
                </ScrollView>
                <ImageBackground
                    source={require('../resources/background.jpg')}
                    style={[styles.fixed, styles.containter, {zIndex: -1}]}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    containter: {
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height //for full screen
    },
    fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    scrollview: {
        backgroundColor: 'transparent'
    },
    textMain: {
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 10,
        marginTop: 50,
        marginLeft: 15,
        fontSize: 36,
        color: '#4cfaff'
    },
    textSecond: {
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 10,
        marginLeft: 50,
        marginRight: 30,
        marginTop: 50,
        fontSize: 30,
        color: '#2ae9cc'
    },
    buttonView: {
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 100,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
