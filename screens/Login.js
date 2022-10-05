import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box } from "native-base";

export default function Login() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  )
}