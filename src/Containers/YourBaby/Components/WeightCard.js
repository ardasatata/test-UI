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

import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '@/Theme/Variables'

import { LineChart } from 'react-native-chart-kit'
import { TouchableItem } from 'react-native-tab-view'
import CardContainer from '@/Components/CardContainer'

const WeightCard = ({ weight = 62 }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <CardContainer bgColor={'#DBF5EA'}>
      <View style={[Layout.rowHCenter]}>
        <Icon
          name={'weight'}
          color={Colors.reducedBlack}
          size={24}
          style={[Gutters.smallRPadding]}
        />
        <Text style={[Fonts.textBold, { color: Colors.reducedBlack }]}>
          WEIGHT
        </Text>
        <TouchableItem style={[Layout.rowHCenter, { marginLeft: 'auto' }]}>
          <Text
            style={[Fonts.textBold, { marginLeft: 'auto', color: '#008A46' }]}
          >
            See History
          </Text>
          <Icon
            name={'angle-right'}
            color={'#008A46'}
            size={12}
            style={[Gutters.tinyHPadding, Gutters.tinyVPadding]}
          />
        </TouchableItem>
      </View>
      <TouchableOpacity style={[Layout.rowVCenter, { overflow: 'visible' }]}>
        <LineChart
          data={{
            labels: ['', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Today'],
            datasets: [
              {
                data: [
                  50,
                  Math.random() * 70,
                  Math.random() * 80,
                  Math.random() * 70,
                  Math.random() * 60,
                  Math.random() * 70,
                  Math.random() * 80,
                  Math.random() * 70,
                ],
              },
              {
                data: [0],
                color: () => 'rgba(0, 0, 0, 0)',
              },
              {
                data: [70],
                color: () => 'rgba(0, 0, 0, 0)',
              },
            ],
          }}
          width={scale(Dimensions.get('window').width - scale(4))} // from react-native
          height={verticalScale(160)}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: '#DBF5EA',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#DBF5EA',
            backgroundGradientToOpacity: 0,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#A2E9CD',
            labelColor: (opacity = 1) => '#008A46',
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '5',
              strokeWidth: '0',
              fill: '#008A46',
            },
            strokeWidth: 0,
            fillShadowGradient: '#73cb8a',
            fillShadowGradientOpacity: 0.4,
            propsForBackgroundLines: {
              stroke: 'white',
              strokeDasharray: '', // solid background lines with no dashes
            },
            propsForVerticalLabels: {
              fontSize: '12',
              fontWeight: 'bold',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            right: scale(36),
            borderRadius: 4,
            zIndex: -1,
          }}
          withHorizontalLabels={false}
          withInnerLines={true}
          withOuterLines={false}
          withHorizontalLines={false}
          hidePointsAtIndex={[0]}
        />
      </TouchableOpacity>
      <View style={[Layout.row]}>
        <Text
          style={[
            Fonts.titleRegular,
            Gutters.tinyRPadding,
            { color: Colors.reducedBlack, fontSize: 48, fontWeight: '400' },
          ]}
        >
          {weight}
        </Text>
        <Text
          style={[
            Fonts.textRegular,
            { marginTop: 'auto', marginBottom: scale(8) },
          ]}
        >
          kg
        </Text>
      </View>
      <View style={[Layout.rowHCenter]}>
        <Text
          style={
            ([Fonts.textRegular, Gutters.tinyRPadding], { color: Colors.grey })
          }
        >
          Updated 2h ago
        </Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <View
            style={{
              backgroundColor: Colors.lightGrey,
              borderRadius: 999,
              height: scale(24),
              width: scale(24),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              name={'pen'}
              color={Colors.white}
              size={12}
              style={[Gutters.tinyHPadding, Gutters.tinyVPadding]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </CardContainer>
  )
}

export default WeightCard
