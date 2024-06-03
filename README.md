# React Native 
## Create a project 
`npx create-expo-app <appname> --template blank`

`template blank` arugument is to avoid to have a template when you create a new app. 

## View and mobile dev
The view is a basic component of the user interface in React Native. This is the file called to display screen. 

## App files
- App : contains whole elements of navigation (routing). App file structure determine the app navigation. 
- Assets : 
- Components : contains all components of the app except views
- Views : file call for build a screen with different components
- Constants : Contains all constants of the app (color, size, ...)
- Hooks : Contains custom hooks 
- Scripts :
- app.json : 

## Expo CLI : 
Permit to launch, deploy, build the app. 

## EAS CLI :
Build and deploy on stores.

```bash
npm install -g eas-cli
```

## Expo router
This is a Router for React Native whose permit to navigate in the different screens by using the file system. 

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

## Basic components 
React Native is a framework which is permit to create mobile applications cross-platforms by using React. It's based on React components. 

It's better to use mainly core-components. 

Core-components are basic components which they permit to create user interface. Its use native components. 