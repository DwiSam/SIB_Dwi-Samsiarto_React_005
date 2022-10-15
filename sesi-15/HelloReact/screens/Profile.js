import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MarginTop = () => <View style={{ marginTop: 10 }} />;
const Profile = ({ route }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Welcome to page Profile</Text>
            </View>
            <MarginTop />
            <Image
                source={{
                    uri: "https://img.icons8.com/color/96/000000/groucho-marx.png",
                }}
                style={{ width: 400, height: 400 }}
            />
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>Dwi Samsiarto</Text>
                <Text style={{ fontSize: 15 }}>RCTN-KS05-023</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
    },
});

export default Profile;