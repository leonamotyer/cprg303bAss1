import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Importing the LinearGradient component

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <LinearGradient
      colors={['#969685', '#7a7a6d', '#56564d']} // Gradient colors
      style={styles.linearGradient} //spotifys multiple hues
    >
      <View style={styles.container}>
        
        {/* Header Row */} 
        <View style={styles.headerRow}>
          <TouchableOpacity>
            <AntDesign name="down" size={24} color="#ffffff" />  
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Everyday tunes</Text>
          
          <TouchableOpacity>
            <AntDesign name="ellipsis1" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Album Cover */}
        <ImageBackground
          source={require('./res/Sticky.jpg')} //relative path
          style={styles.cover}
        />

        {/* Song Info */}
        <View style={styles.info}>
          <Text style={styles.title}>Sticky (feat. GloRilla, Sexyy Red & Lil Wayne)</Text>
          <Text style={styles.artist}>Tyler, The Creator, GloRilla, Sexyy Red & Lil Wayne</Text>
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
            <AntDesign name="stepbackward" size={40} color="#d0d0cd" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
          <Ionicons
            name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
            size={60}
            color="#ffffff"
          />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.controlButton}>
            <AntDesign name="stepforward" size={40} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
 //full background colour 
  linearGradient: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
  },


  //Styles for header 
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '103%',
    paddingHorizontal: 20,
    paddingTop: 80,
    position: 'absolute',
    top: 0,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    
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
    marginBottom: 10,
    
  },
  info: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    
  },
  artist: {
    fontSize: 14,
    color: "#d0d0cd",
    
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 475,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: "#7a7a6d",
    borderRadius: 3,
    marginHorizontal: 10,
    position: "relative",
  },
  progressBarFill: {
    width: "10%", // Change progress percentage here
    height: "100%",
    backgroundColor: "#d0d0cd",
    borderRadius: 3,
  },
  time: {
    fontSize: 12,
    color: "#d0d0cd"
    
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
