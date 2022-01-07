import * as React from 'react';
import {ImageBackground, View, TouchableOpacity} from "react-native";

import {styles} from '../Styles/Styles.js'

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Background.png')} resizeMode={"stretch"} style={styles.image}>
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