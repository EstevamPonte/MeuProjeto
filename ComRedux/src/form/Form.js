import React, { Component, Fragment } from 'react';
import MyCard from '../card/MyCard'

import { serchInfo, postInfo, handleChangeDescription, handleChangeTitle } from './formActions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Form extends Component {

   componentDidMount() {
      this.props.serchInfo()
   }

  hendleKey(event) {
     const {postInfo, description, title} = this.props
     if(event.key === 'Enter'){
         postInfo({description, title})
     }
  }

   render() {
      const { title, description, postInfo, handleChangeDescription, handleChangeTitle } = this.props
      return (
         <Fragment >
            <form>
               <div className="input-group mb-3" >
                  <div className="input-group-prepend">
                     <button
                        className="btn btn-outline-secondary"
                        type="button" id="button-addon1"
                        onClick={() => postInfo({ title: title, description: description,})}
                        >
                        Adicionar
                        </button>
                  </div>
                  <div>
                     <input type="text" key="title" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"
                        name="title"
                        onKeyUp={this.hendleKey.bind(this)}
                        onChange={handleChangeTitle}
                        value={title}
                      />
                     <input type="text" key="description" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"
                        name="description"
                        onKeyUp={this.hendleKey.bind(this)}
                        onChange={handleChangeDescription}
                        values={description}
                     />
                  </div>
               </div>
            </form>
            <MyCard/>
         </Fragment>
      );
   }
}

const mapStateToProps = state => ({
   infoCarros: state.form.infoCarros,
   title: state.form.title,
   description: state.form.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ serchInfo, postInfo, handleChangeTitle, handleChangeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)