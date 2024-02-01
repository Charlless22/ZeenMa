import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Modal } from 'react-native';
import { auth, firestore } from "../config/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc, setDoc} from 'firebase/firestore';

export default function HomeScreen({ navigation }) {
  const [isAddMoneyModalVisible, setAddMoneyModalVisible] = useState(false);
  const [isRemoveMoneyModalVisible, setRemoveMoneyModalVisible] = useState(false);
  const [userMoney, setUserMoney] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDocRef = doc(firestore, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserMoney(userDoc.data().money);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const addMoney = async () => {
    const newMoneyAdd = parseFloat(amountToAdd);
    const newMoney = userMoney + newMoneyAdd;
    setUserMoney(newMoney);
    await updateMoneyInFirestore({ money: newMoney, moneyAdd: newMoneyAdd });
    closeAddMoneyModal();
  };
  const removeMoney = async () => {
    const newMoneyAdd = -parseFloat(amountToAdd); // Negative value for money removal
    const newMoney = userMoney + newMoneyAdd;
    setUserMoney(newMoney);
    await updateMoneyInFirestore({ money: newMoney, moneyAdd: newMoneyAdd });
    closeRemoveMoneyModal();
  };
  
  const updateMoneyInFirestore = async (dataToUpdate) => {
    if (user) {
      const userDocRef = doc(firestore, 'users', user.uid);
      try {
        await updateDoc(userDocRef, dataToUpdate);
      } catch (error) {
        console.error('Error updating user data:', error);
        // Handle any other errors, such as no network connection
      }
    }
  };

  // Modal functions
  const openAddMoneyModal = () => setAddMoneyModalVisible(true);
  const closeAddMoneyModal = () => {
    setAmountToAdd('');
    setAddMoneyModalVisible(false);
  };

  const openRemoveMoneyModal = () => setRemoveMoneyModalVisible(true);
  const closeRemoveMoneyModal = () => {
    setAmountToAdd('');
    setRemoveMoneyModalVisible(false);
  };

  return (
    <View style={ styles.container }>
      <View style={ styles.topPage }>
        <View style={ styles.moneyAmmount }>
          <Text style={ { fontSize: 30, } }> { userMoney }€</Text>
        </View>
      </View>
      <View style={ styles.middlePage }>
        <View style={ styles.firstLine }>
          <View style={ styles.widget }>
            <TouchableOpacity style={ styles.widgetButton } onPress={() => navigation.navigate("ParameterScreen")}>
              <Image
                source={require('../assets/images/parameter.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={ styles.widget }>
            <TouchableOpacity style={ styles.widgetButton } onPress={ () => navigation.navigate("ProfileScreen") }>
              <Image
                source={require('../assets/images/profile.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={ styles.firstLine }>
          <View style={ styles.widget }>
            <TouchableOpacity style={ styles.widgetButton } onPress={ () => navigation.navigate("ConversionScreen") }>
              <Image
                source={require('../assets/images/conversion.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={ styles.widget }>
            <TouchableOpacity style={ styles.widgetButton } onPress={ () => navigation.navigate("BudgetingScreen") }>
              <Image
                source={require('../assets/images/budget.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={ styles.bottomPage }>
        <View style={ styles.moneyButtonDiv }>
          <TouchableOpacity style={ styles.moneyButton } onPress={openAddMoneyModal}>
            <Text style={ { fontWeight: "bold" } }>Add Money</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.moneyButtonDiv }>
          <TouchableOpacity style={ styles.moneyButton } onPress={ openRemoveMoneyModal }>
            <Text style={ { fontWeight: "bold" } }>Remove Money</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={isAddMoneyModalVisible} animationType="slide">
        <View  style={styles.modalPage}>
          <View style={ styles.modalMoneyDiv }>
            <Text style={ { marginBottom: 20, } }>Enter amount to add:</Text>
            <TextInput
              style={ styles.inputs }
              value={amountToAdd}
              onChangeText={(text) => setAmountToAdd(text)}
            />
          </View>
          <View style={ styles.modalButtonDiv }>
            <TouchableOpacity  style={ styles.moneyButtonModal } title="Add" onPress={addMoney}>
              <Text style={ { fontWeight: "bold" } }>Add Money</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={ styles.moneyButtonModal } title="Cancel" onPress={closeAddMoneyModal}>
              <Text style={ { fontWeight: "bold" } }>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={isRemoveMoneyModalVisible} animationType="slide">
        <View  style={styles.modalPage}>
          <View style={ styles.modalMoneyDiv }>
            <Text style={ { marginBottom: 20, } }>Enter amount to add:</Text>
            <TextInput
              style={ styles.inputs }
              value={amountToAdd}
              onChangeText={(text) => setAmountToAdd(text)}
            />
          </View>
          <View style={ styles.modalButtonDiv }>
            <TouchableOpacity  style={ styles.moneyButtonModal } title="Add" onPress={removeMoney}>
              <Text style={ { fontWeight: "bold" } }>Remove Money</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={ styles.moneyButtonModal } title="Cancel" onPress={closeRemoveMoneyModal}>
              <Text style={ { fontWeight: "bold" } }>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  },
  moneyButtonDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  moneyButton: {
    width: "80%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF500",
    borderRadius: 10,
  },
  modalPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "red",
  },
  modalButtonDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFF5EA",
  },
  modalMoneyDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFF5EA",
  },
  inputs: {
    width: "80%",
    height: "10%",
    backgroundColor: "#FFF",
    opacity: 0.5,
    borderColor: "#FFF500",
    borderWidth: 1.5,
    borderRadius: 10,
    marginTop: 10,
  },
  moneyButtonModal: {
    width: "80%",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF500",
    borderRadius: 10,
    marginBottom: 50
  },
});
