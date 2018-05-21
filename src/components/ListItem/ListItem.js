import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";

const listItem = props => (
  <TouchableHighlight onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="contain" style={styles.placeImage} source={props.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableHighlight>
);
const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 2,
    backgroundColor: "#eee",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30
  }
});

export default listItem;
