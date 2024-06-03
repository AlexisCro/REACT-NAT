import { Link, Stack } from 'expo-router';
import { Stylesheet, View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oups" }} />
      <View>
        <Text>404 - Not Found</Text>
        <Link to="/">Go Home</Link>
      </View>
    </>
  );
}