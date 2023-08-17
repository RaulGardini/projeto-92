import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Platform, StatusBar, Switch } from "react-native";
import AppHeader from "../components/appheader";

export default class ConfgApp extends React.Component {

    constructor() {
        super()
        this.state = { isEnabled: false }
    }

    toggleSwitch() {
        if (this.state.isEnabled) {
            this.setState({ isEnabled: false });
        } else {
            this.setState({ isEnabled: true });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppHeader title={"Configuraçoes"} />
                <View style={styles.linha}>
                </View>
                <View style = {styles.switchContainer}>
                    <Text style = {styles.switchText}>Escuro</Text>
                    <Switch
                        style={{
                            transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                        }}
                        trackColor={{ false: "#3e3e3", true: "#0219fa" }}
                        thumbColor={this.state.isEnabled ? "#767577" : "#000"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.toggleSwitch()}
                        value={this.state.isEnabled}
                    />
                    <Text style = {styles.switchText}>Claro</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    linha: {
        flex: 0.01,
        flexDirection: "row",
        width: "100%",
        borderBottomColor: "Black",
        borderBottomWidth: 7,
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 200,
        margin: 50
    },
    switchText: {
        fontSize: 25
    }
})
