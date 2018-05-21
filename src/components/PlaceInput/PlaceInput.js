import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = text => {
    // setState forces re-rendering all components
    this.setState({
      placeName: text
    });
  };

  submitPressed = () => {
    let place = this.state.placeName;
    if (place) {
      this.props.onPlaceAdded(this.state.placeName);
    }
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.placeButton}
          onPress={this.submitPressed}
          title="Add"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    alignItems: "center",
    width: "100%"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "70%"
  }
});

export default PlaceInput;
