import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';
import Svg, { Path } from 'react-native-svg';


export default function ConversionScreen( {navigation} ) {
    const [euro, setEuro] = useState('');
    const [dollar, setDollar] = useState('');
    const [yen, setYen] = useState('');

    const handleConversion = (text) => {
        setEuro(text);
        const dollarValue = euro * 1.18;
        const yenValue = euro * 128;

        setDollar(dollarValue);
        setYen(yenValue);
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
                <View style={ styles.inputDiv }>
                    <View style={ styles.inputLabels }>
                        <Text style={ styles.labelText }>Euro</Text>
                    </View>
                    <TextInput style={ styles.inputs }
                        placeholder="Euro"
                        onChangeText={(text) => setEuro(text)}
                        value={euro}
                    >
                    </TextInput>
                    <View style={ styles.inputLabels }>
                        <Text style={ styles.labelText }>Dollar</Text>
                    </View>
                    <View style={ styles.moneyDiv }>
                        <Text style={ { fontSize: 20, } }>{dollar} $</Text>
                    </View>
                    <View style={ styles.inputLabels }>
                        <Text style={ styles.labelText }>Yen</Text>
                    </View>
                    <View style={ styles.moneyDiv }>
                        <Text style={ { fontSize: 20, } }>{yen} ¥</Text>
                    </View>
                </View>
            </View>
            <View style={ styles.bottomPage }>
                <View style={ styles.loginButtonDiv }>
                    <TouchableOpacity style={ styles.loginButton } onPress={ handleConversion }>
                        <Text style={ { fontWeight: "bold" } }>Change Money</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
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
        height:"100%",
        display: "flex",
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
    inputLabels: {
        width: "80%",
        marginBottom: "2%",
        marginTop: "2%",
    },
    moneyDiv: {
        width: "80%",
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF500",
        borderRadius: 15,
    },
    bottomPage: {
        width: "100%",
        height:"100%",
        display: "flex",
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
