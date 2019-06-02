import React, { Component, Fragment } from 'react';
import axios from 'axios'

class MyCard extends Component {
    
    deletar(id) {
        axios.delete( 'http://localhost:3000/importants/' + id)
            .then(resp => console.log('oii'))
    }

    removendo() {
       
        let id = this.props.id
        console.log (id)
        this.deletar(id)
        
    }

    render() {
        return (
            <Fragment>
                <div className="card border-secondary mb-3" style={{maxwidth: '18rem'}}>
                <div className="card-header">Header</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title" name="title">{this.props.title}</h5>
                        <p className="card-text" name="description">{this.props.description}</p>
                        <button type="button" className="btn btn-danger" onClick={this.removendo.bind(this)}>Remover</button>
                    </div>
                    </div>
            </Fragment>
        );
    }
}

export default MyCard;