// app/index.js - This is now the main screen
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Lawrence Muia Matheka</Text>

    <TouchableOpacity style={styles.continue} /* onPress={()=>navigation.navigate('Welcome')} 
    */
   onPress={()=>router.push('/welcome')}
    >
        <Text style={styles.continue}>Continue</Text>

        
    </TouchableOpacity>


    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginTop: 10,
  },
  continue: {
    /*
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
    */
    //backgroundColor: '#6366f1',
    //paddingHorizontal: 20,
    //paddingVertical: 5,
    //borderRadius: 12,
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
  }
});