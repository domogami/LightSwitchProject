import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry } from 'react-native';

export default class App extends React.Component {

  onPress() {
    Alert.alert('Fuck You!');
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is some text</Text>
        <View style = {styles.buttonContainer}>
          <Button
            onPress={this.onPress}
            title="Hello"
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
  }
});
