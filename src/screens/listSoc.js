import * as React from 'react';
import { Text, Box, FlatList, Pressable } from 'native-base';

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  // Set Dummy Data with Array
  const appList = ['Netflix', 'Youtube', 'Instagram'];

  // Make Function handle press to get value per list
  const handlePress = (data) => {
    navigation.navigate('Detail Social', { data });
  };

  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <FlatList
        data={appList}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <Text fontSize={30} margin={5}>
              {item}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />
    </Box>
  );
}
