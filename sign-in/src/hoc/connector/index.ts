import {ConnectedProps, connect} from 'react-redux';
import {MapDisaptch, MapState} from './types';

const mapState: MapState = ({signIn}) => ({
  signIn
});

const mapDispatch: MapDisaptch = (dispatch) => ({
  dispatch: (action) => dispatch(action)
});

const connector = connect(mapState, mapDispatch);

type DucksProps = ConnectedProps<typeof connector>;

export type {DucksProps};
export default connector;
