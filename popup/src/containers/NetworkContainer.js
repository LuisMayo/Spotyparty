import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommunicationHelper } from '../../../content-script/src/utils/communication'

class NetworkContainer extends Component {
  render() {
    let textInput = React.createRef();
    function createHost() {
      CommunicationHelper.getComunicationHelper().host(textInput.current.value);
    }
    function createClient() {
      CommunicationHelper.getComunicationHelper().connect(textInput.current.value);
    }
    return(
      <div>
        <input type="text" ref={textInput}>Room ID:</input>
        <input type="button" onClick="">Create Room</input><input type="button">Connect</input>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {
})(NetworkContainer)
