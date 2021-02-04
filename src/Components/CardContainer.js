import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Theme'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors, TopBarSizes } from '@/Theme/Variables'

const CardContainer = ({
  children = <></>,
  bgColor = '#DBF5EA',
  borderRadius = 24,
}) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <View
      style={[
        Layout.col,
        Gutters.regularHPadding,
        Gutters.largeVPadding,
        Gutters.largeBMargin,
        {
          backgroundColor: bgColor,
          borderRadius: borderRadius,
          overflow: 'hidden',
        },
      ]}
    >
      {children}
    </View>
  )
}

export default CardContainer
