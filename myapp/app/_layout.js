import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';

export default function RootLayout() {
  // load color
  // load fonts

  // display splashscreen
  // hide splashscreen when everything is loaded

  // Use hook useEffect (and useState if needed) to manage the state of the splashscreen

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  )
}