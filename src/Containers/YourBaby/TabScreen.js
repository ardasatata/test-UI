import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { Colors } from '@/Theme/Variables'
import { useTheme } from '@/Theme'
import MainDashboard from '@/Containers/YourBaby/MainDashboard'

const ProgressScreen = () => (
  <View style={[{ flex: 1, backgroundColor: '#ff4081' }]} />
)

const ArticleScreen = () => (
  <View style={[{ flex: 1, backgroundColor: '#673ab7' }]} />
)

const ToolsScreen = () => <MainDashboard />

const initialLayout = { width: Dimensions.get('window').width }

const TabScreen = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const [index, setIndex] = useState(2)
  const [routes] = useState([
    { key: 'progress', title: 'Progress' },
    { key: 'articles', title: 'Articles' },
    { key: 'tools', title: 'Tools' },
  ])

  const renderScene = SceneMap({
    progress: ProgressScreen,
    articles: ArticleScreen,
    tools: ToolsScreen,
  })

  return (
    <TabView
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'black' }}
          style={{ backgroundColor: Colors.white }}
          renderLabel={({ route, focused, color }) => (
            <Text
              style={[
                focused ? Fonts.textBold : Fonts.textRegular,
                { paddingHorizontal: 8 },
                { color: Colors.darkGrey, margin: 2 },
              ]}
            >
              {route.title}
            </Text>
          )}
        />
      )}
      style={{ backgroundColor: 'white' }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  )
}

export default TabScreen
