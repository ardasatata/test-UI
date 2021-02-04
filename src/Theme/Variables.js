/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { scale } from 'react-native-size-matters'

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  reducedBlack: '#2B2625',
  darkGrey: '#4e4e4e',
  grey: '#8a8a8a',
  lightGrey: '#A5B0A8',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  yellow: '#ffcb30',
}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  small: 12,
  regular: 14,
  large: 18,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export const TopBarSizes = {
  height: scale(48),
}
