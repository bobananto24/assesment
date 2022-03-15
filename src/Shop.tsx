import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Ctext} from './components';

export const Shop = (props: any) => {
  const green = '#00facc';
  const orange = '#fa4f00';
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{height: RFValue(15), backgroundColor: 'white'}} />
        )}
        data={array}
        renderItem={({item}) => (
          <View
            style={{
              width: '95%',
              borderWidth: RFValue(2),
              flexDirection: 'row',
              borderRadius: RFValue(10),
              borderColor: green,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Image
              style={{
                height: RFValue(105),
                width: RFValue(105),
                borderRadius: RFValue(10),
              }}
              source={{uri: 'https://picsum.photos/200/200'}}
            />
            <View>
              <Ctext
                style={{
                  color: green,
                  padding: RFValue(10),
                  fontWeight: 'bold',
                }}>
                ACTIVE PERIOD PACK
              </Ctext>
              <View
                style={{flexDirection: 'row', marginHorizontal: RFValue(10)}}>
                <Ctext
                  style={{
                    textDecorationLine: 'line-through',
                  }}>
                  Rs. 607
                </Ctext>
                <Ctext
                  style={{
                    color: green,
                    paddingLeft: RFValue(10),
                  }}>
                  Rs. 607
                </Ctext>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  borderWidth: RFValue(2),
                  borderRadius: RFValue(30),
                  width: RFValue(90),
                  justifyContent: 'center',
                  margin: RFValue(10),
                }}>
                <Ctext
                  style={{
                    padding: RFValue(5),
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Buy Now
                </Ctext>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View style={{backgroundColor: orange}}>
        <Ctext
          style={{textAlign: 'center', marginTop: RFValue(10), color: 'white'}}>
          Create a fully customizable combos and bundles delivered right to your
          doorstep
        </Ctext>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderRadius: RFValue(10),
            backgroundColor: 'white',
            justifyContent: 'center',
            margin: RFValue(10),
          }}>
          <Ctext
            style={{
              padding: RFValue(10),
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#0092fa',
            }}>
            Customize
          </Ctext>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const array = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  {id: '7'},
  {id: '8'},
  {id: '9'},
  {id: '10'},
  {id: '11'},
  {id: '12'},
  {id: '13'},
  {id: '14'},
  {id: '15'},
  {id: '16'},
  {id: '17'},
  {id: '18'},
  {id: '19'},
  {id: '20'},
  {id: '21'},
  {id: '22'},
  {id: '23'},
  {id: '24'},
  {id: '25'},
  {id: '26'},
  {id: '27'},
];
