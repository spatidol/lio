import { connect } from 'react-redux';
import SingleLio from './SingleLio';
import { loadLio } from '../../action-creators';

const mapStateToProps = function (state) {
  return {
    lio: state.selectedLio
  };
};


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadSingleLio: function () {
      const lioId = ownProps.params.lioId;
      const thunk = loadOneLio(lioId);
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const SingleLioContainer = componentCreator(SingleLio);
export default SingleLioContainer;
