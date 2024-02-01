import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ParametersScreen( {navigation} ) {
  const [saveCredentials, setSaveCredentials] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  useEffect(() => {
    const checkSavedCredentials = async () => {
      try {
        const savedValue = await AsyncStorage.getItem('saveCredentials');
        if (savedValue !== null) {
          setSaveCredentials(savedValue === 'true');
        }
      } catch (e) {
        console.error('Failed to fetch saveCredentials from AsyncStorage:', e);
      }
    };

    checkSavedCredentials();
  }, []);

  useEffect(() => {
    const saveCredentialsSetting = async () => {
      try {
        await AsyncStorage.setItem('saveCredentials', saveCredentials.toString());
      } catch (e) {
        console.error('Failed to save saveCredentials to AsyncStorage:', e);
      }
    };

    saveCredentialsSetting();
  }, [saveCredentials]);

  const handleToggleSwitch = () => {
    setSaveCredentials(!saveCredentials);
  };

  return (
    <View style={ styles.container }>
      <View style={ styles.topPage }>
        <View style={ styles.arrowDiv }>
          <TouchableOpacity onPress={ () => navigation.navigate("Home") }>
            <Svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M0.470215 11.8524C-0.154785 12.4871 -0.154785 13.518 0.470215 14.1528L10.0702 23.9028C10.6952 24.5375 11.7102 24.5375 12.3352 23.9028C12.9602 23.268 12.9602 22.2371 12.3352 21.6024L3.86521 13L12.3302 4.39768C12.9552 3.76291 12.9552 2.73206 12.3302 2.09729C11.7052 1.46252 10.6902 1.46252 10.0652 2.09729L0.465215 11.8473L0.470215 11.8524Z" fill="black"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.middlePage }>
        <View style={ styles.parametersDiv }>
          <View style={ styles.parametersTitle }>
            <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Circle cx="12.5" cy="12.5" r="12.5" fill="#FEC600"/>
              <Path d="M6.25 16.7708C6.25 17.2087 6.59912 17.5625 7.03125 17.5625H8.3667C8.66699 18.2626 9.35547 18.75 10.1562 18.75C10.957 18.75 11.6455 18.2626 11.9458 17.5625H17.9688C18.4009 17.5625 18.75 17.2087 18.75 16.7708C18.75 16.3329 18.4009 15.9792 17.9688 15.9792H11.9458C11.6455 15.279 10.957 14.7917 10.1562 14.7917C9.35547 14.7917 8.66699 15.279 8.3667 15.9792H7.03125C6.59912 15.9792 6.25 16.3329 6.25 16.7708ZM9.375 16.7708C9.375 16.5609 9.45731 16.3595 9.60382 16.211C9.75034 16.0626 9.94905 15.9792 10.1562 15.9792C10.3635 15.9792 10.5622 16.0626 10.7087 16.211C10.8552 16.3595 10.9375 16.5609 10.9375 16.7708C10.9375 16.9808 10.8552 17.1822 10.7087 17.3306C10.5622 17.4791 10.3635 17.5625 10.1562 17.5625C9.94905 17.5625 9.75034 17.4791 9.60382 17.3306C9.45731 17.1822 9.375 16.9808 9.375 16.7708ZM14.0625 12.8125C14.0625 12.6025 14.1448 12.4012 14.2913 12.2527C14.4378 12.1042 14.6365 12.0208 14.8438 12.0208C15.051 12.0208 15.2497 12.1042 15.3962 12.2527C15.5427 12.4012 15.625 12.6025 15.625 12.8125C15.625 13.0225 15.5427 13.2238 15.3962 13.3723C15.2497 13.5208 15.051 13.6042 14.8438 13.6042C14.6365 13.6042 14.4378 13.5208 14.2913 13.3723C14.1448 13.2238 14.0625 13.0225 14.0625 12.8125ZM14.8438 10.8333C14.043 10.8333 13.3545 11.3207 13.0542 12.0208H7.03125C6.59912 12.0208 6.25 12.3746 6.25 12.8125C6.25 13.2504 6.59912 13.6042 7.03125 13.6042H13.0542C13.3545 14.3043 14.043 14.7917 14.8438 14.7917C15.6445 14.7917 16.333 14.3043 16.6333 13.6042H17.9688C18.4009 13.6042 18.75 13.2504 18.75 12.8125C18.75 12.3746 18.4009 12.0208 17.9688 12.0208H16.6333C16.333 11.3207 15.6445 10.8333 14.8438 10.8333ZM10.9375 9.64583C10.7303 9.64583 10.5316 9.56243 10.3851 9.41396C10.2386 9.26549 10.1562 9.06413 10.1562 8.85417C10.1562 8.6442 10.2386 8.44284 10.3851 8.29437C10.5316 8.14591 10.7303 8.0625 10.9375 8.0625C11.1447 8.0625 11.3434 8.14591 11.4899 8.29437C11.6364 8.44284 11.7188 8.6442 11.7188 8.85417C11.7188 9.06413 11.6364 9.26549 11.4899 9.41396C11.3434 9.56243 11.1447 9.64583 10.9375 9.64583ZM12.7271 8.0625C12.4268 7.36237 11.7383 6.875 10.9375 6.875C10.1367 6.875 9.44824 7.36237 9.14795 8.0625H7.03125C6.59912 8.0625 6.25 8.41628 6.25 8.85417C6.25 9.29206 6.59912 9.64583 7.03125 9.64583H9.14795C9.44824 10.346 10.1367 10.8333 10.9375 10.8333C11.7383 10.8333 12.4268 10.346 12.7271 9.64583H17.9688C18.4009 9.64583 18.75 9.29206 18.75 8.85417C18.75 8.41628 18.4009 8.0625 17.9688 8.0625H12.7271Z" fill="black"/>
            </Svg>
            <Text style={ { fontSize: 16, fontWeight: "bold", color: "#000000" } }>General</Text>
          </View>
          <View style={ styles.horizontalBar }></View>
          <View style={ styles.parametersText }>
            <View style={ styles.parametersName }>
              <Text style={ { fontSize: 12, fontWeight: "bold", color: "#9c9c9c" } }>Save credentials for connection</Text>
            </View>
            <View>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={saveCredentials ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={handleToggleSwitch}
                value={saveCredentials}
            />
            </View>
          </View>
        </View>
        <View style={ styles.parametersDiv }>
          <View style={ styles.parametersTitle }>
            <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Circle cx="12.5" cy="12.5" r="12.5" fill="#FEC600"/>
              <Path d="M11.9033 7.13141C12.2816 6.9562 12.7184 6.9562 13.0967 7.13141L18.6471 9.69611C18.8629 9.79515 19 10.011 19 10.2497C19 10.4884 18.8629 10.7042 18.6471 10.8033L13.0967 13.368C12.7184 13.5432 12.2816 13.5432 11.9033 13.368L6.35293 10.8033C6.13711 10.7017 6 10.4858 6 10.2497C6 10.0135 6.13711 9.79515 6.35293 9.69611L11.9033 7.13141ZM17.2963 12.3218L18.6471 12.9464C18.8629 13.0455 19 13.2613 19 13.5C19 13.7387 18.8629 13.9545 18.6471 14.0536L13.0967 16.6183C12.7184 16.7935 12.2816 16.7935 11.9033 16.6183L6.35293 14.0536C6.13711 13.952 6 13.7362 6 13.5C6 13.2638 6.13711 13.0455 6.35293 12.9464L7.70371 12.3218L11.5631 14.1044C12.1572 14.3786 12.8428 14.3786 13.4369 14.1044L17.2963 12.3218ZM13.4369 17.3547L17.2963 15.5721L18.6471 16.1967C18.8629 16.2958 19 16.5116 19 16.7503C19 16.989 18.8629 17.2049 18.6471 17.3039L13.0967 19.8686C12.7184 20.0438 12.2816 20.0438 11.9033 19.8686L6.35293 17.3039C6.13711 17.2023 6 16.9865 6 16.7503C6 16.5142 6.13711 16.2958 6.35293 16.1967L7.70371 15.5721L11.5631 17.3547C12.1572 17.6289 12.8428 17.6289 13.4369 17.3547Z" fill="black"/>
            </Svg>
            <Text style={ { fontSize: 16, fontWeight: "bold", color: "#000000" } }>Widgets</Text>
          </View>
          <View style={ styles.horizontalBar }></View>
          <View style={ styles.parametersText }>
            <View style={ styles.parametersName }>
              <Text style={ { fontSize: 12, fontWeight: "bold", color: "#9c9c9c" } }>Chaussure</Text>
            </View>
            <View style={ styles.parameterSwitch }>
              <Switch
                trackColor={{false: '#CB1515', true: '#81b0ff'}}
                thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={ styles.bottomPage }>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFF5EA",
  },
  parametersDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  parametersTitle: {
    width: "80%",
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: "20%",
  },
  horizontalBar: {
    width: "80%",
    height: "1%",
    backgroundColor: "grey",
    opacity: "0.8%",
  },
  parametersText: {
    width: "80%",
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20%",
    marginTop: "1%",
  },
  parametersName: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  bottomPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFF5EA",
  },
});
