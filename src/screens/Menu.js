import React, { Component } from 'react';
import { Text, Dimensions, ImageBackground, ScrollView, StyleSheet, View, TextInput, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class Menu extends Component {
    state = {
        chosenIndex: 0
    };

    header = () => {
        return (
            <View>
                <Text style={[styles.textMain]}>Menu</Text>
            </View>
        )
    }

    content = () => {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.buttonView}>
                <View style={styles.dataContainer}>
                    <Text style={[styles.textSecond]}>Rok rozpoczęcia ligi</Text>
                    <TextInput keyboardType={'numeric'} placeholder='Rok Rozpoczęcia ligi' placeholderTextColor="#4cfaff" style={styles.input}
                               onChangeText={(rok) => this.setState({rok: rok})}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Tabela ligowa'} onPress={() => navigate('Tabela', {
                        data: {rok: this.state.rok,}})} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Najlepsi Strzelcy'} onPress={() => navigate('Strzelcy', {
                        data: {rok: this.state.rok,}})} />
                </View>
                <View style={styles.dataContainer}>
                    <Text style={[styles.textSecond]}>Stadiony PL</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Stadiony'} onPress={() => navigate('Stadiony')} />
                </View>
                <View style={styles.dataContainer}>
                    <Text style={[styles.textSecond]}>Legendy PL</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Legendy PL'} onPress={() => navigate('Historie')} />
                </View>
            </View>
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View onPress={() => navigate('Home')}>
                <ScrollView style={styles.scrollview}>
                    <FlatList ListHeaderComponent={this.header} />
                    <FlatList ListHeaderComponent={this.content} />
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
        marginTop: 10,
        marginLeft: 160,
        fontSize: 36,
        color: '#2ae9cc'
    },
    textSecond: {
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 30,
        color: '#2ae9cc'
    },
    buttonView: {
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        marginTop: 5,
        flex: 1,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dataContainer: {
        margin: 4,
        flex: 1,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 3,
        color: "#2ae9cc",
        textAlign: 'center',
        fontSize: 14,
        borderColor: '#2ae9cc',
        marginTop: 4,
        height: 40,
        width: 300,
    },
});
