import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { router } from 'expo-router';

export default function WelcomeScreen({ navigation }){
    return(
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />

            {/*The Header Section */}
            <View style={styles.header}>
                <Ionicons name="code-slash" size={80} color="#6366f1" />
                <Text style={styles.title}>Portfolio</Text>
                <Text style={styles.subtitle}>Welcome to Muia Portfolio</Text>

            </View>

             {/* Main Content */}
             <View style={styles.content}>
             <Text style={styles.welcomeText}>Hello! I'm Lawrence Muia Matheka</Text>
             <Text style={styles.description}>Frontend & Full Stack Developer with passion for creating amazing digital experiences</Text>
             </View>

             {/* Buttons */}
             <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={[styles.button, styles.primaryButton]}
                onPress={()=>navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.secondaryButton]}
                    onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.skipButton}
                    onPress={() => navigation.navigate('Portfolio')}
                    >
                        <Text style={styles.skipText}>Skip to Portfolio</Text>
                </TouchableOpacity>

             </View>

        </View>
    );
}


const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0f172a',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 40,
    },

    title: {
        fontSize:42,
        fontWeight: 'bold',
        color: '#f8fafc',
        marginTop: 10,
    },
    subtitle:{
        fontSize: 18,
        color: '#94a3b8',
        marginTop: 5,
    },

    content: {
        alignItems: 'center',
        marginBottom: 60,
    },
    
    welcomeText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#f8fafc',
        textAlign: 'center',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        color: '#94a3b8',
        textAlign: 'center',
        lineHeight: 24,
    },

  buttonContainer: {
    width: '100%',
   },

   button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryButton: {
    backgroundColor: '#6366f1',
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6366f1',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  secondaryButtonText: {
    color: '#6366f1',
  },

  skipButton: {
    alignItems: 'center',
    marginTop: 20,
  },

  skipText: {
    color: '#94a3b8',
    fontSize: 16,
  },

});