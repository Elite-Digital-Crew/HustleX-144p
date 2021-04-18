import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

const Register = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colours.background,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View style={{
        height: heightToDp('70%'),
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        <Text style={{
          fontSize:widthToDp('12%'),
          fontFamily: "PoppinsBold",
          color: colours.text
        }}>REGISTER</Text>

        <View style={{
          height: heightToDp('30%'),
          justifyContent: 'space-between',
        }}>
          <TextInput
          keyboardType = 'email-address'
          placeholder= "EMAIL"
          style={{
            height: heightToDp('8%'),
            width: widthToDp('70%'),
            borderRadius: 100,
            backgroundColor: colours.grey,
            paddingHorizontal: widthToDp('6%'),
            fontFamily: "PoppinsRegular",
            fontSize: widthToDp('3.5%'),
          }}
          />
          <TextInput 
          autoCompleteType='off'
          textContentType='password'
          placeholder= "PASSWORD"
          secureTextEntry={true}
          style={{
            height: heightToDp('8%'),
            width: widthToDp('70%'),
            borderRadius: 100,
            backgroundColor: colours.grey,
            paddingHorizontal: widthToDp('6%'),
            fontFamily: "PoppinsRegular",
            fontSize: widthToDp('3.5%'),
          }}
          />
          <TextInput
          autoCompleteType='off'
          textContentType='password'
          placeholder= "CONFIRM PASSWORD"
          secureTextEntry={true}
          style={{
            height: heightToDp('8%'),
            width: widthToDp('70%'),
            borderRadius: 100,
            backgroundColor: colours.grey,
            paddingHorizontal: widthToDp('6%'),
            fontFamily: "PoppinsRegular",
            fontSize: widthToDp('3.5%'),
          }}
        />
        </View>

        <TouchableOpacity style={{
            width: widthToDp('55%'),
            height:heightToDp('8%'),
            backgroundColor:colours.secondary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            marginTop: heightToDp('2%'),
        }} onPress={() => navigation.push("CreateProfile")}>
            <Text style={{
                fontFamily: 'PoppinsBold',
                fontSize: widthToDp('5%'),
                color: colours.white ,
            }}> REGISTER</Text>
        </TouchableOpacity>

        <Text style={{
            fontFamily: "PoppinsSemiBold",
            fontSize: widthToDp('4%'),
            color: colours.text ,
            textAlign: 'center',
            marginTop: heightToDp('2%')
          }}>OR LOGIN WITH</Text>

        <View style={{
        flexDirection: 'row',
        width: widthToDp('25%'),
        marginTop: heightToDp('4%'),
        justifyContent: 'space-between',
      }}>
        <TouchableOpacity style={{
          width: widthToDp('10%'),
          height: widthToDp('10%'),
          backgroundColor: colours.grey,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <AntDesign name="google" size={widthToDp('6%')} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: widthToDp('10%'),
          height: widthToDp('10%'),
          backgroundColor: colours.grey,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <FontAwesome5 name="facebook-f" size={widthToDp('5%')} color="black" />
        </TouchableOpacity>
      </View>

      </View>
    </View>
  );
}

export default Register;