import React, { useState } from 'react'
import TabScreen from '@/Containers/YourBaby/TabScreen'
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  RefreshControl,
} from 'react-native'
import { useTheme } from '@/Theme'

import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors, FontSize } from '@/Theme/Variables'

import { LineChart } from 'react-native-chart-kit'
import { TouchableItem } from 'react-native-tab-view'
import WeightCard from '@/Containers/YourBaby/Components/WeightCard'
import Layout from '@/Theme/Layout'
import FeelingCard from '@/Containers/YourBaby/Components/FeelingCard'
import UpdateCard from '@/Containers/YourBaby/Components/UpdateCard'
import AppointmentCard from '@/Containers/YourBaby/Components/AppointmentCard'

const MainDashboard = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const [state, setState] = useState(0)

  const [weight, setWeight] = useState(Math.floor(Math.random() * 100))

  const refresh = () => {
    let current = state
    setState(current + 1)
    setWeight(Math.floor(Math.random() * 100))
  }

  return (
    <ScrollView
      style={[Gutters.regularHPadding, Gutters.regularVPadding]}
      contentContainerStyle={
        ([Layout.colHCenter],
        { backgroundColor: 'white', paddingBottom: scale(24) })
      }
      refreshControl={
        <RefreshControl
          refreshing={false}
          tintColor={'transparent'}
          onRefresh={() => {
            refresh()
          }}
        />
      }
    >
      <WeightCard weight={weight} />
      <FeelingCard />
      <UpdateCard />
      <AppointmentCard />
    </ScrollView>
  )
}

export default MainDashboard
