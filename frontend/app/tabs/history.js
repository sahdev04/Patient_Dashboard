import { View, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchShipmentHistory } from '../../api/apiClient';
import { FlashList } from '@shopify/flash-list';
import ShipmentItem from '../../components/ShipmentItem';
import { globalStyles } from '../../styles/globalStyles';

export default function History() {
  const { data, isLoading } = useQuery({
    queryKey: ['shipments'],
    queryFn: fetchShipmentHistory,
  });

  if (isLoading) return <ActivityIndicator style={{ marginTop: 50 }} />;

  return (
    <View style={globalStyles.container}>
      <FlashList
        data={data}
        renderItem={({ item }) => <ShipmentItem item={item} />}
        estimatedItemSize={80}
      />
    </View>
  );
}
