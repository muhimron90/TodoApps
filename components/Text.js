import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

import {theme} from '../constants';

class sText extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    const {
      h1,
      h2,
      h3,
      title,
      body,
      caption,
      small,
      size,
      transform,
      align,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,
      children,
      style,
      ...props
    } = this.props;
    const myStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      small && styles.small,
      size && {fontSize: size},
      transform && {textTransform: transform},
      align && {textAlign: align},
      height && {lineHeight: height},
      spacing && {letterSpacing: spacing},
      weight && {fontWeight: weight},
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && {color},
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      style, // rewrite predefined styles
    ];
    return (
      <Text style={myStyles} {...props}>
        {children}
      </Text>
    );
  }
}

export default sText;

const styles = StyleSheet.create({
  text: {
    fontSize: theme.sizes.font,
    color: theme.color.black,
  },

  regular: theme.weightFont.regular,
  bold: theme.weightFont.bold,
  semibold: theme.weightFont.semibold,
  medium: theme.weightFont.medium,
  light: theme.weightFont.light,
  // position
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  // colors
  accent: {
    color: theme.color.accent,
  },
  primary: {
    color: theme.color.primary,
  },
  secondary: {
    color: theme.color.secondary,
  },
  tertiary: {
    color: theme.color.tertiary,
  },
  black: {
    color: theme.color.black,
  },
  white: {
    color: theme.color.white,
  },
  gray: {
    color: theme.color.gray,
  },
  gray2: {
    color: theme.color.gray2,
  },
  //fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
  small: theme.fonts.small,
});
