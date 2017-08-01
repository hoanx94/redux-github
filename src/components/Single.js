import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../actions/actions';
import * as Selectors from '../data/selectors';
import { withRouter } from 'react-router-dom';
import * as Services from '../services/services';

class Single extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPost(id);
  }

  render() {
    let post = this.props.post;
    return(
      <div className="single">
        <h3>{post.title}</h3>
        <small>{post.date}</small>
        <p>{post.body}</p>
        <small>{post.author}</small>
      </div>
    );
  }
}


Single.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    post: Selectors.post(state).toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Single));
