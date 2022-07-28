import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

export default function App() {
  useEffect(() => {}, []);
  const sign = () => {
   
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Button title="Test Crash" />
      <Button title="Sign In" />
    </View>
  );
}
