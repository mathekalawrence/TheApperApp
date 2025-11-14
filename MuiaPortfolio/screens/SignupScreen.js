import React from "react";
import useState from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen({navigation}){
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const handleSignup=()=>{
        if (!name || !email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        // No authentication - directly go to portfolio
      navigation.navigate('Portfolio');
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#6366f1" />
            </TouchableOpacity>

            <View style={styles.header}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Join us today!</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={20} color="#64748b" style={styles.inputIcon} />

                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='#64748b'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#64748b" style={styles.inputIcon} />

                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#64748b"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.SignupButton} onPress={handleSignup}>
                    <Text style={styles.SignupButtonText}>Create Account</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.loginLink} onPress={()=>navigation.navigate('Login')}>
            
                    <Text style={styles.loginText}>
                        Already have an account? <Text style={styles.loginLinkText}>Login</Text>

                    </Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    padding: 16,
    color: '#f8fafc',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#94a3b8',
    fontSize: 16,
  },
  loginLinkText: {
    color: '#6366f1',
    fontWeight: '600',
  },
});