import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, Dimensions, ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class PremierLeague extends Component {
    state = {
        chosenIndex: 0
    };

    logo = () => {
        return (
            <View style={styles.view}>
                <Image source={require('../resources/logo.png')}
                       style={[styles.logo]}/>
            </View>
        )
    }

    content = () => {
        return (
            <View>
                <Text style={[styles.text]}>Naciśnij aby rozpocząć</Text>
            </View>
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity onPress={() => navigate('Home')}>
                <ScrollView style={styles.scrollview}>
                    <FlatList ListHeaderComponent={this.logo} />
                    <FlatList ListHeaderComponent={this.content} />
                </ScrollView>
                <ImageBackground
                    source={require('../resources/backgroundGreen.jpeg')}
                    style={[styles.fixed, styles.containter, {zIndex: -1}]}
                />
            </TouchableOpacity>
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
    logo: {
        marginTop: 30,
        width: 210,
        height: 210,
    },
    text: {
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 10,
        marginTop: 200,
        marginLeft: 30,
        fontSize: 34,
        color: '#ff223f'
    }
});
