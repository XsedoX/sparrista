import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
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
            flex: 1, justifyContent: 'center',flexDirection: 'row', padding:15, marginRight: 40, marginLeft: 40
        },
    square:
        {
            flex:20,
            backgroundColor: '#9f6f4c',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            marginLeft: 15,
            marginRight: 20,
        },
    rectangle:
        {
            flex:5,
            backgroundColor: '#212121',
            marginLeft: 15,
            marginRight: 20,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,

        },
    interfaceIcons:
        {
            width: 195,
            height: 195,
            resizeMode: "stretch",
            marginLeft: 33,
            marginRight: 33,
            alignItems: 'center'
        },
    interfaceIconsText:
        {
            fontFamily: 'Karla_400Regular',
            position:'absolute',
            bottom: 0.5,
            color:'white',
            fontWeight: "bold",
            fontSize: 24,
            textAlign: 'center',
            width: 160,
            textTransform: 'uppercase'
        },
    polecaneSquare:
        {
            height:220,
            width:200,
            resizeMode: "contain",
            backgroundColor: "#363636",
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            marginRight:5,
            marginLeft:5
        },
    polecaneRectangle:
        {
            height:30,
            width:225,
            backgroundColor:'#212121',
            borderBottomLeftRadius:5,
            borderBottomRightRadius:5,
            marginRight:5,
            marginLeft:5,
            alignItems: 'center'
        },
    polecaneRectangleText:
        {
            fontFamily: 'Karla_400Regular',
            color:'white',
            fontSize: 20,
            bottom: 2
        },
    userBox:
        {
            flexDirection: 'column',
            flex: 1
        }
});