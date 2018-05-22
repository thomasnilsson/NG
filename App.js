import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

// Custom Components
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    let place = {
      key: Math.random() + "",
      name: placeName,
      image: {
        uri: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
      }
    };
    this.setState({
      places: this.state.places.concat([place])
    });
  };

  placeDeletedHandler = () => {
    this.setState({
      places: this.state.places.filter(
        place => place !== this.state.selectedPlace
      )
    });
    this.modalClosedHandler();
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  itemSelectedHandler = key => {
    let place = this.state.places.find(p => p.key === key);

    this.setState({
      selectedPlace: place
    });
    console.log(place);
  };
  render() {
    return (
      <View style={styles.parentContainer}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onPlaceDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <Text style={styles.textBox}>Enter a place name</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.itemSelectedHandler}
        />
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
