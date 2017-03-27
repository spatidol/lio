import { connect } from 'react-redux';
import { loadLios } from '../../action-creators';
import AllLios from './AllLios';

const mapStateToProps = function (state) {
  return {
    lios: state.lios
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadLios: function () {
      const thunk = loadLios();
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const AllLiosContainer = componentCreator(AllLios);
export default AllLiosContainer;
