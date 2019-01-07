import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const imgStone = require("../imgs/pedra.png");
const imgPaper = require("../imgs/papel.png");
const imgScissors = require("../imgs/tesoura.png");

class Icon extends Component {
    render() {
        if (this.props.choice === "pedra") {
            return (
                <View style={styles.icon}>
                    <Text style={styles.txtPlayer}>{this.props.player}</Text>
                    <Image source={imgStone} />
                </View>
            );
        } else if (this.props.choice === "papel") {
            return (
                <View style={styles.icon}>
                    <Text style={styles.txtPlayer}>{this.props.player}</Text>
                    <Image source={imgPaper} />
                </View>
            );
        } else if (this.props.choice === "tesoura") {
            return (
                <View style={styles.icon}>
                    <Text style={styles.txtPlayer}>{this.props.player}</Text>
                    <Image source={imgScissors} />
                </View>
            );
        }

        return false;
    }
}

const styles = StyleSheet.create({
    icon: {
        alignItems: "center",
        marginBottom: 20
    },
    txtPlayer: {
        fontSize: 18
    }
});

export default Icon;
