import React from 'react'
import TabScreen from '@/Containers/YourBaby/TabScreen'
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { useTheme } from '@/Theme'

import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors, FontSize } from '@/Theme/Variables'

import { LineChart } from 'react-native-chart-kit'
import { TouchableItem } from 'react-native-tab-view'
import CardContainer from '@/Components/CardContainer'

const AppointmentCard = ({ weight = 62 }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <CardContainer bgColor={'#E1EDFB'}>
      <View style={[Layout.rowHCenter]}>
        <Icon
          name={'calendar-check'}
          color={Colors.reducedBlack}
          size={24}
          style={[Gutters.smallRPadding]}
        />
        <Text style={[Fonts.textBold, { color: Colors.reducedBlack }]}>
          APPOINTMENT
        </Text>
        <TouchableItem style={[Layout.rowHCenter, { marginLeft: 'auto' }]}>
          <Text
            style={[Fonts.textBold, { marginLeft: 'auto', color: '#2375de' }]}
          >
            See All
          </Text>
          <Icon
            name={'angle-right'}
            color={'#2375de'}
            size={12}
            style={[Gutters.tinyHPadding, Gutters.tinyVPadding]}
          />
        </TouchableItem>
      </View>
      <TouchableOpacity
        style={[
          Layout.row,
          Gutters.regularHPadding,
          Gutters.regularVPadding,
          Gutters.regularVMargin,
          {
            backgroundColor: Colors.white,
            borderRadius: 16,
            minHeight: scale(72),
            overflow: 'hidden',
          },
        ]}
      >
        <View style={[Layout.fill]}>
          <Text
            style={[
              Gutters.tinyBMargin,
              {
                color: Colors.darkGrey,
                fontSize: scale(16),
                fontWeight: 'bold',
              },
            ]}
          >
            Fri, 8 Jan • 09:00
          </Text>
          <Text style={[{ color: Colors.lightGrey, fontSize: scale(14) }]}>
            Antenatal Visit with Dr. Lukman Adi Saputra
          </Text>
        </View>
        <Icon
          name={'angle-right'}
          color={Colors.darkGrey}
          size={12}
          style={[
            Gutters.smallRPadding,
            { marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto' },
          ]}
        />
      </TouchableOpacity>
      <View style={[]}>
        <Text style={[{ color: Colors.lightGrey, fontSize: FontSize.small }]}>
          + 2 more appointments
        </Text>
      </View>
    </CardContainer>
  )
}

export default AppointmentCard
