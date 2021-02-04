import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Theme'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors, TopBarSizes } from '@/Theme/Variables'

const TopBar = ({ profileName = 'Anya' }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <View
      style={[
        Layout.rowHCenter,
        Gutters.regularHPadding,
        { height: TopBarSizes.height },
      ]}
    >
      <TouchableOpacity>
        <Icon
          name={'user'}
          color={Colors.darkGrey}
          size={24}
          style={[Gutters.regularRPadding]}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name={'heart'}
          color={Colors.darkGrey}
          size={24}
          style={[Gutters.smallRPadding]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <Icon
          name={'certificate'}
          color={Colors.yellow}
          size={24}
          style={[Gutters.smallRPadding]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[Layout.rowHCenter]}>
        <Text style={[Fonts.textRegular, Fonts.textBold, Gutters.tinyRPadding]}>
          {profileName}
        </Text>
        <Icon
          name={'angle-down'}
          color={Colors.darkGrey}
          size={12}
          style={[Gutters.smallRPadding]}
        />
      </TouchableOpacity>
    </View>
  )
}

export default TopBar
