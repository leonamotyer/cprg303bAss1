import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      {/* Three Dots Menu */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Album Cover */}
      <ImageBackground
        source={{
          uri: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7d/bd/e9/7dbde97e-b97d-8cc3-0203-218b687408a9/196872555059.jpg/800x800cc.jpg",
        }}
        style={styles.cover}
      />

      {/* Song Info */}
      <View style={styles.info}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sticky</Text>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={20} color="white" />
          </TouchableOpacity>
        </View>
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
          <Ionicons name="shuffle" size={35} color="#32CD32" /> {/* green button */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <AntDesign name="stepbackward" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
          <AntDesign name={isPlaying ? "pausecircle" : "play"} size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <AntDesign name="stepforward" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Feather name="repeat" size={24} color="white" />
        </TouchableOpacity>

        {/* Sleep Timer */}
        <TouchableOpacity style={styles.sleepTimer}>
          <Feather name="clock" size={24} color="white" />
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
  header: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
  cover: {
    width: 340,
    height: 340,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  info: {
    alignItems: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
  artist: {
    fontSize: 14,
    color: "#d1d3cf",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 340,
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
    width: "10%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 3,
  },
  time: {
    fontSize: 12,
    color: "#d1d3cf",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 340,
    marginBottom: 20,
  },
  controlButton: {
    marginHorizontal: 10,
  },
  sleepTimer: {
    marginLeft: 10,
  },
});
