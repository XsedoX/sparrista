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
            flex: 1, justifyContent: 'center',flexDirection: 'row', padding:40, marginRight:40, marginLeft: 40, marginBottom:20
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
            fontSize: 24
        },
    polecaneSquare:
        {
            height:190,
            width:225,
            backgroundColor:'#9F6F4C',
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
        }


});