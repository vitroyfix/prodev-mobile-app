import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}><Image source={HEROLOGO} /></View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find your next favorite place</Text>
          <Text style={styles.titleSubText}>Discover and book stays all over the world.</Text>
        </View>
        <View style={[styles.buttonGroup, { marginTop: 50 }]}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/join')}>
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/signin')}>
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}