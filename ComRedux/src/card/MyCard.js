import React, { Component, Fragment } from 'react';

import { deleteCard } from '../form/formActions'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

class MyCard extends Component {


    render() {
        return (
            
            <Fragment>
                {this.props.infoCarros.map(carro => 
                    <div className="card border-secondary mb-3" key={carro.id} style={{maxwidth: '18rem'}}>
                    <div className="card-header">Header</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title" name="title">{carro.title}</h5>
                            <p className="card-text" name="description">{carro.description}</p>
                            <button type="button" className="btn btn-danger" onClick={() => this.props.deleteCard(carro.id)}>Remover</button>
                        </div>
                </div>
                )}
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({infoCarros: state.form.infoCarros,})
const mapDispatchToProps = dispatch => bindActionCreators({ deleteCard }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MyCard)