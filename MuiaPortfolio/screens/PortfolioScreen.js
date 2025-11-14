import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PortfolioScreen({ navigation }) {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#6366f1" />
        </View>
        <Text style={styles.name}>Lawrence Muia Matheka</Text>
        <Text style={styles.title}>Full Stack Developer</Text>
        <Text style={styles.location}>Nairobi, Kenya</Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          Passionate software developer with 3+ years of experience in frontend development 
          and 1+ year in full stack development. Currently working at Javi Research Hub 
          as a Full Stack Developer. Love creating beautiful and functional applications.
        </Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        
        <View style={styles.experienceItem}>
          <View style={styles.experienceHeader}>
            <Text style={styles.jobTitle}>Full Stack Developer</Text>
            <Text style={styles.duration}>6 months</Text>
          </View>
          <Text style={styles.company}>Javi Research Hub</Text>
          <Text style={styles.jobDescription}>
            Developing web and mobile applications using modern technologies including 
            React, React Native, Node.js, and MongoDB.
          </Text>
        </View>

        <View style={styles.experienceItem}>
          <View style={styles.experienceHeader}>
            <Text style={styles.jobTitle}>Full Stack Developer</Text>
            <Text style={styles.duration}>1 year</Text>
          </View>
          <Text style={styles.company}>Freelance & Various Projects</Text>
          <Text style={styles.jobDescription}>
            Worked on various web and mobile applications for clients, handling both 
            frontend and backend development.
          </Text>
        </View>

        <View style={styles.experienceItem}>

          <View style={styles.experienceHeader}>
            <Text style={styles.jobTitle}>Frontend Developer</Text>
            <Text style={styles.duration}>3 years</Text>
          </View>
          
          <Text style={styles.company}>Various Companies & Freelance</Text>
          <Text style={styles.jobDescription}>
            Specialized in creating responsive and user-friendly interfaces using 
            React, JavaScript, and modern CSS frameworks.
          </Text>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillChip}>React Native</View>
          <View style={styles.skillChip}>React.js</View>
          <View style={styles.skillChip}>JavaScript</View>
          <View style={styles.skillChip}>Node.js</View>
          <View style={styles.skillChip}>MongoDB</View>
          <View style={styles.skillChip}>Express.js</View>
          <View style={styles.skillChip}>HTML/CSS</View>
          <View style={styles.skillChip}>Firebase</View>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get In Touch</Text>
        <View style={styles.contactButtons}>
          <TouchableOpacity style={styles.contactButton} onPress={() => openLink('mailto:lawrence@example.com')}>
            <Ionicons name="mail" size={20} color="#6366f1" />
            <Text style={styles.contactButtonText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactButton} onPress={() => openLink('https://linkedin.com')}>
            <Ionicons name="logo-linkedin" size={20} color="#6366f1" />
            <Text style={styles.contactButtonText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactButton} onPress={() => openLink('https://github.com')}>
            <Ionicons name="logo-github" size={20} color="#6366f1" />
            <Text style={styles.contactButtonText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.logoutButtonText}>Back to Welcome</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    color: '#6366f1',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: '#94a3b8',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    color: '#94a3b8',
    lineHeight: 24,
  },
  experienceItem: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f8fafc',
    flex: 1,
  },
  duration: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
  company: {
    fontSize: 16,
    color: '#6366f1',
    marginBottom: 8,
  },
  jobDescription: {
    fontSize: 14,
    color: '#94a3b8',
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  skillChipText: {
    color: '#f8fafc',
    fontSize: 14,
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contactButton: {
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    minWidth: 80,
  },
  contactButtonText: {
    color: '#f8fafc',
    marginTop: 8,
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#dc2626',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});