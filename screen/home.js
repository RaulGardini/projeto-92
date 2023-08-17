import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Platform, StatusBar, TouchableOpacity } from "react-native";
import AppHeader from "../components/appheader";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicon from "react-native-vector-icons/Ionicons"
import AlarmeButton from "../components/AlarmeButton";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppHeader title={"Alarmes"} />
                <View style={styles.butonsContainers}>
                    <TouchableOpacity style={styles.buton}
                        onPress={() => this.props.navigation.navigate("ConfgApp")}>
                        <Ionicon name="settings-outline" size={RFValue(65)} style={styles.butonIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buton}
                        onPress={() => this.props.navigation.navigate("ConfgAlarme")}>
                        <Ionicon name="add-outline" size={RFValue(65)} style={styles.butonIcon} />
                    </TouchableOpacity>
                </View>
                <View style = {styles.alarmsContainer}>
                    <AlarmeButton hora={"17:00"} />
                    <AlarmeButton hora={"08:00"} />
                    <AlarmeButton hora={"22:00"} />
                    <AlarmeButton hora={"06:00"} />
                    <AlarmeButton hora={"15:00"} />
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
    butonsContainers: {
        //backgroundColor: "pink",
        flex: 0.12,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderBottomColor: "Black",
        borderBottomWidth: 7,
    },
    buton: {
        //backgroundColor:"green",
        justifyContent: "center",
        alignItems: "center",
        width: RFValue(70),
        height: RFValue(70)
    },
    butonIcon: {
        width: "100%",
        height: "100%"
    },
    alarmsContainer: {
        flex:0.7
    }
})