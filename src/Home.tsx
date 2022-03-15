import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Ctext, Heading} from './components';

export const Home = (props: any) => {
  const green = '#00facc';
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: 'white',
        paddingHorizontal: RFValue(10),
      }}>
      <Heading>Best Sellers</Heading>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{width: RFValue(10), backgroundColor: 'white'}} />
        )}
        data={array}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                borderRadius: RFValue(10),
              }}>
              <Image
                style={{
                  height: RFValue(150),
                  width: RFValue(260),
                  borderRadius: RFValue(10),
                }}
                source={{uri: 'https://picsum.photos/400/200'}}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: RFValue(20),
                  left: RFValue(20),
                  backgroundColor: 'black',
                  borderRadius: RFValue(30),
                  width: RFValue(50),
                }}>
                <Ctext
                  style={{
                    color: 'white',
                    padding: RFValue(5),
                    textAlign: 'center',
                  }}>
                  Shop
                </Ctext>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Heading>Lifestyle</Heading>
        <Ctext style={{color: green}}>see more</Ctext>
      </View>

      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{width: RFValue(10), backgroundColor: 'white'}} />
        )}
        data={array}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                borderRadius: RFValue(10),
              }}>
              <Image
                style={{
                  height: RFValue(90),
                  width: RFValue(150),
                  borderRadius: RFValue(10),
                }}
                source={{uri: 'https://picsum.photos/400/200'}}
              />

              <Ctext style={{textAlign: 'center', marginTop: RFValue(10)}}>
                Can Travel
              </Ctext>
              <Ctext style={{textAlign: 'center'}}>Impact Period</Ctext>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Heading>Periods</Heading>
        <Ctext style={{color: green}}>see more</Ctext>
      </View>

      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{width: RFValue(10), backgroundColor: 'white'}} />
        )}
        data={array}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                borderRadius: RFValue(10),
              }}>
              <Image
                style={{
                  height: RFValue(90),
                  width: RFValue(150),
                  borderRadius: RFValue(10),
                }}
                source={{uri: 'https://picsum.photos/400/200'}}
              />

              <Ctext style={{textAlign: 'center', marginTop: RFValue(10)}}>
                Can Travel
              </Ctext>
              <Ctext style={{textAlign: 'center'}}>Impact Period</Ctext>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
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
];
