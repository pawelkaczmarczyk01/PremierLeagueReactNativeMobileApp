import React, {Component} from 'react';
import {Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {db} from "../../config";

let itemsRef = db.ref('/historie');

export default class Historie extends Component {
    state = {
        items: [],
        chosenIndex: 0
    };
    state2 = {
        items: [],
    }

    header = () => {
        return (
            <View>
                <Text style={[styles.textMain]}>Legendy PL</Text>
            </View>
        )
    }

    componentDidMount(){
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.state2.items = items;
            this.setState({ items });
        });
    }

    header = () => {
        return (
            <View>
                <Text style={[styles.textMain]}>Legendy Premier League</Text>
            </View>
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.scrollview}>
                    <FlatList ListHeaderComponent={this.header} />
                </View>
                <FlatList
                    data={this.state.items}
                    renderItem={({ item }) =>
                        <TouchableHighlight
                            style={styles.flatList}
                            onPress={() => this.props.navigation.navigate('HistorieSzczegóły',
                                { data: { item: item,
                                        path: this.state2.items,
                                    }
                                }
                            )}
                            underlayColor='#fff'>
                            <Text style={styles.boxText}>{item.id} - {item.imie}</Text>
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
        marginLeft: 6,
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
        marginBottom: 20,
        marginTop: 20,
    }
});
