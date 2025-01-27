import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const renderFeatureButton = (icon, title, onPress) => (
    <TouchableOpacity style={styles.featureButton} onPress={onPress}>
      <Ionicons name={icon} size={32} color="#FF4D79" />
      <Text style={styles.featureText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Safe Her</Text>
        <Text style={styles.headerSubtitle}>Your Safety Companion</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.emergencySection}>
          <TouchableOpacity style={styles.sosButton}>
            <Ionicons name="alert-circle" size={48} color="#FFF" />
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.featuresGrid}>
          {renderFeatureButton('location', 'Live Location', () => {})}
          {renderFeatureButton('people', 'Trusted Contacts', () => {})}
          {renderFeatureButton('shield-checkmark', 'Safe Areas', () => {})}
          {renderFeatureButton('megaphone', 'Fake Call', () => {})}
          {renderFeatureButton('map', 'Safe Routes', () => {})}
          {renderFeatureButton('warning', 'Report Incident', () => {})}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#FF4D79',
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFE4E4',
    marginTop: 5,
  },
  content: {
    flex: 1,
  },
  emergencySection: {
    alignItems: 'center',
    padding: 20,
  },
  sosButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FF4D79',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sosText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  featureButton: {
    width: (width - 60) / 2,
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF4D79',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  featureText: {
    color: '#FF4D79',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});