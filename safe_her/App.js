import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';
import MessageScreen from './screens/MessageScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Message') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#FF4D79',
          borderTopWidth: 0,
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#FFE4E4',
        headerStyle: {
          backgroundColor: '#FF4D79',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: '#FFF',
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'left',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Safe Her',
        }}
      />
      <Tab.Screen 
        name="Contacts" 
        component={ContactsScreen}
        options={{
          title: 'Trusted Contacts',
        }}
      />
      <Tab.Screen 
        name="Message" 
        component={MessageScreen}
        options={{
          title: 'Emergency Messages',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainApp"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}