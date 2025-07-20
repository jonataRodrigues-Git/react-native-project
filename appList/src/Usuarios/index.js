import React from "react";
import { StyleSheet, View, Text } from "react-native";

import ImageUse from "../ImageUser/ImageUser";

export default function User(props) {
    return (
        <View style= {styles.content}>
            <View style={styles.contentIfor}>
                <Text>
                    <Text style={styles.text} >Nome:</Text> {props.data.nome}
                </Text>
                <Text>
                    <Text style={styles.text} >Prodissão:</Text> {props.data.cargo} 
                </Text>
            </View>
            <ImageUse/>
        </View>  
    );
};


const styles = StyleSheet.create({
    content: {
        backgroundColor: 'green',
        margin: 5,
        width: 350,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    }


})