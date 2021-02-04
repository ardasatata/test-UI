import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  AskDoctorContainer,
  AskMotherContainer,
  YourBabyContainer,
} from '@/Containers'

import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="YourBaby"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="AskDoctor"
        component={AskDoctorContainer}
        options={{
          title: 'Ask Doctor',
          tabBarIcon: ({ color, size }) => (
            <Icon name="stethoscope" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="YourBaby"
        component={YourBabyContainer}
        options={{
          title: 'Your Baby',
          tabBarIcon: ({ color, size }) => (
            <Icon name="baby" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AskMother"
        component={AskMotherContainer}
        options={{
          title: 'Ask Mother',
          tabBarIcon: ({ color, size }) => (
            <Icon name="comments" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
