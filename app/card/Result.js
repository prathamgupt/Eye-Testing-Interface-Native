import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./result.style";

const PopularJobCard = ({ item, c }) => {
  const navigation = useNavigation();
  const handleCardPress = () => {
    navigation.navigate("ResultDetails", { item: item });
  };
  return (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <View style={styles.container}>
        <Text style={styles.companyName} numberOfLines={1}>
          Result {c}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
