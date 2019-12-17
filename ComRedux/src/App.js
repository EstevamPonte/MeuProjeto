import React, { Component } from 'react';
import './App.css';
import Form from './form/Form'

class App extends Component {
  _addInfo(title, description){
    const important = {
        title,
        description,

        id: this.state.importants.length + 1
    }
    this.setState({
        importants: this.state.importants.concat([important])
    })
}

  render() {
    return (
    <div className='container'>
      <Form addInfo={this._addInfo.bind(this)}/>
    </div>
    );
  }
}

export default App;
