import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { TouchableOpacity } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return () => unsubscribe;
  }, []);

  const signup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("You're now registered. Please Login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login successful");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionA}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/timeo.png")}
          />
          <Text style={styles.title}>Timeo</Text>
        </View>
        <Text style={styles.subtitle}>
          Helping you stay focused and timely!
        </Text>
      </View>
      <View style={styles.sectionB}>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              style={styles.input}
            ></TextInput>
            <TextInput
              secureTextEntry
              placeholder="Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              style={styles.input}
            ></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={login} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 700,
                color: colors.darkBlue,
                paddingVertical: 10,
              }}
            >
              OR
            </Text>
            <TouchableOpacity
              onPress={signup}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },
  sectionA: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionB: {
    flex: 0.7,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#E6E6FA",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    color: "#E6E6FA",
    fontSize: 50,
    fontWeight: 500,
  },

  subtitle: {
    color: "#E6E6FA",
    paddingTop: 10,
  },

  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  button: {
    backgroundColor: "#FF6347",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: colors.white,
    // marginTop: 10,
    borderColor: "#FF6347",
    borderWidth: 2,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 700,
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#FF6347",
    fontWeight: 700,
    fontSize: 16,
  },
});
