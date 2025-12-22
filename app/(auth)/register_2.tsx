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

export default function UploadEmiratesID() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Equal spacing wrapper */}
      <View style={styles.wrapper}>
        {/* White Card */}
        <View style={styles.card}>

          {/* Title */}
          <Text style={styles.title}>Upload Emirates ID</Text>
          <Text style={styles.subtitle}>
            Please upload clear images of both sides of your Emirates ID
          </Text>

          {/* Front ID */}
          <TouchableOpacity style={styles.uploadBox}>
            <Ionicons name="image-outline" size={34} color={GREEN} />
            <Text style={styles.uploadTitle}>Front Side</Text>
            <Text style={styles.uploadSubtitle}>Tap to upload front image</Text>
          </TouchableOpacity>

          {/* Back ID */}
          <TouchableOpacity style={styles.uploadBox}>
            <Ionicons name="image-outline" size={34} color={GREEN} />
            <Text style={styles.uploadTitle}>Back Side</Text>
            <Text style={styles.uploadSubtitle}>Tap to upload back image</Text>
          </TouchableOpacity>

          {/* Submit */}
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fffd',
  },

  wrapper: {
    flex: 1,
    padding: 28, // equal spacing all sides
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
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: TEXT_GRAY,
    textAlign: 'center',
    marginBottom: 26,
    lineHeight: 20,
  },

  uploadBox: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 20,
    paddingVertical: 26,
    alignItems: 'center',
    marginBottom: 18,
  },

  uploadTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginTop: 10,
  },

  uploadSubtitle: {
    fontSize: 13,
    color: TEXT_GRAY,
    marginTop: 4,
  },

  submitBtn: {
    backgroundColor: GREEN,
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 10,
  },

  submitText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
});
