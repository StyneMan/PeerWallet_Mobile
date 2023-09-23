import {Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

export type TextProps = PropsWithChildren<{
  color?: any;
  text: string;
  style?: any;
  align?: any;
}>;

export function Text1({color, text, style}: TextProps): React.JSX.Element {
  return (
    <Text
      style={[styles.root1, {color: color ?? 'black'}, style && {...style}]}>
      {text}
    </Text>
  );
}

export function Text2({color, text, align}: TextProps): React.JSX.Element {
  return (
    <Text style={[styles.root2, {color: color ?? 'black', textAlign: align}]}>
      {text}
    </Text>
  );
}

export function Text3({color, text, align}: TextProps): React.JSX.Element {
  return (
    <Text style={[styles.root3, {color: color ?? 'black', textAlign: align}]}>
      {text}
    </Text>
  );
}

export function Text4({color, text}: TextProps): React.JSX.Element {
  return <Text style={[styles.root4, {color: color ?? 'black'}]}>{text}</Text>;
}

export function Text5({color, text}: TextProps): React.JSX.Element {
  return <Text style={[styles.root5, {color: color ?? 'black'}]}>{text}</Text>;
}

export function Text6({color, text}: TextProps): React.JSX.Element {
  return <Text style={[styles.root6, {color: color ?? 'black'}]}>{text}</Text>;
}

export function Body1({color, text}: TextProps): React.JSX.Element {
  return <Text style={[styles.body1, {color: color ?? 'black'}]}>{text}</Text>;
}

export function Body2({color, text}: TextProps): React.JSX.Element {
  return <Text style={[styles.body2, {color: color ?? 'black'}]}>{text}</Text>;
}

const styles = StyleSheet.create({
  root1: {
    fontSize: 38,
    fontWeight: '700',
    fontFamily: 'Inter-Regular',
  },
  root2: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Inter-Regular',
  },
  root3: {
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Inter-Regular',
  },
  root4: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
  },
  root5: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Inter-Regular',
  },
  root6: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Inter-Regular',
  },
  body1: {
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
  },
  body2: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
  },
});
