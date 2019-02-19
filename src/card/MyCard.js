import React, { Component, Fragment } from 'react';


class MyCard extends Component {
   
    render() {
        return (
            <Fragment>
                <div className="card border-secondary mb-3" style={{maxwidth: '18rem'}}>
                <div className="card-header">Header</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title" name="title">{this.props.title}</h5>
                        <p className="card-text" name="description">{this.props.description}</p>
                        
                    </div>
                    </div>
            </Fragment>
        );
    }
}

export default MyCard;