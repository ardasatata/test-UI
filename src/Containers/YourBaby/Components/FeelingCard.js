import React from 'react'
import TabScreen from '@/Containers/YourBaby/TabScreen'
import { View, Text, ScrollView, Alert } from 'react-native'
import { useTheme } from '@/Theme'

import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors, FontSize } from '@/Theme/Variables'

import { LineChart } from 'react-native-chart-kit'
import { TouchableItem } from 'react-native-tab-view'
import CardContainer from '@/Components/CardContainer'

const EmojiItem = ({ emoji = '😀', label = 'Joyful', isSelected = false }) => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Hello!',
      `You're feeling ${label}`,
      [
        {
          text: 'Bye!',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    )

  return (
    <TouchableItem
      style={{ alignItems: 'center', marginRight: scale(8) }}
      onPress={createTwoButtonAlert}
    >
      <View
        style={{
          backgroundColor: '#FFD685',
          padding: scale(16),
          borderRadius: 99,
          marginBottom: scale(4),
        }}
      >
        <Text style={{ fontSize: scale(32) }}>{emoji}</Text>
      </View>
      <Text style={{ color: Colors.darkGrey, fontSize: scale(12) }}>
        {label}
      </Text>
    </TouchableItem>
  )
}

const renderFeelingItems = (emojiList = EMOJI_LIST) => {
  return emojiList.map((item, index) => {
    return <EmojiItem emoji={item.emoji} label={item.label} />
  })
}

const FeelingCard = ({ weight = 62 }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <CardContainer bgColor={'#FFEDC9'}>
      <View style={[Layout.rowHCenter]}>
        <Icon
          name={'smile'}
          color={Colors.reducedBlack}
          size={24}
          style={[Gutters.smallRPadding]}
        />
        <Text style={[Fonts.textBold, { color: Colors.reducedBlack }]}>
          MOOD
        </Text>
        <TouchableItem style={[Layout.rowHCenter, { marginLeft: 'auto' }]}>
          <Text
            style={[Fonts.textBold, { marginLeft: 'auto', color: '#c6752a' }]}
          >
            See History
          </Text>
          <Icon
            name={'angle-right'}
            color={'#c6752a'}
            size={12}
            style={[Gutters.tinyHPadding, Gutters.tinyVPadding]}
          />
        </TouchableItem>
      </View>
      <View style={[Gutters.smallVPadding]}>
        <Text
          style={{
            color: Colors.darkGrey,
            fontSize: FontSize.large,
            fontWeight: 'bold',
          }}
        >
          How are you feeling?
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderFeelingItems()}
      </ScrollView>
    </CardContainer>
  )
}

const EMOJI_LIST = [
  {
    emoji: '😀',
    label: 'Joyful',
  },
  {
    emoji: '🙂',
    label: 'Happy',
  },
  {
    emoji: '😐',
    label: 'Neutral',
  },
  {
    emoji: '😩',
    label: 'Stress',
  },
  {
    emoji: '😪',
    label: 'Sad',
  },
  {
    emoji: '🤢',
    label: 'Sick',
  },
]

export default FeelingCard
