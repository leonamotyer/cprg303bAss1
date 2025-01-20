import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient'; // Importing the LinearGradient component

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    
    <LinearGradient
      colors={['#969685', '#7a7a6d', '#56564d']} // Gradient colors
      style={styles.linearGradient}//spotifys multiple hues
    >
      <View style={styles.container}>
        {/* Album Cover */}
        <ImageBackground
          source={require('./res/Sticky.jpg')} //relative path
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
            <Ionicons name="play-skip-back-outline" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
            <Ionicons
              name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
              size={40}
              color="#666"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="play-skip-forward-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // Apply to the LinearGradient component
  linearGradient: {
    flex: 1, // Ensure it takes full screen height
    justifyContent: "center",
    alignItems: "center",
  },
  // Apply container styles to inner content
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    width: 350,  // Adjust size as necessary
    height: 350, // Adjust size as necessary
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
    marginHorizontal: 15,
  },
});
