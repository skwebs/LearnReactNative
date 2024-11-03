import React from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  const onPressButton = () => {
    // Alert.alert('You tapped the button!');
  };

  return (
    <View>
      {/* header */}
      <View style={{ display: "flex", justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
        <Image
          source={{
            uri: 'https://v1.anshumemorial.in/assets/static/img/ama/ama-128x128.png',
          }}
          style={{ width: 100, height: 100, }}
        />
      </View>

      {/* name */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Name</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Name"
          keyboardType="name-phone-pad"
        />
      </View>

      {/* mobile */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Mobile Number</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Mobile Number"
          keyboardType='phone-pad'
        />
        <Text style={styles.inputHelpText}>Enter valid mobile number.</Text>
      </View>

      {/* email */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Email</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Email"
          keyboardType="email-address"
        />
        <Text style={styles.inputHelpText}>Enter valid email address.</Text>
      </View>


      {/* submit button */}
      <View style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
        <TouchableNativeFeedback
          onPress={onPressButton}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : undefined
          }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Register
              {Platform.OS !== 'android' ? '(Android only)' : ''}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 90,
    // padding: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderTopWidth: 1,
    // backgroundColor: 'rgba(255,0,0,.25)',
  },
  inputLabel: {
    marginBottom: 5
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  inputHelpText: {
    fontSize: 11
  },
  button: {
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
  },
});



export default Login;