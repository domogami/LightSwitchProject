import React from 'react';
import { StyleSheet, Linking, Text, View, Button, Alert, AppRegistry, TextInput } from 'react-native';

export default class App extends React.Component {

constructor() {
  super()
  this.state = {
    value: "Edit Me!"
  }
  this.handleChangeText = this.handleChangeText.bind(this)
}

handleChangeText(newText) {
  this.setState({
    value: newText
  })
}

onPress() {

  fetch('http://192.168.43.6', {
 method: 'GET',
 headers: {
   Accept: '/turn/on',
   'Content-Type': '/turn/on',
 },
})
}

onPress1() {
    fetch('http://192.168.43.6', {
   method: 'GET',
   headers: {
     Accept: '/turn/off',
     'Content-Type': '/turn/off',
   },
 })
}

render() {
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={this.state.value}
        onChangeText={this.handleChangeText}
      />
      <Text style={styles.titleText}> {this.state.value} </Text>
      <View style = {styles.buttonContainer}>
        <Button
          onPress={this.onPress}
          title="Hello"
          color="#FFFFFF"
          accessibilityLabel="Tap on Me"
          fontSize="30"
        />
      </View>

      <View style = {styles.buttonContainer}>
        <Button
          onPress={this.onPress1}
          title="Hello2"
          color="#FFFFFF"
          accessibilityLabel="Tap on Me"
          fontSize="30"
        />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
buttonContainer: {
  backgroundColor: '#2E9298',
  borderRadius: 10,
  padding: 10,
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 10,
  shadowOpacity: 0.25
},
customBtnTxt: {
  fontSize: 40,
  fontWeight: '400',
  color: "#fff",
},
titleText: {
 fontSize: 20,
 fontWeight: 'bold',
}
});
