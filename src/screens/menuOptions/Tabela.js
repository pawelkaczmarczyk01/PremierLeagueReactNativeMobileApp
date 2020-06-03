import React, {Component} from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import { db } from '../../config';

let itemsRef = db.ref('/klub');

export default class Tabela extends Component {
    state = {
        items: [],
        chosenIndex: 0
    };

    state2 = {
        items: [],
        rok: this.props.navigation.state.params.data.rok,
        url: 'http://api.football-data.org/v2/competitions/2021/standings?season='+this.props.navigation.state.params.data.rok,
    }

    componentDidMount(){
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.state2.items = items;
            this.setState({ items });
        });

        console.log(this.state2.items);

        return fetch(this.state2.url, {
            headers: { 'X-Auth-Token': '93ff6c3667bf4cf8a155258cd582f10e' },
            dataType: 'json',
            type: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                this.setState({
                    dataSource: responseJson.standings[0].table,
                })
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    header = () => {
        return (
            <View>
                <Text style={[styles.textMain]}>Tabela ligowa</Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.scrollview}>
                    <FlatList ListHeaderComponent={this.header} />
                </View>
                <Text style={styles.textSecond}>Tabela ligowa z roku {this.state2.rok}</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <TouchableHighlight
                            style={styles.flatList}
                            onPress={() => this.props.navigation.navigate('TabelaSzczegóły',
                                { data: { item: item,
                                          path: this.state2.items,
                                        }
                                }
                            )}
                            underlayColor='#fff'>
                            <Text style={styles.boxText}>{item.position} - {item.team.name}</Text>
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
        marginBottom: 2
    }
});
