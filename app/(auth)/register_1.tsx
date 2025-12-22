import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const GREEN = '#49aa99';
const BORDER = '#dbeafe';
const TEXT_GRAY = '#6b7280';

export default function VerificationMethod() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Equal spacing wrapper */}
      <View style={styles.wrapper}>
        {/* White Card */}
        <View style={styles.card}>

          <Text style={styles.title}>Verify your details</Text>
          <Text style={styles.subtitle}>
            Choose how you want to add your information
          </Text>

          <TouchableOpacity style={styles.option}>
            <View>
              <Text style={styles.optionTitle}>Upload Emirates ID</Text>
              <Text style={styles.optionSubtitle}>
                Fastest and recommended method
              </Text>
            </View>
            <Ionicons name="cloud-upload-outline" size={28} color={GREEN} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View>
              <Text style={styles.optionTitle}>Manually Add Data</Text>
              <Text style={styles.optionSubtitle}>
                Enter details step by step
              </Text>
            </View>
            <Ionicons name="create-outline" size={28} color={GREEN} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.continueBtn}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fffd', // green background
  },

  wrapper: {
    flex: 1,
    padding: 28, // 👈 EQUAL SPACE ALL SIDES
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 26,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: TEXT_GRAY,
    textAlign: 'center',
    marginBottom: 28,
  },

  option: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 20,
    paddingVertical: 22,
    paddingHorizontal: 20,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  optionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },

  optionSubtitle: {
    fontSize: 13,
    color: TEXT_GRAY,
  },

  continueBtn: {
    backgroundColor: GREEN,
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 10,
  },

  continueText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ffffff',
  },
});
