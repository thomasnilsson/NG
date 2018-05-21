import React from "react";
import { Moda, View, Image, Text, StyleSheet, Button } from "react-native";

const placeDetail = props => (
  <Modal>
      <View>
          <Image source={props.placeImage}/>
          <Text>{props.placeName}</Text>
          <View>
              <Button />
              <Button />
          </View>
      </View>
  </Modal>
);
const styles = StyleSheet.create({
});

export default placeDetail;
