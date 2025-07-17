import { Tabs } from 'expo-router';
import { Home } from 'lucide-react-native';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 12,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Home size={34} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
    </Tabs>
  );
}
