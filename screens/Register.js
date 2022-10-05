import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, VStack, Box, Input, Button } from 'native-base'

export default function Register() {
  return (
    <NativeBaseProvider >
    <VStack space={4} alignItems={"center"} >
    <Box width={'32'} height={'12'} alignItems={"center"} justifyItems={"center"} mt={16}>
      <Text style={{color:"#192a56", fontSize:30, fontWeight:"bold"}}> Register</Text>
    </Box>
    <Input variant="rounded" placeholder="Name" width={'80%'}/>
    <Input variant="rounded" placeholder="Email" width={'80%'}/>
    <Input variant="rounded" placeholder="PhoneNo" width={'80%'}/>
    <Input variant="rounded" placeholder="Password" width={'80%'}/>
   
    <Button mt={'10%'} size="md" variant="outline" colorScheme="success" width={'30%'}
    >
        Register
      </Button>  
    </VStack>
  </NativeBaseProvider>
  )
}