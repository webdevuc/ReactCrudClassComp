import React, { Component } from 'react'

class TransactionForm extends Component {

    state = {
          ...this.returnStateObject()
        }

    returnStateObject(){
        if(this.props.currentIndex == -1)
        return{
            bAccountNo:'',
            iFSC:'',
            bName:'',
            amount:''
        }
        else{
            return this.props.list[this.props.currentIndex]
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
        this.setState({...this.returnStateObject() })
    }
    // constructor(){
    //     super()
    //     this.state = {}
    // }

    handleInputChange = (e) =>{
        // alert(e)
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }



  render() {
    return (
        <>
        <h1>Crud operation using Class Component</h1>
        <form onSubmit={this.handleSubmit} autoComplete='off'> 
            <input name="bAccountNo" placeholder='A/C No.' value={this.state.bAccountNo} onChange={this.handleInputChange} /> <br/>
            <input name="iFSC" placeholder='iFSC No.' value={this.state.iFSC} onChange={this.handleInputChange} /> <br/>
            <input name="bName" placeholder='Bank Name.' value={this.state.bName} onChange={this.handleInputChange} /> <br/>
            <input name="amount" placeholder='Bank A/C No.' value={this.state.amount} onChange={this.handleInputChange} /> <br/>

            <button type="submit">Save</button>
        </form>
        </>
    )
  }
}

export default TransactionForm