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

export default function MessageScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'I am safe and heading home.',
      type: 'template',
    },
    {
      id: '2',
      text: 'Need help! Please track my location.',
      type: 'template',
    },
  ]);

  const renderMessage = ({ item }) => (
    <TouchableOpacity 
      style={[styles.messageCard, item.type === 'template' && styles.templateCard]}
      onPress={() => setMessage(item.text)}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      {item.type === 'template' && (
        <Ionicons name="copy-outline" size={20} color="#FF4D79" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Emergency Messages</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Quick Messages</Text>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  messagesList: {
    flexGrow: 1,
  },
  messageCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFE4E4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  templateCard: {
    backgroundColor: '#FFE4E4',
  },
  messageText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#FFE4E4',
    paddingTop: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF4D79',
    borderRadius: 25,
    padding: 12,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#FF4D79',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});