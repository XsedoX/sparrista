import * as React from "react";
import {
    ImageBackground,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import axios from "axios";
import {styles} from "../Styles/Styles.js";
import {useEffect, useState} from "react";
import AppLoading from "expo-app-loading";

export function HomeScreen({navigation}) {
    const [employees, setEmployees] = useState();
    const [visitedEmployees, setVisitedEmployees] = useState([]);
    const doUWantDatabase = false; // ustaw na false i nie potrzebujesz bazy do dzialania apki
    const guest = {
        id: 0,
        firstName: "Guest",
        lastName: "Guest",
        nickName: "guest",
        avatarUrl:
            "../assets/guest.png",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: true,
    };

    const emp1 = {
        id: 1,
        firstName: "Bartłomiej",
        lastName: "Przybylski",
        nickName: "bap",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/404826-m-7458626e5c965c893b375a156f74af35f037b6c1caaae26ba783d5ff841cb6b7.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp2 = {
        id: 2,
        firstName: "Grzegorz",
        lastName: "Banaszak",
        nickName: "grz",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/1975-m-500f7655dcff8be7619713f9b5dae228e95a01bf2c9187ab336792cb3a854ffe.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp3 = {
        id: 3,
        firstName: "Łukasz",
        lastName: "Smaga",
        nickName: "ługa",
        avatarUrl:
            "https://wmi.amu.edu.pl/__data/assets/image/0030/166449/varieties/w300.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp4 = {
        id: 4,
        firstName: "Anna",
        lastName: "Stachowiak",
        nickName: "ania",
        avatarUrl:
            "https://wmi.amu.edu.pl/__data/assets/image/0020/270074/varieties/w300.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp5 = {
        id: 5,
        firstName: "Paweł",
        lastName: "Mleczko",
        nickName: "paml",
        avatarUrl:
            "https://wmi.amu.edu.pl/__data/assets/image/0033/269826/varieties/w300.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp6 = {
        id: 6,
        firstName: "Izabela",
        lastName: "Bondecka-Krzykowska",
        nickName: "izab",
        avatarUrl:
            "https://wmi.amu.edu.pl/__data/assets/image/0035/268748/varieties/w300.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp7 = {
        id: 7,
        firstName: "Dariusz",
        lastName: "Bugajewski",
        nickName: "ddbb",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/1933-m-9d324939178c1e633a758165358ea19d3cb601a0655d36c6d2644d6bf63e3b7b.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp8 = {
        id: 8,
        firstName: "Krzysztof",
        lastName: "Dyczkowski",
        nickName: "chris",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/323781-m-283b4dde74a8af273b23900255d26ef3ecb022f617b33ccbee12c989ea29b2cd.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp9 = {
        id: 9,
        firstName: "Marek",
        lastName: "Gałązka",
        nickName: "galazka",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/34305-m-26841db35d1164311d537d4c4f64d7844ff002c760b7681ecd39685cf150ada3.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp10 = {
        id: 10,
        firstName: "Tomasz",
        lastName: "Górecki",
        nickName: "tomasz",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/6079-m-f314579fe0b53344ab3185b40619ea706a8c3d8eb5b473941162a45cd7bda40d.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp11 = {
        id: 11,
        firstName: "Paweł",
        lastName: "Skórzewski",
        nickName: "pawel",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/304753-m-8b8c83015976f083e67a0eb0c88e1f080bf6041e250349b8d5ea3efe0f21ecc8.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp12 = {
        id: 12,
        firstName: "Marcin",
        lastName: "Witkowski",
        nickName: "mw",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/32990-m-7c2d105a27d2fd3f742377743d1e746f1710b0a51cb818cf53cadaa4ca7dec53.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp13 = {
        id: 13,
        firstName: "Andrzej",
        lastName: "Wójtowicz",
        nickName: "andre",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/338581-m-58e4d5b030ae81134672e5d11986156069ac93e6b524e08039b4bbeb92ba2aaf.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp14 = {
        id: 14,
        firstName: "Sylwia",
        lastName: "Antoniuk",
        nickName: "sylwia",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/408950-f-20ccb7739650bfd89def4572b83767ba1a78b17f72d61927123b93621f34783b.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp15 = {
        id: 15,
        firstName: "Leszek",
        lastName: "Skrzypczak",
        nickName: "lechu",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/1915-m-16a9d2455ffadb6c6425f24f7fe757869fc8a187ba64cfa7c03654e54e0c7d5e.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp16 = {
        id: 16,
        firstName: "Joanna",
        lastName: "Siwek",
        nickName: "joanna",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/372083-f-ba4ff26d76ddd5bc5a274039345ae3a2a87f5c0b0966647fe2a39420c3d0fe97.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    const emp17 = {
        id: 18,
        firstName: "Rafał",
        lastName: "Jaworski",
        nickName: "jawor",
        avatarUrl:
            "https://usosapps.amu.edu.pl/res/up/200x250/34134-m-de9bf3b1e27ffc25edd183048bb1ae8a7f1d2451216626b40328866f2708fff4.jpg",
        drankCoffees: [],
        postCoffeeSurveys: [],
        isGuest: false,
    };

    useEffect(() => {
        if (doUWantDatabase) {
            axios
                .get("http://192.168.1.28:8080/api/v1/employees") //wpisz swoje wewnetrzne ip(nie moze byc localhost!)
                .then((res) => {
                    setEmployees(res.data);
                });
        } else {
            setEmployees([
                emp1,
                emp2,
                emp3,
                emp4,
                emp5,
                emp6,
                emp7,
                emp8,
                emp9,
                emp10,
                emp11,
                emp12,
                emp13,
                emp14,
                emp15,
                emp16,
                emp17
            ]);
        }
    }, []);

    const onEmployeePressed = (employee) => {
        // check if user opened his profile
        if (visitedEmployees.findIndex(visited => employee.id === visited.id) > -1) {
            // if yes, redirect to main interface
            navigation.navigate("UserMainInterface", {
                user: employee
            })
        } else {
            // if no, save him in array and redirect to before coffee form
            setVisitedEmployees([...visitedEmployees, employee]);
            navigation.navigate("BeforeCoffeeScreen", {
                user: employee
            })
        }
    }

    if (typeof employees != "undefined") {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../assets/Background.png")}
                    resizeMode={"stretch"}
                    style={styles.image}>
                    <View style={{flex: 0.3}}/>
                    <View style={styles.flexBox}>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[0])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[0]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[0]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[1])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[1]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[1]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[2])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[2]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[2]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[3])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[3]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[3]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[4])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[4]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[4]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[5])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[5]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[5]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexBox}>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[6])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[6]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[6]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[7])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[7]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[7]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[8])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[8]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[8]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[9])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[9]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[9]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[10])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[10]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[10]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[11])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[11]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[11]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexBox}>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[12])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[12]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[12]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[13])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[13]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[13]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[14])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[14]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[14]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[15])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[15]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[15]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed(employees[16])}>
                            <View style={styles.square}>
                                <Image
                                    style={styles.image}
                                    source={{uri: employees[16]["avatarUrl"]}}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {employees[16]["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBox}
                            onPress={() => onEmployeePressed({user: guest})}>
                            <View style={[styles.square, {backgroundColor: '#595959'}]}>
                                <Image
                                    style={styles.image}
                                    source={require("../assets/guest.png")}
                                />
                            </View>
                            <View style={styles.rectangle}>
                                <Text style={styles.interfaceIconsText}>
                                    {guest["nickName"]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1.3}}/>
                </ImageBackground>
            </View>
        );
    } else {
        return <AppLoading/>;
    }
}
