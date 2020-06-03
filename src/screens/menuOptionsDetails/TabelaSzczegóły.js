import React, {Component} from 'react';
import { Text, ScrollView, StyleSheet, ImageBackground} from 'react-native';

export default class TabelaSzczegóły extends Component {

    state = {
        imageName: '',
        path: this.props.navigation.state.params.data.path,
        record: this.props.navigation.state.params.data.item.team.id,
        image: null,
    };

    render() {
        const { params } = this.props.navigation.state;
        const record = params.data.item;

        for(let i = 0; i < this.state.path.length; i++) {
            if (this.state.path[i].id == this.state.record) {
                this.state.image = this.state.path[i].nazwa;
            }
        }
        if (this.state.image === 'undefined' || this.state.image === null) {
            this.state.image = 'https://turbologo.com/articles/wp-content/uploads/2020/01/Premier-League-symbol-1280x720.png';
            console.log(this.state.image);
        }

        return (
            <ScrollView style={styles.scrollview}>
                <Text style={styles.container}>
                    <Text style={styles.label}>Nazwa: </Text> <Text style={styles.data}>{record.team.name}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Punkty: </Text> <Text style={styles.data}>{record.points}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Wygrane: </Text> <Text style={styles.data}>{record.won}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Remisy: </Text> <Text style={styles.data}>{record.draw}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Przegrane: </Text> <Text style={styles.data}>{record.lost}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Rozegrane mecze: </Text> <Text style={styles.data}>{record.playedGames}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Strzelone bramki: </Text> <Text style={styles.data}>{record.goalsFor}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Stracone bramki: </Text> <Text style={styles.data}>{record.goalsAgainst}</Text>
                </Text>
                <Text style={styles.container}>
                    <Text style={styles.label}>Bilans bramkowy: </Text> <Text style={styles.data}>{record.goalDifference}</Text>
                </Text>
                <ImageBackground
                    source={{uri: this.state.image}}
                    style={[styles.fixed, styles.containter2, {zIndex: -1}]}
                />
            </ScrollView>
        );
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
        opacity: 0.2,
        width: '100%', //for full screen
        height: '100%' //for full screen
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
