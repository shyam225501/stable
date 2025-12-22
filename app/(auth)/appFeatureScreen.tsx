import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PagerView from 'react-native-pager-view';

const { width } = Dimensions.get('window');

const GREEN = '#49aa99';

const slides = [
  {
    id: 1,
    icon: 'wallet-outline',
    title: 'Track your salary and money easily',
    subtitle: 'Know how much you have and where it goes',
    button: 'Next',
  },
  {
    id: 2,
    icon: 'paper-plane-outline',
    title: 'Send money home at the best rate',
    subtitle: 'Compare rates and save money on every transfer',
    button: 'Next',
  },
  {
    id: 3,
    icon: 'chatbubble-ellipses-outline',
    title: 'Ask questions in your language',
    subtitle: 'Get help anytime with voice or text',
    button: 'Get Started',
  },
];

export default function Onboarding({ navigation }: any) {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if (page < slides.length - 1) {
      pagerRef.current?.setPage(page + 1);
    } else {
      navigation.replace('Login'); // change route if needed
    }
  };

  const handleSkip = () => {
    navigation.replace('Login'); // change route if needed
  };

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pager}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e: { nativeEvent: { position: React.SetStateAction<number>; }; }) => setPage(e.nativeEvent.position)}
      >
        {slides.map((item) => (
          <View key={item.id} style={styles.slide}>
            {/* Skip */}
            <TouchableOpacity style={styles.skip} onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            {/* Icon */}
            <View style={styles.iconWrapper}>
              <Ionicons
                name={item.icon as any}
                size={64} // increased icon size
                color={GREEN}
              />
            </View>

            {/* Text */}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>

            {/* Dots */}
            <View style={styles.dots}>
              {slides.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    page === i && styles.activeDot,
                  ]}
                />
              ))}
            </View>

            {/* Button */}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>{item.button}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  pager: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  skip: {
    position: 'absolute',
    top: 50,
    right: 24,
  },
  skipText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  iconWrapper: {
    width: 140, // bigger icon container
    height: 140,
    borderRadius: 70,
    backgroundColor: '#e6f4f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 50, // increased space below icon
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 160, // added more space before dots
  },
  dots: {
    flexDirection: 'row',
    marginBottom: 100,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d5db',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: GREEN,
    width: 18,
  },
  button: {
    backgroundColor: GREEN,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 150, // added space from bottom
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
