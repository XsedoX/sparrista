import * as React from 'react';
import {ImageBackground, View, TouchableOpacity, Text, Image} from "react-native";
import {styles} from '../Styles/Styles.js'

export function UserMainInterface({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Background.png')} resizeMode={"stretch"} style={styles.image}>
                <View style={{flex:0.9}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:40}}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                            <Image style={{height:52, width:90, marginTop: 20}}source={require('../assets/BackArrow.png')}/>
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
                        <ImageBackground source={require('../assets/NewCoffee.png')} style={styles.interfaceIcons}>
                            <Text style={styles.interfaceIconsText}>NOWA KAWA</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={require('../assets/Ranking.png')} style={styles.interfaceIcons}>
                            <Text style={styles.interfaceIconsText}>RANKING</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={require('../assets/Friends.png')} style={styles.interfaceIcons}>
                            <Text style={styles.interfaceIconsText}>ZNAJOMI</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={require('../assets/Statistics.png')} style={{height:195, width:223, resizeMode:'stretch',marginLeft: 28, marginRight: 28, alignItems: 'center' }}>
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
                        <View style={{height: 260, width: 220, backgroundColor: '#9F6F4C', borderTopLeftRadius: 20, borderTopRightRadius: 20}}/>
                        <View style={{height:40, width:220, backgroundColor:'#212121', borderBottomLeftRadius:20, borderBottomRightRadius:20}}/>
                    </View>
                </View>
                <View style={{flex:1}}/>
            </ImageBackground>
        </View>
    );
}