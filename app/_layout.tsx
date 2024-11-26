import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, StyleSheet } from 'react-native';

type BottomTabParamList = {
  About: undefined;
  ProgrammingLanguages: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const AboutScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>О Себе</Text>
    <Text style={styles.text}>Привет! Меня зовут Владислав.</Text>
  </View>
);

const ProgrammingLanguagesScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Мои языки программирования</Text>
    <Text style={styles.text}>php</Text>
    <Text style={styles.text}>golang</Text>
    <Text style={styles.text}>java</Text>
  </View>
);

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2c3e50' },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#34495e' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#bdc3c7',
      }}
    >
      <Tab.Screen name="About" component={AboutScreen} options={{ title: 'О Себе' }} />
      <Tab.Screen
        name="ProgrammingLanguages"
        component={ProgrammingLanguagesScreen}
        options={{ title: 'Мои языки' }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eaeaea',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    color: '#34495e',
    textAlign: 'center',
    marginTop: 15,
  },
});
