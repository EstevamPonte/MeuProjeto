import React, { Component, Fragment } from 'react';
import MyCard from '../card/MyCard'
import axios from 'axios'

class Form extends Component {

   constructor(props) {
      super(props)
      this.state = {
         infoCarros: [],
         title: "",
         description: ""
      }
      this._hendleSubmit = this._hendleSubmit.bind(this)
      this.hendleKey = this.hendleKey.bind(this)
   }

   componentDidMount() {
      this._serchInfo()
   }
   
   _serchInfo() {
      axios.get('http://localhost:3004/importants')
         .then(resp => {
            this.setState({infoCarros: resp.data})
            this.addInfoCard()
         })
         .catch(error => console.log('errouu'))
   }

   _postInfo(carro) {
      axios.post('http://localhost:3004/importants', carro)
         .then(resp => this._serchInfo())
         .catch(error => console.log (error))
   }

   addInfoCard() {
      return this.state.infoCarros.map((carro) => <MyCard
         title={carro.title} description={carro.description}
         key={carro.id} id={carro.id} onDelete={this.handleDelete.bind(this)}/>)
   }

   _handleChange(event){
      event.preventDefault()
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   _hendleSubmit(event) {
      let carro = {
         title: this.state.title,
         description: this.state.description,
      }
      this._postInfo(carro)
   }

   handleDelete(id) {
      axios.delete( 'http://localhost:3004/importants/' + id)
          .then(resp => this._serchInfo())
  }

  hendleKey(event) {
     if(event.key === 'Enter'){
         this._hendleSubmit()
     }
  }

   render() {
      const infoCard = this.addInfoCard()
      const { title, description } = this.state
      return (
         <Fragment>
            <form onSubmit={this._hendleSubmit}>
               <div className="input-group mb-3" >
                  <div className="input-group-prepend">
                     <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={this._hendleSubmit}>Botão</button>
                  </div>
                  <div>
                     <input type="text" key="title" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"
                        name="title"
                        onKeyUp={this.hendleKey}
                        onChange={this._handleChange.bind(this)}
                        value={title}
                      />
                     <input type="text" key="description" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"
                        name="description"
                        onKeyUp={this.hendleKey}
                        onChange={this._handleChange.bind(this)}
                        values={description}
                      />
                  </div>
               </div>
            </form>
            {infoCard}
         </Fragment>
      );
   }
}

export default Form;