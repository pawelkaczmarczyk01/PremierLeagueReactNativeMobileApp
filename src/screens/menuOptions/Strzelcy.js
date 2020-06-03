import React, {Component} from 'react';
import {Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import {FlatList} from "react-native-gesture-handler";

export default class Strzelcy extends Component {
    state = {
        items: [],
        chosenIndex: 0
    };

    state2 = {
        items: [],
        rok: this.props.navigation.state.params.data.rok,
        url: 'http://api.football-data.org/v2/competitions/PL/scorers?season='+this.props.navigation.state.params.data.rok,
    }

    componentDidMount() {
        return fetch(this.state2.url, {
            headers: { 'X-Auth-Token': '93ff6c3667bf4cf8a155258cd582f10e' },
            dataType: 'json',
            type: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.scorers,
                })
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    header = () => {
        return (
            <View>
                <Text style={[styles.textMain]}>Najlepsi strzelcy</Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.scrollview}>
                    <FlatList ListHeaderComponent={this.header} />
                </View>
                <Text style={styles.textSecond}>Najlepsi strzelcy PL z roku {this.state2.rok}</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <TouchableHighlight
                            style={styles.flatList}
                            onPress={() => this.props.navigation.navigate('StrzelcySzczegóły', { data: { item: item}})}
                            underlayColor='#fff'>
                            <Text style={styles.boxText}>{item.player.name} - {item.numberOfGoals}</Text>
                        </TouchableHighlight>
                    }
                    keyExtractor={item => item.position}
                />
                <ImageBackground
                    source={require('../../resources/menu.jpg')}
                    style={[styles.fixed, styles.containter, {zIndex: -1}]}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containter: {
        width: '100%',
        height: '100%'
    },
    fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    scrollview: {
        backgroundColor: 'transparent',
    },
    textMain: {
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 10,
        marginTop: 10,
        marginLeft: 100,
        fontSize: 36,
        color: '#2ae9cc'
    },
    textSecond: {
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        fontSize: 30,
        color: '#2ae9cc'
    },
    buttonView: {
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 40,
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
    boxText: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 20
    },
    flatList: {
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        borderColor: '#2ae9cc',
        marginBottom: 9,
        marginTop: 9,
    }
});
