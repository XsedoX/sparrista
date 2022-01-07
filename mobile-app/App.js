import * as React from 'react';
import {Dimensions, ImageBackground, StyleSheet, View, TouchableOpacity, Text, Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/Background.png')} resizeMode={"stretch"} style={styles.image}>
                <View style={{flex: 0.3}} />
                <View style={styles.flexBox}>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                </View>
                <View style={styles.flexBox}>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                </View>
                <View style={styles.flexBox}>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('UserMainInterface')}><View style={styles.square} /><View style={styles.rectangle}/></TouchableOpacity>
                </View>
                <View style={{flex: 2}} />
            </ImageBackground>
        </View>
    );
}

function UserMainInterface({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/Background.png')} resizeMode={"stretch"} style={styles.image}>
                <View style={{flex:0.9}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:40}}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={{height:52, width:90, marginTop: 20}}source={require('./assets/BackArrow.png')}/>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <View style={{height: 80,width: 90,backgroundColor: '#9f6f4c', borderTopLeftRadius: 5, borderTopRightRadius: 5,}}/>
                            <View style={{height: 5,width: 90,backgroundColor: '#212121', borderBottomLeftRadius: 5, borderBottomRightRadius: 5,}}/>
                            <Text style={{fontWeight: "bold", fontSize: 19}}>NAME</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:1.5, justifyContent: 'center',flexDirection: 'row', padding:25}}>
                    <TouchableOpacity>
                    <ImageBackground source={require('./assets/NewCoffee.png')} style={styles.interfaceIcons}>
                        <Text style={styles.interfaceIconsText}>NOWA KAWA</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={require('./assets/Ranking.png')} style={styles.interfaceIcons}>
                            <Text style={styles.interfaceIconsText}>RANKING</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={require('./assets/Friends.png')} style={styles.interfaceIcons}>
                            <Text style={styles.interfaceIconsText}>ZNAJOMI</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <ImageBackground source={require('./assets/Statistics.png')} style={{height:195, width:223, resizeMode:'stretch',marginLeft: 28, marginRight: 28, alignItems: 'center' }}>
                        <Text style={styles.interfaceIconsText}>STATYSTYKI</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{flex:2.1, justifyContent: 'space-between',flexDirection: 'row', marginLeft:140, marginRight:140 }}>
                    <ImageBackground style={{height:300, width: 720, backgroundColor:'#363636', borderRadius: 20, alignItems: 'center'}}>
                        <Text style={{color:'white', fontSize:50}}>POLECANE</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column'}}>
                        <View style={styles.polecaneSquare}/>
                                <View style={styles.polecaneRectangle}>
                                    <Text style={styles.polecaneRectangleText}>DLA CIEBIE</Text></View>
                        </View>
                            <View style={{flexDirection: 'column'}}>
                                <View style={styles.polecaneSquare}/>
                                <View style={styles.polecaneRectangle}>
                                    <Text style={styles.polecaneRectangleText}>NAJCZĘSCIEJ PITE</Text></View>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <View style={styles.polecaneSquare}/>
                                <View style={styles.polecaneRectangle}>
                                    <Text style={styles.polecaneRectangleText}>NAJLEPIEJ OCENIANE</Text></View>
                            </View>
                    </View>
                    </ImageBackground>
                    <View style={{flexDirection: 'column'}}>
                    <View style={{height:260, width:220, backgroundColor:'#9F6F4C', borderTopLeftRadius:20, borderTopRightRadius:20}}></View>
                    <View style={{height:40, width:220, backgroundColor:'#212121', borderBottomLeftRadius:20, borderBottomRightRadius:20}}></View>
                    </View>
                </View>
                <View style={{flex:1}}/>
            </ImageBackground>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="UserMainInterface" component={UserMainInterface} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

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
            color:'white',
            fontSize: 20,
            bottom: 2
        }


});

export default App;