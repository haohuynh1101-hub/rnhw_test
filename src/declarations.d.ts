/* eslint-disable @typescript-eslint/no-unused-vars */
import {RootStackParamList} from './navigators';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
