import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/_join';
import { HEROLOGOGREEN, GOOGLELOGO } from '../constants';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}><Image source={HEROLOGOGREEN} /></View>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back, please sign in to continue</Text>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" />
      </View>
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/(home)')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}