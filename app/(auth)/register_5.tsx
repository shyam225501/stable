import React, { useRef, useState } from 'react';
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

export default function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    console.log('OTP Submitted:', enteredOtp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.centerWrapper}>
          {/* Heading */}
          <Text style={styles.heading}>Verify OTP</Text>
          <Text style={styles.subheading}>
            Enter the 4-digit code sent to your email
          </Text>

          {/* OTP Card */}
          <View style={styles.card}>
            <View style={styles.otpRow}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  //@ts-ignore
                  ref={(ref) => (inputs.current[index] = ref)}
                  style={[
                    styles.otpInput,
                    digit && styles.otpFilled,
                  ]}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                />
              ))}
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={[
              styles.button,
              otp.includes('') && styles.buttonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={otp.includes('')}
          >
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>

          {/* Resend */}
          <Text style={styles.resendText}>
            Didn’t receive the code?{' '}
            <Text style={styles.resendLink}>Resend</Text>
          </Text>
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

  centerWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: TEXT_DARK,
    textAlign: 'center',
    marginBottom: 6,
  },

  subheading: {
    fontSize: 13,
    color: TEXT_LIGHT,
    textAlign: 'center',
    marginBottom: 28,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: BORDER,
    marginBottom: 24,
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  otpInput: {
    width: 56,
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: BORDER,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: TEXT_DARK,
    backgroundColor: '#FFFFFF',
  },

  otpFilled: {
    borderColor: GREEN,
    backgroundColor: '#E9F7F4',
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

  resendText: {
    marginTop: 18,
    fontSize: 13,
    color: TEXT_LIGHT,
    textAlign: 'center',
  },

  resendLink: {
    color: GREEN,
    fontWeight: '600',
  },
});
