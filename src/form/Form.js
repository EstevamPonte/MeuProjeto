import React, { Component, Fragment} from 'react';
import MyCard from '../card/MyCard'
import jQuery from 'jquery'

class Form extends Component {
    componentDidMount(){
        this._serchInfo()
        this._Info(this._addInfo)
    }

    _serchInfo(){
        jQuery.ajax({
            method: 'GET',
            url: 'http://localhost:3004/importants',
            success: (importants) => {
                this.setState({importants: importants})
            },
        })
    }

    _Info(){
        jQuery.ajax({
            method: 'POST',
            url: 'http://localhost:3004/importants',
            data: this._addInfo,
            success: function(data) { alert('data: ' + data); },
            contentType: "application/json",
            dataType: 'json'
        })
 }

    constructor(props) {
        super(props)
        this.state = {
            importants: []
        }
        
    }

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

    _getInfo() {
        
        return this.state.importants.map( (important) => <MyCard 
            title={important.title} description={important.description} 
            key={important.id}/>)       
    }

    _hendleSubmit(event) {
        event.preventDefault();
        let title = this._title.value
        let description = this._description.value

        this._addInfo(title, description)
    }

   
    
    render() {
        const important = this._getInfo()
        return (
            <Fragment>
                <form>
                    <div className="input-group mb-3" onSubmit={this._hendleSubmit.bind(this)}>
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={this._hendleSubmit.bind(this)}>Botão</button>
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" ref={ input => this._title = input}/>
                            <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" ref={ input => this._description = input}/>
                        </div>
                    </div>
                </form>
                {important}
            </Fragment>
        );
    }
}

export default Form;