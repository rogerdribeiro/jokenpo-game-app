import React, { Component } from "react";
import { View, Image } from "react-native";

const wallpaper = require("../imgs/jokenpo.png");

class Top extends Component {
    render() {
        return (
            <View>
                <Image source={wallpaper} />
            </View>
        );
    }
}

export default Top;
