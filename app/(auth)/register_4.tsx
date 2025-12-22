import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
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

export default function EmailDetails() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.centerWrapper}>
          {/* Heading */}
          <Text style={styles.heading}>Email Address</Text>

          {/* Card */}
          <View style={styles.card}>
            <Text style={styles.label}>Email ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor={TEXT_LIGHT}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Button */}
          <TouchableOpacity
            style={[
              styles.button,
              !email && styles.buttonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={!email}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: LIGHT_BG,
  },

  /* CENTERING MAGIC */
  centerWrapper: {
    flex: 1,
    justifyContent: 'center', // vertical center
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 16,
    fontWeight: '500',
    color: TEXT_DARK,
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: BORDER,
    marginBottom: 24,
  },

  label: {
    fontSize: 12,
    color: TEXT_LIGHT,
    marginBottom: 6,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 14,
    paddingHorizontal: 14,
    fontSize: 14,
    color: TEXT_DARK,
    backgroundColor: '#FFFFFF',
  },

  button: {
    height: 54,
    borderRadius: 16,
    backgroundColor: GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDisabled: {
    backgroundColor: '#B7E0D8',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
