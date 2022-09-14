import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import {TypeResRandomUser} from '../../constant/types/res_randomUser';
import styles from './styles';

const CardList = ({item}: {item: TypeResRandomUser}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.wrapperContent}>
        {[item.first_name, item.last_name].map((name, index) => (
          <Text key={index} style={styles.title}>
            {name}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default CardList;
