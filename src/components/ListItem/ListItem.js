import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const listItem = props => (
  <TouchableHighlight onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableHighlight>
);
const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    borderWidth: 1
  }
});

export default listItem;
