import React from "react";
import { View ,Image ,StyleSheet} from "react-native";


export default function ImageUse() {
    const img = require('./img/user.png')
    return (
        <View>
            <Image
            style={styles.img}
                source={img}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50
    }
})