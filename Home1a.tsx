import React from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView, Text, TouchableOpacity, useColorScheme, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Home1a = (dsas) => {
    console.log(dsas, "dsas");
    return (
        <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#D1F4F6', '#D1F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 40

            }}
        >
            <Image source={require("./assets/hinh-tron.png")} style={{ backgroundColor: "red" }}></Image>

            <Text style={{
                fontSize: 40,
                textTransform: "uppercase",
                textAlign: "center",
                marginVertical: "20%"

            }}> grow your bussiness</Text>
            <Text style={{
                fontSize: 16,
                textAlign: "center",

            }}> We will help you to grow your business using
                online server</Text>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // paddingVertical: 30,
                marginVertical: "10%",
                width: '100%',
                // width: "auto"

            }}>
                <TouchableOpacity

                    style={{
                        backgroundColor: "#E3C000"
                    }}>
                    <Text style={{
                        textTransform: "uppercase",
                        padding: 10,
                        paddingHorizontal: 30,
                        fontWeight: "bold"
                    }}>login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dsas.navigation.navigate("1_asdasd", {
                            Nhung_Khung: "asdadasd"
                        })
                    }}
                    style={{
                        backgroundColor: "#E3C000"
                    }}>
                    <Text style={{
                        textTransform: "uppercase",
                        padding: 10,
                        paddingHorizontal: 30,
                        fontWeight: "bold"
                    }}>Sign up</Text>
                </TouchableOpacity>

            </View>
            <Text style={{
                textTransform: "uppercase",
                padding: 10,
                paddingHorizontal: 30,
                fontWeight: "bold"
            }}>how we work?</Text>
        </LinearGradient>
    )
}

export default Home1a