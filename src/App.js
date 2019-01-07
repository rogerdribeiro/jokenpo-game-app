import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import Top from "./components/top";
import Icon from "./components/icon";

export default class App extends Component {
    state = { userChoice: "", computerChoice: "", result: "" };

    jokenpo(userChoice) {
        const randomNumber = Math.floor(Math.random() * 3);

        let computerChoice = "";

        switch (randomNumber) {
            case 0:
                computerChoice = "pedra";
                break;
            case 1:
                computerChoice = "papel";
                break;
            case 2:
                computerChoice = "tesoura";
                break;
            default:
                computerChoice = "";
        }

        let result = "";

        if (computerChoice === "pedra") {
            if (userChoice === "pedra") {
                result = "Empate";
            }

            if (userChoice === "papel") {
                result = "Você ganhou";
            }

            if (userChoice === "tesoura") {
                result = "Você perdeu";
            }
        }

        if (computerChoice === "papel") {
            if (userChoice === "papel") {
                result = "Empate";
            }

            if (userChoice === "tesoura") {
                result = "Você ganhou";
            }

            if (userChoice === "pedra") {
                result = "Você perdeu";
            }
        }

        if (computerChoice === "tesoura") {
            if (userChoice === "tesoura") {
                result = "Empate";
            }

            if (userChoice === "pedra") {
                result = "Você ganhou";
            }

            if (userChoice === "papel") {
                result = "Você perdeu";
            }
        }

        this.setState({ userChoice, computerChoice, result });
    }

    render() {
        return (
            <View>
                <Top />

                <View style={styles.actionPanel}>
                    <View style={styles.bntChoice}>
                        <Button
                            title="pedra"
                            onPress={() => {
                                this.jokenpo("pedra");
                            }}
                        />
                    </View>

                    <View style={styles.bntChoice}>
                        <Button
                            title="papel"
                            onPress={() => {
                                this.jokenpo("papel");
                            }}
                        />
                    </View>

                    <View style={styles.bntChoice}>
                        <Button
                            title="tesoura"
                            onPress={() => {
                                this.jokenpo("tesoura");
                            }}
                        />
                    </View>
                </View>

                <View style={styles.stage}>
                    <Text style={styles.txtresult}>{this.state.result}</Text>

                    <Icon
                        choice={this.state.computerChoice}
                        player="Computador"
                    />

                    <Icon choice={this.state.userChoice} player="Você" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bntChoice: {
        width: 90
    },
    actionPanel: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        padding: 10
    },
    stage: {
        alignItems: "center",
        marginTop: 10
    },
    txtresult: {
        fontSize: 25,
        fontWeight: "bold",
        color: "red",
        height: 60
    }
});
