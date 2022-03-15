import React from 'react';
import {Text, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  style?: TextStyle;
}

export const Ctext: React.FC<Props> = ({children, style}) => {
  return (
    <Text style={{color: 'black', fontSize: RFValue(13), ...style}}>
      {children}
    </Text>
  );
};
