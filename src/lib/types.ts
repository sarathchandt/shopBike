import type {
    CompositeScreenProps,
    NavigatorScreenParams,
  } from '@react-navigation/native';
  import type { StackScreenProps } from '@react-navigation/stack';
  import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


  export type BottomTabParamList = {
    Home: undefined;
    Map: undefined;
    Cart: undefined;
    Profile: undefined;
    Docs: undefined;

  };

  export type RootStackParamList = {
    Tab: NavigatorScreenParams<BottomTabParamList>;
    singleItemScreen:undefined
    shopingCartScreen: undefined
  };

  export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;


  export type BottomScreenProps<T extends keyof BottomTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<BottomTabParamList, T>,
        StackScreenProps<RootStackParamList>>;