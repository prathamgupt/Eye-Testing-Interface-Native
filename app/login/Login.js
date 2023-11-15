import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios"; 
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants";
import styles from "./login.style";

const Login = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const [show, setShow] = useState(false);
  const setUser = route.params?.setUser || (() => {});
  const setLog = route.params?.setLog || (() => {});
  const setLoggedIn = route.params?.setLoggedIn || (() => {});

  const handleSubmit = async () => {
    const userCredentials = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://eye-testing-interface.onrender.com/users/login",
        userCredentials
      );

      setShow(false);
      setUser(username);
      setLog(true);
      setLoggedIn(true);
      navigation.navigate("Home");
      Alert.alert("Successfully Logged In");
    } catch (error) {
      setShow(true);
      console.error("Error during login:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <View style={styles.container}>
            <Text style={styles.greet}>Login</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formWrapper}>
            <TextInput
              style={styles.formInput}
              placeholder="Enter Username"
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.formWrapper}>
            <TextInput
              style={styles.formInput}
              placeholder="Enter Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
          {show && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                Wrong username or password, try again!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
