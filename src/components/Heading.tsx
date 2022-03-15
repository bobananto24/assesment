import React from 'react';
import {Text, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  style?: TextStyle;
}

export const Heading: React.FC<Props> = ({children, style}) => {
  return (
    <Text
      style={{
        color: 'black',
        fontSize: RFValue(18),
        fontWeight: 'bold',
        margin: RFValue(5),
        ...style,
      }}>
      {children}
    </Text>
  );
};
