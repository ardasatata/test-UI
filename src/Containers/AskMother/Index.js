import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Text, TextInput, Button } from 'react-native'
import { useTheme } from '@/Theme'
import ChangeTheme from '@/Store/Theme/ChangeTheme'

const AskMotherContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <Text style={Fonts.textRegular}>DarkMode :</Text>
      <Button onPress={() => changeTheme({ darkMode: null })} title="Auto" />
      <Button onPress={() => changeTheme({ darkMode: true })} title="Dark" />
      <Button onPress={() => changeTheme({ darkMode: false })} title="Light" />
    </View>
  )
}

export default AskMotherContainer
