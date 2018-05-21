import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState({
      places: this.state.places.concat([placeName])
    });
  };

  itemDeletedHandler = (id) => {
    this.setState({
      places: this.state.places.filter((p,i) => i != id)
    });
  };

  render() {
    return (
        <View style={styles.parentContainer}>
        <Text style={styles.textBox}>Enter a place name</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.itemDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 40
  },
  textBox: {
    padding: 10
  }
});
