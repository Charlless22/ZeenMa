import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { doc, getDoc } from 'firebase/firestore';
import { firestore, auth } from "../config/firebase";

export default function BudgetingScreen( {navigation} ) {
  const [userMoney, setUserMoney] = useState(0);
  const [addMoney, setAddMoney] = useState(0);
  const [removeMoney, setRemoveMoney] = useState(0);


  useEffect(() => {
    // Fetch the money value from Firestore and set it as the initial userMoney
    const fetchUserMoney = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(firestore, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const moneyFromFirestore = userDoc.data().money;
            setUserMoney(moneyFromFirestore);
          } else {
            console.log('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching user money:', error);
      }
    };

    fetchUserMoney();
  }, []);

  // Function to handle the calculation and update userMoney
  const handleCalcul = () => {
    const newAddMoney = parseFloat(addMoney);
    const newRemoveMoney = parseFloat(removeMoney);

    // Perform calculations based on user input
    const updatedUserMoney = userMoney + newAddMoney - newRemoveMoney;

    // Update userMoney state with the new calculated value
    setUserMoney(updatedUserMoney);
  };

  return (
    <View style={ styles.container}>
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
        <View style={ styles.moneyAmmount }>
          <Text style={ { fontSize: 30, } }> { userMoney }€</Text>
        </View>
        <View style={ styles.calculsInput }>
          <TextInput
              style={styles.inputs}
              placeholder="add money"
              onChangeText={(text) => setAddMoney(text)}
              value={addMoney}
          />
          <TextInput
              style={styles.inputs}
              placeholder="remove money"
              onChangeText={(text) => setRemoveMoney(text)}
              value={removeMoney}
          />
        </View>
      </View>
      <View style={ styles.bottomPage }>
      <View style={ styles.calculButtonDiv }>
          <TouchableOpacity style={ styles.calculButton } onPress={handleCalcul}>
            <Text style={ { fontWeight: "bold" } }>Calcul</Text>
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
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF5EA",
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
  calculsInput: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF5EA",
  },
  inputs: {
    width: "80%",
    height: "30%",
    backgroundColor: "#FFF",
    opacity: 0.5,
    borderColor: "#FFF500",
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 10,
  },
  bottomPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFF5EA",
  },
  calculButtonDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calculButton: {
    width: "80%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF500",
    borderRadius: 10,
  }
});
