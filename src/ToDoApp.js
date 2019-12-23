import React, { Component } from 'react';
import './Todo.css'
//import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:[
                    { text:"#item 1", done:false, key : new Date().getMilliseconds() + "item 1 " },
                    { text:"#item 2", done:false, key : new Date().getMilliseconds() + "item 2 " },
                    { text:"#item 3", done:false, key : new Date().getMilliseconds() + "item 3 " },
                    { text:"#item 4", done:false, key : new Date().getMilliseconds() + "item 4 " }
            ],
            input : ''
    }
    }   
    move = (key) => {
       const filtered =  this.state.items.map(item => {
            if ( item.key === key) {
            item.done = ! item.done
        }
        return item
        })
        this.setState({items : filtered} )
        
    }
    handleChange = (e) =>{
        const newValue = e.target.value
        
        this.setState({input : newValue} )
    }
    add = () =>{
        console.log(this.state.input);
        let newItem = { text:this.state.input, done:false, key : new Date().getMilliseconds() }
        this.setState((state) => ({
            //items: state.items.concat(newItem)
            items: [newItem].concat(state.items)
        }))
    }
    delette = (key) =>{
        let filtered = this.state.items.filter( item =>{
           return item.key != key
           })
            this.setState({items : filtered})
    }
    getUndone = () =>{
        let undone = this.state.items.filter( item =>{
            return !item.done
        })
        if(!undone.length){
            return
        }
        return undone.length
    }

    render() { 
        return (    
            <div className="container"> 
            <br></br>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="todolist">
                            List Undone
                            <form onSubmit={(e) => {e.preventDefault() ; this.add() }}>
                                <input className='form-control form-control-lg add-todo' placeholder='add to do' value={this.state.input} onChange={(e) => this.handleChange(e)}></input>
                            </form>
                            <ul className='no-padding'id="not-done">  
                                {this.state.items.map(item => {
                                    if(!item.done){
                                        return( <li className="list-unstyled" 
                                                    key={item.key} 
                                                    onClick={ () => this.move(item.key)}
                                                >
                                                    {item.text} 
                                                </li>)}
                                         })
                                }
                            </ul>
    <div className="todo-footer"> <span>{this.getUndone()}</span>items Left</div>
                            </div>
                    </div>
                    <div className="col-md-6">
                        <div className="todolist">
                            List done
                             <ul id="done-items">
                                {this.state.items.map(item => { if(item.done){
                                        return(
                                <li className='list-unstyled' 
                                    key={item.key} 
                                >
                                   <label onClick={ () => this.move(item.key)} > {item.text} </label>
                                   <button onClick={() => this.delette(item.key)} className="btn float-right paddingero"><i class="fas fa-trash"></i></button>
                                     
                                </li>
                                
                                        )}
                                        
                                })
                                }
                            </ul>
                            </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ToDoApp;