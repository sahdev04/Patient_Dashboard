import React from 'react';
import { Text } from 'react-native';
import { MotiView } from 'moti';
import styles, { getStatusStyle } from '../styles/patientCardStyles';

export default function PatientInfoCard({ data, delay = 0 }) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 15 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 500, delay }}
      style={styles.card}
    >
      <Text style={styles.name}>{data.fullName}</Text>
      <Text style={styles.detail}>🆔 ID: <Text style={styles.value}>{data.id}</Text></Text>
      <Text style={styles.detail}>📦 Plan: <Text style={styles.value}>{data.plan}</Text></Text>
      <Text style={styles.detail}>📅 Next Delivery: <Text style={styles.value}>{data.nextDelivery}</Text></Text>
      <Text style={styles.detail}>💊 Remaining: <Text style={styles.value}>{data.remaining}</Text></Text>
      <Text style={styles.detail}>
        🔄 Status: <Text style={[styles.value, getStatusStyle(data.status)]}>{data.status}</Text>
        {'  '}|  💳 Billing: <Text style={styles.value}>{data.billing}</Text>
      </Text>
    </MotiView>
  );
}
