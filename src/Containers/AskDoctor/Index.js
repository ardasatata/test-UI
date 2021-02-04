import React, { useState } from 'react'
import { View } from 'react-native'
import { useTheme } from '@/Theme'

const AskDoctorContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]} />
}

export default AskDoctorContainer
