import React from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App = () => (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/Background.png')} resizeMode={"stretch"} style={styles.image}>
            <View style={{flex: 0.3}} />
            <View style={styles.flexBox}>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
            </View>
            <View style={styles.flexBox}>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
            </View>
            <View style={styles.flexBox}>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
                <View style={{flexDirection: 'column'}}><View style={styles.square}/><View style={styles.rectangle}/></View>
            </View>
            <View style={{flex: 2}} />
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: "black",
        textAlign: "center",
        fontSize: 42,
        lineHeight: 84,
    },
    flexBox:
        {
            flex: 1, justifyContent: 'center',flexDirection: 'row', padding:40, marginRight:40, marginLeft: 40, marginBottom:20
        },
    imageTriangle:
        {
            width: screenWidth*0.118,
            height: screenHeight*0.20,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center'
        },
    avatars:
        {
            width: screenWidth*0.1*0.89,
            height: screenHeight*0.17 * 0.9,
            marginBottom: 10
        },
    square:
        {
            height: 135,
            width: 155,
            backgroundColor: '#9f6f4c',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            marginLeft: 15,
            marginRight: 20,
        },
    rectangle:
        {
            height: 35,
            width: 155,
            backgroundColor: '#212121',
            marginLeft: 15,
            marginRight: 20,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
        }


});

export default App;