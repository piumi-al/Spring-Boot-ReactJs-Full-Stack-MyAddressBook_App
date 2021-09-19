import React, { Component } from 'react';
import UserService from '../services/UserService';


class createUserComponent extends Component {


    constructor(props){
        super(props)
         this.state={
            name: '',
            age: '',
            dob: '',
            mobile: '',
            address: ''

            

         }

         this.nameHandler = this.nameHandler.bind(this);
         this.ageHandler = this.ageHandler.bind(this);
         this.dobHandler = this.dobHandler.bind(this);
         //this.mobileeHandler= this.mobileeHandler.bind(this);
         this.addresseHandler = this.addresseHandler.bind(this);
         this.saveUser = this.saveUser.bind(this);
    }


   

    nameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    ageHandler= (event) => {
        this.setState({age: event.target.value});
    }

    dobHandler= (event) => {
        this.setState({dob: event.target.value});
    }

    mobileeHandler= (event) => {
        this.setState({mobile: event.target.value});
    }

    addresseHandler= (event) => {
        this.setState({address: event.target.value});
    }



    saveUser =(e)=>{
        e.preventDefault();
        let user = {name: this.state.name,age: this.state.age,dob: this.state.dob,mobile: this.state.mobile,address: this.state.address};
        
        if(!this.state.name){
            return alert("Please insert name")
        }
         
        if(!this.state.age){
            return alert("Please insert age")
        }
 
        if(this.state.age > 120 || this.state.age < 1){
            return alert("Age range should be 1-120")
        }

        
        if(!this.state.dob){
            return alert("Please insert Date of birth")
        }
         
        if(!this.state.mobile){
            return alert("Please insert Mobile number")
        }
        if(!this.state.mobile.length === 10){
            return alert("Please enter 10 digits ")
        }
        if(!this.state.address){
            return alert("Please insert Address")
        }


        else{

            console.log('user => ' + JSON.stringify(user));

            UserService.addUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }
    }


    cancel(){

        this.props.history.push('/users');

    
    }

    render() {
        return (
            <div>
             <br></br>

             <div class="d-flex justify-content-center">
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                    <form method="POST">
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input type="text"  id="name" name="name" className="form-control" value={this.state.name} onChange={this.nameHandler} />
                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input  type="text"  name="age" className="form-control" value={this.state.age}  onChange={this.ageHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of birth: </label>
                                            <input  type="date"  name="dob" className="form-control" value={this.state.dob} onChange={this.dobHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label>Mobile : </label>
                                            <input type="text"  name="mobile" className="form-control"  value={this.state.mobile} onChange={this.mobileeHandler}/>
                                        </div>
                                        

                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <textarea  name="address" className="form-control" value={this.state.address} onChange={this.addresseHandler}/>
                                        </div>
                                        
                                        
                                        <button className="btn btn-primary" onClick={this.saveUser}>Save</button>
                                        <button className="btn btn-primary" onClick={this.cancel.bind(this)} style={{marginLeft: "350px",}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>

            </div>
        );
    }
}

export default createUserComponent;