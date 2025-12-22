import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const GREEN = '#49AA99';
const LIGHT_BG = '#F3FAF9';
const BORDER = '#DDEEEB';
const TEXT_DARK = '#111827';
const TEXT_LIGHT = '#6B7280';

export default function EmiratesIdDetails() {
  const [fullName, setFullName] = useState('');
  const [emiratesId, setEmiratesId] = useState('');
  const [nationality, setNationality] = useState('');
  const [occupation, setOccupation] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = () => {
    const data = {
      fullName,
      emiratesId,
      nationality,
      occupation,
      issueDate,
      expiryDate,
    };

    console.log('Submitted Data:', data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.heading}>Emirates ID Details</Text>

        <View style={styles.card}>
          {/* Full Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor={TEXT_LIGHT}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Emirates ID */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Emirates ID</Text>
            <TextInput
              style={styles.input}
              placeholder="784-XXXX-XXXXXXX-X"
              placeholderTextColor={TEXT_LIGHT}
              keyboardType="numeric"
              value={emiratesId}
              onChangeText={setEmiratesId}
            />
          </View>

          {/* Nationality */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nationality</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your nationality"
              placeholderTextColor={TEXT_LIGHT}
              value={nationality}
              onChangeText={setNationality}
            />
          </View>

          {/* Occupation */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Occupation</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your occupation"
              placeholderTextColor={TEXT_LIGHT}
              value={occupation}
              onChangeText={setOccupation}
            />
          </View>

          {/* Issue Date */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Issue Date</Text>
            <TextInput
              style={styles.input}
              placeholder="DD / MM / YYYY"
              placeholderTextColor={TEXT_LIGHT}
              value={issueDate}
              onChangeText={setIssueDate}
            />
          </View>

          {/* Expiry Date */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder="DD / MM / YYYY"
              placeholderTextColor={TEXT_LIGHT}
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BG,
  },
  scroll: {
    padding: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    color: TEXT_DARK,
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: BORDER,
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    color: TEXT_LIGHT,
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: TEXT_DARK,
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginTop: 24,
    height: 52,
    borderRadius: 14,
    backgroundColor: GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
