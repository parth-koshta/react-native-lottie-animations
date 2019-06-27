import React, { Component } from "react";
import { View, Text, Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";
export class HomeScreen extends Component {
  
  componentDidMount() {
    this.animation.play();
  }
  render() {
    return (
      <View>
        <LottieView
          style={{ height: 200, width: 200 }}
          source={require("./loader.json")}
          autoPlay
          loop
        />

        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 200,
            height: 200
          }}
          loop={true}
          source={require("./data1.json")}
        />

        
      </View>
    );
  }
}

export default HomeScreen;
