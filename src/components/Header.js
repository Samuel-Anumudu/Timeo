import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Header = () => {
  const navigation = useNavigation();
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
        alert("Logout successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image style={styles.logo} source={require("../../assets/timeo.png")} />
        <TouchableOpacity onPress={logout} style={styles.button}>
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: 500,
              color: colors.darkBlue,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 12,
    paddingTop: 38,
  },
  logo: {
    width: 50,
    height: 50,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#E6E6FA",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
