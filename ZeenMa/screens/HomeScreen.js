import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';


export default function HomeScreen( {navigation} ) {
  return (
    <View style={ styles.container }>
      <View style={ styles.topPage }>
        <View style={ styles.moneyAmmount }>
          <Text style={ { fontSize: 30, } }>2055€</Text>
        </View>
      </View>
      <View style={ styles.middlePage }>
        <View style={ styles.firstLine }>
          <View style={ styles.widget }>
            <TouchableOpacity style={ styles.widgetButton }>
              <Image
                source={require('../assets/images/graphical.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={ styles.widget }>
            <TouchableOpacity style={ styles.widgetButton }>
              <Image
                source={require('../assets/images/income.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={ styles.firstLine }>
          <View style={ styles.widget }>
            <TouchableOpacity style={ styles.widgetButton }>
              <Image
                source={require('../assets/images/conversion.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={ styles.widget }>
            <TouchableOpacity style={ styles.widgetButton }>
              <Image
                source={require('../assets/images/budget.png')}
                style={styles.image}
              />
            </TouchableOpacity>
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
    flex: 1,
    backgroundColor: "#FFF5EA",
    justifyContent: "center",
    alignItems: "center",
  },
  moneyAmmount: {
    width: "80%",
    height: "50%",
    display: "flex",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  middlePage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    backgroundColor: "#FFF5EA",
  },
  firstLine: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#FFF",
  },
  widget: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#FFF5EA",
    justifyContent: "center",
    alignItems: "center",
  },
  widgetButton: {
    width: "70%",
    height: "70%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: "50%",
    height: "50%",
  },
  bottomPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 0.5,
    backgroundColor: "#FFF5EA",
  }
});
