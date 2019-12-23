import React, { Component } from 'react';
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
            items: state.items.concat(newItem)
        }))
    }

    render() { 
        return (    
            <div className="container"> 
            <br></br>
                <div className='row'>
                    <div className="col-md-6">
                            List Undone
                            <form onSubmit={(e) => {e.preventDefault() ; this.add() }}>
                                <input placeholder='add to do' value={this.state.input} onChange={(e) => this.handleChange(e)}></input>
                            </form>
                            <ul>  
                                {this.state.items.map(item => {
                                    if(!item.done){
                                        return( <li key={item.key} onClick={ () => this.move(item.key)}>{item.text} </li>)}
                                         })
                                }
                            </ul>
                    </div>
                    <div className="col-md-6">
                            List done
                             <ul>
                                {this.state.items.map(item => { if(item.done){
                                        return(
                                <li key={item.key} onClick={ () => this.move(item.key)}>
                                    
                                     {item.text} 
                                </li>
                                
                                        )}
                                        
                                })
                                }
                            </ul>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ToDoApp;