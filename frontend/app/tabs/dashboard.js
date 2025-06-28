import { View, Text, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '../../api/apiClient';
import PatientInfoCard from '../../components/PatientInfoCard';
import { globalStyles } from '../../styles/globalStyles';

export default function Dashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
  });

  if (isLoading) return <ActivityIndicator style={{ marginTop: 50 }} />;
  if (isError) return <View><Text>Error loading data.</Text></View>;

  return (
    <View style={globalStyles.container}>
      <PatientInfoCard data={data} />
    </View>
  );
}
