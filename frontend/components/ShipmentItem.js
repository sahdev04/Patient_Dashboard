import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import styles from '../styles/shipmentCardStyles';

export default function ShipmentItem({ item }) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 500 }}
      style={styles.card}
    >
      <Text style={styles.text}>
        Date: <Text style={styles.value}>{item.date}</Text>
      </Text>
      <Text style={styles.text}>
        Status: <Text style={styles.value}>{item.status}</Text>
      </Text>
      <Text style={styles.text}>
        Qty: <Text style={styles.value}>{item.quantity}</Text>
      </Text>
    </MotiView>
  );
}
