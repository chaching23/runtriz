import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  INCREMENT,
  DECREMENT,
  INCREASEDELAY,
  DECREASEDELAY,
} from '../store/constants';

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const plus = () => {
    dispatch({type: INCREMENT});
  };

  const minus = () => {
    dispatch({type: DECREMENT});
  };

  const increaseAysnc = () => {
    dispatch({type: INCREASEDELAY});
  };

  const decreaseAysnc = () => {
    dispatch({type: DECREASEDELAY});
  };

  return (
    <SafeAreaView>
      <Text>Counter</Text>
      <TouchableOpacity onPress={increaseAysnc}>
        <Text>Increase Aysnc </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={plus}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text>{state}</Text>
        <TouchableOpacity onPress={minus}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={decreaseAysnc}>
        <Text>Decrease Aysnc </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Counter;
