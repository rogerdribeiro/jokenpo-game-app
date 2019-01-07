import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const imgStone = require("../imgs/pedra.png");
const imgPaper = require("../imgs/papel.png");
const imgScissors = require("../imgs/tesoura.png");

const Icon = props => {
    if (props.choice === "pedra") {
        return (
            <View style={styles.icon}>
                <Text style={styles.txtPlayer}>{props.player}</Text>
                <Image source={imgStone} />
            </View>
        );
    } else if (props.choice === "papel") {
        return (
            <View style={styles.icon}>
                <Text style={styles.txtPlayer}>{props.player}</Text>
                <Image source={imgPaper} />
            </View>
        );
    } else if (props.choice === "tesoura") {
        return (
            <View style={styles.icon}>
                <Text style={styles.txtPlayer}>{props.player}</Text>
                <Image source={imgScissors} />
            </View>
        );
    }

    return false;
};

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
