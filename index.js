// import {Navigation} from 'react-native-navigation';
// import {HomeScreen} from '~/app';

// Navigation.registerComponent('HomeScreen', () => HomeScreen);
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'HomeScreen',
//             },
//           },
//         ],
//       },
//     },
//   });
// });

import {AppRegistry} from 'react-native';
import App from './src/app.tsx';

AppRegistry.registerComponent('rnhw', () => App);
export default App;
