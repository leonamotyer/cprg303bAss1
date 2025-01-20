import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      {/* Album Cover */}
      <ImageBackground
        source={{ uri: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7d/bd/e9/7dbde97e-b97d-8cc3-0203-218b687408a9/196872555059.jpg/800x800cc.jpg" }} // Replace with your image URL
        style={styles.cover}
      />
      
      {/* Song Info */}
      <View style={styles.info}>
        <Text style={styles.title}>Sticky</Text>
        <Text style={styles.artist}>Tyler the Creator</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <Text style={styles.time}>0:02</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressBarFill}></View>
        </View>
        <Text style={styles.time}>4:13</Text>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
        <AntDesign name="stepbackward" size={40} color="ffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
          <AntDesign
            name={isPlaying ? "pausecircle" : "play"}
            size={50}
            color="#ffff"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
        <AntDesign name="stepforward" size={40} color="ffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#949486",
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    width: 375,
    height: 500,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  info: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  artist: {
    fontSize: 14,
    color: "#666",
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 375,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: "#d1d3cf",
    borderRadius: 3,
    marginHorizontal: 10,
    position: "relative",
  },
  progressBarFill: {
    width: "10%", // Change progress percentage here
    height: "100%",
    backgroundColor: "#666",
    borderRadius: 3,
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  controlButton: {
    marginHorizontal: 20,
  },
});
