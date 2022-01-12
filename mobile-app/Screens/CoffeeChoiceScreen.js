import * as React from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";

export function CoffeeChoiceScreen({ navigation, route }) {
  const currentUser = route.params.user;

  const coff1 = {
    id: 1,
    title: "Latte macchiato",
    coffeeDescription:
      "Napój mleczny powstały przez powolne (delikatnie, po ściance) dolanie kawy espresso do gorącego mleka, pokrytego warstwą mlecznej piany",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Latte_macchiato_with_coffee_beans.jpg/220px-Latte_macchiato_with_coffee_beans.jpg",
    preparationTime: 0,
    popularity: 0,
  };

  const coff2 = {
    id: 2,
    title: "Espresso",
    coffeeDescription:
      "Powstaje przez przez przepuszczenie 25-35 ml gorącej (90,5-96 °C) wody pod ciśnieniem 8,5-9,5 bara przez bardzo drobno zmielone i ubite ziarna kawowca",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/220px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
    preparationTime: 0,
    popularity: 0,
  };

  const coff3 = {
    id: 3,
    title: "Flat white",
    coffeeDescription:
      "W odróżnieniu od caffè latte jest zazwyczaj podawane w kubku lub dużej filiżance i ma na wierzchu mniej piany z mleka (która na caffè latte tworzy wyraźną osobną warstwę)",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flat_White%2C_New_Zealand.JPG/220px-Flat_White%2C_New_Zealand.JPG",
    preparationTime: 0,
    popularity: 0,
  };

  const coff4 = {
    id: 4,
    title: "Cappuccino",
    coffeeDescription:
      "Włoski napój kawowy z dodatkiem spienionego mleka (rzadziej z bitą śmietaną) i szczyptą sypkiej czekolady lub kakao dla ozdoby",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cappuccino_as_being_served_at_Ebel_Caf%C3%A9_Prague.jpg/220px-Cappuccino_as_being_served_at_Ebel_Caf%C3%A9_Prague.jpg",
    preparationTime: 0,
    popularity: 0,
  };

  const coff5 = {
    id: 5,
    title: "Caffè latte",
    coffeeDescription:
      "Wbrew nazwie, latte art (sztuka wykonywania rysunków i wzorów na powierzchni kawy), na tradycyjnej latte nie wykonuje się ozdób na piance",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Glass_of_Coffee_Latte_with_Pastry_%281%29.jpg/220px-Glass_of_Coffee_Latte_with_Pastry_%281%29.jpg",
    preparationTime: 0,
    popularity: 0,
  };

  if (typeof currentUser == "undefined") return <AppLoading />;
  return (
    <View>
      <ImageBackground
        source={require("../assets/Background.png")}
        resizeMode={"stretch"}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CoffeeRecipeScreen", {
                  user: currentUser,
                  coffee: coff1,
                })
              }
            >
              <ImageBackground
                source={require("../assets/Rectangle.png")}
                resizeMode={"stretch"}
                style={{
                  width: 500,
                  height: 100,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 100, width: 100 }}
                      source={{ uri: coff1.photoUrl }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 50, textAlign: "center" }}>
                      {coff1.title}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CoffeeRecipeScreen", {
                  user: currentUser,
                  coffee: coff2,
                })
              }
            >
              <ImageBackground
                source={require("../assets/Rectangle.png")}
                resizeMode={"stretch"}
                style={{
                  width: 500,
                  height: 100,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 100, width: 100 }}
                      source={{ uri: coff2.photoUrl }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 50, textAlign: "center" }}>
                      {coff2.title}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CoffeeRecipeScreen", {
                  user: currentUser,
                  coffee: coff3,
                })
              }
            >
              <ImageBackground
                source={require("../assets/Rectangle.png")}
                resizeMode={"stretch"}
                style={{
                  width: 500,
                  height: 100,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 100, width: 100 }}
                      source={{ uri: coff3.photoUrl }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 50, textAlign: "center" }}>
                      {coff3.title}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CoffeeRecipeScreen", {
                  user: currentUser,
                  coffee: coff4,
                })
              }
            >
              <ImageBackground
                source={require("../assets/Rectangle.png")}
                resizeMode={"stretch"}
                style={{
                  width: 500,
                  height: 100,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 100, width: 100 }}
                      source={{ uri: coff4.photoUrl }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 50, textAlign: "center" }}>
                      {coff4.title}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CoffeeRecipeScreen", {
                  user: currentUser,
                  coffee: coff5,
                })
              }
            >
              <ImageBackground
                source={require("../assets/Rectangle.png")}
                resizeMode={"stretch"}
                style={{
                  width: 500,
                  height: 100,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Image
                      style={{ height: 100, width: 100 }}
                      source={{ uri: coff5.photoUrl }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 50, textAlign: "center" }}>
                      {coff5.title}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
