import * as React from 'react';
import { Text, Box, Pressable } from 'native-base';

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      <Pressable onPress={() => navigation.navigate('IncDec')}>
        <Text
          style={{
            backgroundColor: 'green',
            padding: 10,
            marginTop: 20,
            borderRadius: 10,
          }}
        >
          Screen Increment and Decrement
        </Text>
      </Pressable>
    </Box>
  );
}
