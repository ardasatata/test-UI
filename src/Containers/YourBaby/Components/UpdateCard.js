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

const UpdateCard = ({ weight = 62 }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <CardContainer bgColor={'#F8F4F3'}>
      <View style={[Layout.rowHCenter]}>
        <Icon
          name={'thumbtack'}
          color={Colors.reducedBlack}
          size={24}
          style={[Gutters.smallRPadding]}
        />
        <Text style={[Fonts.textBold, { color: Colors.reducedBlack }]}>
          UPDATE
        </Text>
        <TouchableItem style={[Layout.rowHCenter, { marginLeft: 'auto' }]}>
          <Text
            style={[Fonts.textBold, { marginLeft: 'auto', color: '#DF5E7C' }]}
          >
            See History
          </Text>
          <Icon
            name={'angle-right'}
            color={'#DF5E7C'}
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
        <Text style={[{ color: Colors.lightGrey, fontSize: scale(14) }]}>
          Add important notes here...
        </Text>
        <Icon
          name={'scroll'}
          color={'#DF5E7C'}
          size={scale(32)}
          style={[
            Gutters.smallRPadding,
            { marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto' },
          ]}
        />
      </TouchableOpacity>
    </CardContainer>
  )
}

export default UpdateCard
