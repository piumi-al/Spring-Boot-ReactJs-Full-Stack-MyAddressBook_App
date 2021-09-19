import axios from 'axios'
import React, { Component } from 'react'
import UserService from '../services/UserService'
import TableScrollbar from 'react-table-scrollbar';


 class ListofUsersComponent extends Component {
    constructor(props){
        super(props)
         this.state={
             users: []

         }
         this.addUser = this.addUser.bind(this);
    }


    componentDidMount(){
      UserService.getUser().then( res => {
            this.setState({users: res.data});
        });
        
    }

    addUser(){
        this.props.history.push('/add-user');
    }

    filterData(users, searchKey){
        const result = users.filter((user) =>
            user.name.toLowerCase().includes(searchKey)
       
        )
            this.setState({users:result})
        }
        handleSearch = (e) =>{

            const searchKey = e.currentTarget.value
            axios.get('http://localhost:8081/api/v1/users').then(res => {
    
            this.filterData(res.data, searchKey)
        
        })
        }

    
    render() {
        return (
            <div>
                


                <br></br>
                <br></br>
                
                <div class="d-flex justify-content-center">
                    <div className="table-search">
                        <input className="form-control" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearch}></input>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div class="d-flex justify-content-center">
                <div className="row">
              
                <TableScrollbar height="400px">
                <table className = "table table-striped table-bordered">
                 
                 <thead>
                     <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>Mobile</th>
                        <th>Address</th>
                    </tr>
                 </thead>

                <tbody>
                    {

                        this.state.users.map(

                            user=>
                            <tr key ={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.dob}</td>
                            <td>{user.mobile}</td>
                            <td>{user.address}</td>
                            </tr>


                            

                        )
                    }

                </tbody>


                </table>
                </TableScrollbar>
                </div>
                </div>


               </div> 
            
        )
    }
}


export default ListofUsersComponent;