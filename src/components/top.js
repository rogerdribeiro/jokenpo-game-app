import React from "react";
import { View, Image } from "react-native";

const wallpaper = require("../imgs/jokenpo.png");

const Top = () => (
    <View>
        <Image source={wallpaper} />
    </View>
);

export default Top;
