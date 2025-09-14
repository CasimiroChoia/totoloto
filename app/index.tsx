import { Colors } from '@/constants/Constants';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, View, } from 'react-native';


export default function HomeScreen() {
  const [loaded, setLoaded] = useState<Boolean>(false)
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" translucent={true} />
      <Image source={require("@/assets/images/adaptive-icon.png")} style={styles.logo} onLoad={(e) => {
        setLoaded(true);
        setTimeout(() => router.replace("/main"), 1000 * 1.5)
      }} />
      {loaded && <Text style={{ fontSize: 24, marginTop: 8 }}>Totoloto</Text>}
      {loaded && <ActivityIndicator style={styles.loader} size="large" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "auto"
  },
  logo: {
    width: 200,
    height: 200
  },
  loader: {
    position: "absolute",
    bottom: 20
  }
});
