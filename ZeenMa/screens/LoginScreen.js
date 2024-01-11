import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export default function ItemsScreen( {navigation} ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={ styles.topPage }>
        <View style={ styles.logoDiv}>
          <Svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100.000000pt" height="100.000000pt" viewBox="0 0 240.000000 240.000000" preserveAspectRatio="xMidYMid meet">
            <G transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <Path d="M175 2388 c-63 -23 -121 -75 -153 -138 -16 -33 -17 -104 -17 -1050 0 -965 1 -1017 18 -1052 28 -54 73 -97 132 -124 l52 -24 1004 2 c959 3 1006 4 1042 22 48 24 99 75 123 123 18 36 19 80 19 1053 0 965 -1 1017 -18 1052 -27 54 -72 97 -130 124 l-52 24 -995 -1 c-676 0 -1005 -4 -1025 -11z m1175 -128 c290 -38 524 -165 673 -365 151 -203 216 -438 204 -735 -9 -238 -54 -382 -175 -564 -85 -126 -265 -268 -424 -333 -261 -106 -604 -101 -832 14 -300 151 -480 413 -536 783 l-13 85 -31 -155 c-24 -116 -35 -155 -46 -155 -18 0 -20 -13 33 244 23 113 48 206 54 208 7 3 13 -19 17 -64 19 -216 43 -328 100 -461 121 -288 381 -491 685 -537 125 -19 197 -19 328 0 383 54 701 339 788 706 27 112 32 379 10 511 -69 414 -349 698 -765 777 -270 51 -547 -13 -760 -177 -84 -65 -191 -183 -242 -269 -63 -106 -142 -313 -125 -329 3 -3 97 22 209 56 335 102 356 106 382 69 14 -21 15 -21 14 11 -2 58 58 89 100 53 11 -10 100 -137 198 -283 343 -512 374 -558 388 -563 8 -3 22 0 31 7 15 11 14 31 -14 276 -61 534 -81 708 -81 719 0 38 84 68 108 39 12 -15 362 -714 398 -795 14 -33 19 -55 13 -59 -6 -3 -12 -4 -14 -3 -2 2 -96 192 -209 422 -186 375 -209 417 -230 417 -33 0 -38 -20 -26 -119 91 -774 101 -883 86 -905 -18 -29 -47 -37 -78 -22 -24 12 -42 38 -387 554 -148 221 -207 302 -221 302 -43 0 -39 -28 31 -270 201 -690 204 -700 188 -729 -13 -22 -48 -37 -249 -105 -218 -74 -235 -78 -259 -65 -46 26 -51 -3 85 589 41 179 83 363 94 409 18 81 15 121 -9 121 -5 0 -121 -34 -258 -75 -328 -99 -316 -96 -326 -86 -13 13 36 179 82 277 54 115 112 196 205 290 129 129 265 209 430 254 135 37 248 46 376 30z m82 -109 c105 -27 189 -65 284 -127 446 -294 541 -985 194 -1417 -266 -332 -715 -422 -1108 -223 -29 14 -52 30 -52 34 0 4 100 41 223 82 218 74 222 76 240 111 17 36 17 37 -19 160 -38 131 -110 377 -188 643 -26 88 -45 163 -44 168 4 10 61 -72 363 -522 109 -162 207 -303 219 -312 51 -42 146 1 146 65 0 18 -27 244 -59 502 -33 259 -57 472 -55 474 2 2 6 2 8 0 2 -2 96 -189 209 -414 113 -226 212 -416 220 -423 18 -15 44 -6 57 19 8 15 -32 102 -201 441 -116 233 -218 431 -226 441 -11 12 -31 17 -64 17 -39 0 -51 -4 -68 -26 -12 -15 -21 -40 -21 -57 0 -26 33 -302 99 -825 11 -89 14 -141 7 -139 -10 3 -80 105 -390 567 -164 244 -201 290 -239 290 -26 0 -87 -35 -87 -51 0 -7 -13 -9 -37 -5 -30 5 -82 -7 -246 -58 -114 -36 -212 -68 -218 -71 -18 -12 -8 42 24 120 109 268 330 461 612 535 100 27 314 27 417 1z m-594 -624 c8 -9 -20 -143 -107 -500 -64 -267 -120 -489 -123 -492 -10 -10 -92 91 -142 174 -54 90 -102 220 -122 331 -14 77 -18 258 -8 320 l6 36 221 71 c237 75 259 80 275 60z"/>
              <Path d="M871 1408 c-17 -73 -66 -288 -110 -478 -93 -402 -100 -447 -78 -456 14 -5 411 123 460 148 9 5 17 15 17 24 0 8 -34 133 -76 277 -42 144 -99 341 -126 437 -28 96 -52 176 -53 178 -2 2 -17 -57 -34 -130z m188 -478 c45 -151 77 -278 73 -282 -11 -11 -432 -152 -437 -147 -2 3 20 101 49 219 30 118 80 323 112 455 l58 240 32 -105 c18 -58 69 -229 113 -380z"/>
            </G>
          </Svg>
        </View>
      </View>
      <View style={ styles.middlePage }>
        <View style={ styles.inputDiv }>
          <View style={ styles.loginTitle }>
            <Text style={ { fontSize: 20, fontWeight: "bold" } }>Welcome back on ZeenMa 👋</Text>
          </View>
          <View style={ styles.test }>
            <View style={ styles.labels }>
              <Text style={ { color: "black" } }>Email</Text>
            </View>
            <TextInput
                style={styles.inputs}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <View style={ styles.labels }>
                <Text style={ { color: "black" } }>Password</Text>
            </View>
            <TextInput
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
          </View>
        </View>
      </View>
      <View style={ styles.bottomPage }>
        <View style={ styles.loginButtonDiv }>
          <TouchableOpacity style={ styles.loginButton } onPress={() => navigation.navigate("Home")}>
            <Text style={ { fontWeight: "bold" } }>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.bottomSvg }></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column'
  },
  topPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 0.5,
    backgroundColor: "#FFF5EA",
  },
  logoDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middlePage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    backgroundColor: "#FFF5EA",
  },
  loginTitle: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5EA",
  },
  test: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
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
    flex: 0.5,
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

