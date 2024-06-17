import {ConnectedProps, connect} from 'react-redux';
import {MapDisaptch, MapState} from './types';
import {push} from 'redux-first-history';

const mapState: MapState = (state) => state;

const mapDispatch: MapDisaptch = (dispatch) => ({
  dispatch: (action) => dispatch(action),
  navigate: (path, state) => dispatch(push(path, state))
});

const connector = connect(mapState, mapDispatch);

type DucksProps = ConnectedProps<typeof connector>;

export type {DucksProps};
export default connector;
