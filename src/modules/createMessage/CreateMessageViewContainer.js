import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import CreateMessageView from './CreateMessageView';
import * as CreateMessageStateActions from '../createMessage/CreateMessageState';

export default connect(
   null,
   dispatch => {
     return {
       navigate: bindActionCreators(NavigationActions.navigate, dispatch),
       CreateMessageStateActions: bindActionCreators(CreateMessageStateActions, dispatch)
     };
   }
)(CreateMessageView);
