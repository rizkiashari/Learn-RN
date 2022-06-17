/* eslint-disable react-native/no-inline-styles*/
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
} from 'react-native';
import Contoh from './contoh';

const Texts = ({name, colors}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <View>
      {isShow ? (
        <Text style={{fontSize: 20, marginTop: 50}}>Text Show</Text>
      ) : (
        <Text style={{fontSize: 20, marginTop: 50}}>Text Hide</Text>
      )}
      <Button title="Press Me" onPress={() => console.log('Joko')} />
      <Contoh>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <TextInput
          keyboardType="numeric"
          // style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
        />
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{height: 200}}
        />
      </Contoh>
      {isShow ? (
        <TouchableOpacity onPress={() => setIsShow(false)}>
          <Text style={{fontSize: 20, marginTop: 50}}> Button Show</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setIsShow(true)}>
          <Text style={{fontSize: 20, marginTop: 50}}>Button Hide</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  color: colors => ({
    color: colors,
    fontSize: 50,
  }),
});

export default Texts;
