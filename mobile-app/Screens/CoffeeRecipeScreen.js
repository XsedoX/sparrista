import * as React from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";

export function CoffeeRecipeScreen({ navigation, route }) {
  const currentUser = route.params.user;
  const currentCoffee = route.params.coffee;

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
          <View
            style={{
              height: 100,
              width: 500,
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: currentCoffee.photoUrl }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 50, textAlign: "center" }}>
                {currentCoffee.title}
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, height: 100, width: 1000 }}>
            <Text style={{ fontSize: 40, textAlign: "center" }}>
              {currentCoffee.coffeeDescription}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, textAlign: "center" }}>
              {currentCoffee.preparationDescription}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AfterCoffeeScreen", {
                  user: currentUser,
                  coffee: currentCoffee,
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
                <Text style={{ fontSize: 50, textAlign: "center" }}>
                  Kawa zrobiona!
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
