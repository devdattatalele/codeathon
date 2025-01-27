import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactsScreen() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Emergency Contact 1', phone: '+1234567890' },
    { id: '2', name: 'Emergency Contact 2', phone: '+0987654321' },
  ]);

  const renderContact = ({ item }) => (
    <View style={styles.contactCard}>
      <View style={styles.contactInfo}>
        <Ionicons name="person-circle" size={40} color="#FF4D79" />
        <View style={styles.contactDetails}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactPhone}>{item.phone}</Text>
        </View>
      </View>
      <View style={styles.contactActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="call" size={24} color="#FF4D79" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="trash" size={24} color="#FF4D79" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trusted Contacts</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#FFF" />
          <Text style={styles.addButtonText}>Add Contact</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contactsList}
      />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#FFF',
    marginLeft: 5,
    fontWeight: '600',
  },
  contactsList: {
    padding: 20,
  },
  contactCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE4E4',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactDetails: {
    marginLeft: 15,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  contactActions: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#FFE4E4',
  },
});