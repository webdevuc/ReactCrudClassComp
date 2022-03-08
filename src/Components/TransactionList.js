import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

 class TransactionList extends Component {

    state = {
        currentIndex:-1,
        list:this.returnList()
    }
    
    returnList(){
        if(localStorage.getItem('transaction') === null)
            localStorage.setItem('transaction',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transaction'))    
    }
    
    onAddOrEdit = (data) => {
        var list = this.returnList()
        list.push(data)
        localStorage.setItem('transaction',JSON.stringify([list]))
        this.setState({list})
    }

    handleEdit = (index) =>{
        this.setState({
            currentIndex:index
        })
    }

  render() {
    return (
      <div>
          <TransactionForm 
            onAddOrEdit={this.onAddOrEdit}
            currentIndex={this.state.currentIndex}
            this={this.state.list}
            />
          <hr/>
          <h5>Transaction List</h5>
          <table>
              <tbody>
                  {
                      this.state.list.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.bAccountNo}</td>
                                <td>{item.iFSC}</td>
                                <td>{item.bName}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(index)}>EDit</button>
                                </td>
                            </tr>
                        )
                      })
                  }
              </tbody>
          </table>
      </div>
    )
  }
}

export default TransactionList

