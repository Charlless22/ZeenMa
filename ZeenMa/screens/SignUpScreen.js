// SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Svg, { Path } from 'react-native-svg';

const SignupScreen = ( { navigation } ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate("Home")
      }catch(err) {
        console.log('got an error', err.message);
      }
    }
  };

  return (
    <View style={ styles.container }>
      <View style={ styles.topPage }>
        <View style={ styles.arrowDiv }>
          <TouchableOpacity onPress={ () => navigation.navigate("Login") }>
            <Svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M0.470215 11.8524C-0.154785 12.4871 -0.154785 13.518 0.470215 14.1528L10.0702 23.9028C10.6952 24.5375 11.7102 24.5375 12.3352 23.9028C12.9602 23.268 12.9602 22.2371 12.3352 21.6024L3.86521 13L12.3302 4.39768C12.9552 3.76291 12.9552 2.73206 12.3302 2.09729C11.7052 1.46252 10.6902 1.46252 10.0652 2.09729L0.465215 11.8473L0.470215 11.8524Z" fill="black"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.middlePage }>
        <View style={ styles.inputDiv }>
          <View style={ styles.labels }>
            <Text style={ styles.labelText }>Email</Text>
          </View>
          <TextInput style={ styles.inputs }
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}>
          </TextInput>
          <View style={ styles.labels }>
            <Text style={ styles.labelText }>Password</Text>
          </View>
          <TextInput
            style={ styles.inputs }
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}>
          </TextInput>
        </View>
      </View>
      <View style={ styles.bottomPage }>
        <View style={ styles.loginButtonDiv }>
          <TouchableOpacity style={ styles.loginButton } onPress={ handleSignUp }>
            <Text style={ { fontWeight: "bold" } }>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFF5EA",
  },
  arrowDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 0.5,
    marginLeft: 20,
    justifyContent: "center",
  },
  middlePage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFF5EA",
  },
  inputDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    width: "80%",
    height: "15%",
    backgroundColor: "#FFF",
    opacity: 0.5,
    borderColor: "#FFF500",
    borderWidth: 1.5,
    borderRadius: 10,
  },
  labels: {
    width: "80%",
    marginBottom: "2%",
    marginTop: "2%",
  },
  bottomPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFF5EA",
  },
  loginButtonDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "80%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF500",
    borderRadius: 10,
  }
});

export default SignupScreen;
