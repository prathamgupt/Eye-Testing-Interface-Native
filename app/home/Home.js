import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants";
import { router, useRouter } from "expo-router";
import styles from "./home.style";
import axios from "axios";
import Result from "../card/Result";

const HomeContent = () => {
  const [time, setTime] = useState();
  const [bText, changeBText] = useState("Log In");
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();
  const handlePress = () => {
    if (bText == "Log In") {
      navigation.navigate("Login", {
        setUser: setUser,
        setLoggedIn: setLoggedIn,
      });
    } else if (bText == "Sign Out") {
      changeBText("Log In");
      setUser("");
      setLoggedIn(false);
    }
  };

  const getTime = () => {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setTime("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTime("Good afternoon");
    } else {
      setTime("Good evening");
    }
  };

  const fetchData = async () => {
    if (isLoggedIn) {
      try {
        const response = await axios.get(
          "https://eye-testing-interface.onrender.com/testres"
        );
        const fetchedData = response.data;
        const userFilteredData = fetchedData.filter(
          (item) => item.username === user
        );
        setData(userFilteredData);
        console.log("done");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    getTime();
    fetchData();
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      changeBText("Sign Out");
    } else {
      changeBText("Log In");
    }
  }, [isLoggedIn]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={handlePress} style={styles.headerBtn}>
          <Text>{bText}</Text>
        </TouchableOpacity>
        {bText == "Log In" && (
          <View style={styles.container}>
            <Text style={styles.greet}>
              {time}! Welcome to Our Mobile Application for Eye Testing
              Interface where you can view your past taken results.
            </Text>
            <Text style={styles.started}>Sign In to get started</Text>
          </View>
        )}
        {bText == "Sign Out" && (
          <View style={styles.container}>
            <Text style={styles.greet}>
              {time} {user}!
            </Text>
            <Text style={styles.started}>
              You can view your previous taken eye test results below
            </Text>
            <FlatList
              data={data}
              renderItem={({ item , index}) => (
                <Result
                  item={item}
                  c={index+1}
                />
              )}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeContent;
