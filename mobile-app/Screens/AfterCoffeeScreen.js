import * as React from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";

export function AfterCoffeeScreen({ navigation, route }) {
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
        <View style={{ flex: 0.5 }} />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
              }}
            >
              Jak się czujesz po wypiciu kawy?
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("UserMainInterface", { user: currentUser })
              }
            >
              <Image
                style={{ height: 300, width: 300 }}
                source={require("../assets/sadFace.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("UserMainInterface", { user: currentUser })
              }
            >
              <Image
                style={{ height: 300, width: 300 }}
                source={require("../assets/neutralFace.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("UserMainInterface", { user: currentUser })
              }
            >
              <Image
                style={{ height: 300, width: 300 }}
                source={require("../assets/happyFace.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.5 }} />
      </ImageBackground>
    </View>
  );
}
