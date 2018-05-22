import React from "react";
import { Modal, View, Image, Text, StyleSheet, Button } from "react-native";

const placeDetail = props => {
  let place = props.selectedPlace;
  let modalContent = null;

  if (place) {
    modalContent = (
      <View>
        <Image
          resizeMode="contain"
          source={place.image}
          style={styles.imageView}
        />
        <Text style={styles.textView}>{place.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={place != null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button color="red" title="delete" onPress={props.onPlaceDeleted} />
          <Button title="close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
  },
  textView: {
    alignItems: "center",
    fontSize: 28
  },
  imageView: {
    width: 300,
    height: 300
  }
});

export default placeDetail;
