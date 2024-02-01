import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { doc, getDoc } from 'firebase/firestore';
import { firestore, auth } from "../config/firebase";
import { signOut } from 'firebase/auth';

export default function ProfileScreen( {navigation} ) {
  const [userMoney, setUserMoney] = useState(0);

  const handleLogout = async ()=> {
    await signOut(auth);
    navigation.navigate("Login");
  }
  useEffect(() => {
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
            <View style={ styles.topMiddlePage }>
                <View style={ styles.profilePhoto }>
                    <TouchableOpacity>
                      <Image source={require('../assets/images/profile.png')} style={{ width: 100, height: 100 }}>
                      </Image>
                    </TouchableOpacity>
                </View>
                <View style={ styles.profileName }>
                    <Text style={ { textAlign: "center", fontWeight: "bold",fontSize: 16, color: "#000000"} }>
                        {[
                            "Charles",
                            "Delachapelle",
                        ].join('\n')}
                    </Text>
                </View>
            </View>
            <View style={styles.middleMiddlePage}>
                <View style={ styles.horizontalBar }></View>
            </View>
            <View style={ styles.bottomMiddlePage }>
                <View style={ styles.numberServicesText }>
                    <Text style={ { color: "#000000" } }>User Money :</Text>
                </View>
                <View style={ styles.numberServices }>
                    <Text>{userMoney}€</Text>
                </View>
            </View>
        </View>
        <View style={ styles.bottomPage }>
            <View style={ styles.logoutButtonDiv }>
                <TouchableOpacity style={ styles.logoutButton } onPress={ handleLogout }>
                    <Text style={ { color: "red" } }>Logout</Text>
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
      flexDirection: "column",
    },
    topPage: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      flex: 0.5,
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF5EA",
    },
    topMiddlePage: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1.5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF5EA",

    },
    profilePhoto: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    profileName: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        color: "#FFF",
    },
    middleMiddlePage: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 0.5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    horizontalBar: {
        width: "80%",
        height: "1%",
        backgroundColor: "grey",
        opacity: "0.8%",
    },
    bottomMiddlePage: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1.5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
              backgroundColor: "#FFF5EA",

    },
    numberServices: {
        width: "80%",
        height: "20%",
        borderRadius: 10,
        backgroundColor: "#FFF500",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 0.5,
        marginBottom: 10
    },
    numberServicesText: {
        width: "80%",
        marginBottom: 10,
    },
    bottomPage: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 0.5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
              backgroundColor: "#FFF5EA",

    },
    logoutButtonDiv: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logoutButton: {
        width: "80%",
        height: "30%",
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    navBarDiv: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    navBar: {
        width: "65%",
        height: "35%",
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FEC600",
        borderRadius: 10,
        marginBottom: "5%",
        gap: "35%"
    },
});
