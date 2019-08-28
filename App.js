import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sample Text Entry</Text>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="New Task..." style={styles.input} />
        <Button title="Create"/>
      </View>
      <View>
        {/* list of tasks */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  
  inputWrapper: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    alignItems: "center"
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '75%',
  } 
});
