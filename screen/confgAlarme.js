import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Platform, StatusBar, TouchableOpacity } from "react-native";
import AppHeader from "../components/appheader";
import { TextInput } from "react-native-gesture-handler";

export default class ConfgAlarme extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppHeader title={"Horário do alarme"} />
                <View style={styles.linha}></View>
                <View style={styles.linha2}>
                <TouchableOpacity style={styles.button}>
                    <Text>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>T</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Q</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Q</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>D</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.Nomedoalarme}>
                    <TextInput style={styles.Nomedoalarme2}>Nome do alarme</TextInput>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "ceter"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    linha: {
        flex: 0.10,
        flexDirection: "row",
        width: "100%",
        borderBottomColor: "Black",
        borderBottomWidth: 7,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 2,
        width: 51.3,
        padding: 9,
        borderRadius: 25,
        marginTop:130,
        alignSelf: "center",
    },
    linha2: {
        flex: 0.25,
        flexDirection: "row",
        width: "100%",
        borderBottomColor: "Black",
        borderBottomWidth: 7
    },
    Nomedoalarme: {
        alignItems: "center",
        

    },
    nomedoalarme2: {
        fontSize: 45,
    }
})