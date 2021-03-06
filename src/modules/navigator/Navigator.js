import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import InboxViewContainer from '../inbox/InboxViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';
import MessageDetailViewContainer from './../messageDetail/MessageDetailViewContainer';
import CreateMessageViewContainer from './../createMessage/CreateMessageViewContainer'
import ContactViewContainer from './../contact/ContactViewContainer'

const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
// export const MainScreenNavigator = TabNavigator({
//   Counter: {screen: InboxViewContainer},
//   Color: {screen: ColorViewContainer}
// }, {
//   tabBarOptions: {
//     ...Platform.select({
//       android: {
//         activeTintColor: activeColor,
//         indicatorStyle: {backgroundColor: activeColor},
//         style: {backgroundColor: headerColor}
//       }
//     })
//   }
// });

// MainScreenNavigator.navigationOptions = {
//   title: 'MessageCenter',
//   header: {
//     titleStyle: {color: 'white'},
//     style: {
//       backgroundColor: headerColor,
//       elevation: 0 // disable header elevation when TabNavigator visible
//     }
//   }
// };

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: InboxViewContainer},
  InfiniteColorStack: {screen: ColorViewContainer},
  MessageDetailStack:{screen:MessageDetailViewContainer},
  CreateMessageStack:{screen:CreateMessageViewContainer},
  ContactStack:{screen:ContactViewContainer}
});

export default AppNavigator;
