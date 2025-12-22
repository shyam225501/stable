import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Language = {
  id: string;
  native: string;
  english: string;
};

const LANGUAGES: Language[] = [
  { id: "hi", native: "हिंदी", english: "Hindi" },
  { id: "ur", native: "اردو", english: "Urdu" },
  { id: "bn", native: "বাংলা", english: "Bengali" },
  { id: "ar", native: "العربية", english: "Arabic" },
  { id: "en", native: "English", english: "English" },
];

export default function LanguageSelectionScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose your language</Text>

        <View style={styles.list}>
          {LANGUAGES.map((lang) => (
            <TouchableOpacity
              key={lang.id}
              style={[
                styles.card,
                selected === lang.id && styles.cardSelected,
              ]}
              onPress={() => setSelected(lang.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.nativeText}>{lang.native}</Text>
              <Text style={styles.englishText}>{lang.english}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            !selected && styles.buttonDisabled,
          ]}
          disabled={!selected}
          onPress={() => navigation.navigate("Next")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6FEFC",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 24,
    color: "#1A1A1A",
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E4EDF5",
  },
  cardSelected: {
    borderColor: "#4DA6FF",
    backgroundColor: "#F0F7FF",
  },
  nativeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  englishText: {
    fontSize: 13,
    marginTop: 4,
    color: "#6B7280",
  },
  button: {
    backgroundColor: "#E8EDF3",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#7B8A9A",
  },
});
