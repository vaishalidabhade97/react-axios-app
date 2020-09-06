import React,{Component} from 'react';
import axios from 'axios';
import './create.css';
// import DataTable from './data-table';
export default class Users extends Component{

    constructor(props){
        super(props);
        this.state = {usersCollection: [] };
    }

    // componentDidMount(){
    //     axios.get('http://localhost:4000/users')
    //     .then(res => {
    //         this.setState({usersCollection: res.data});
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    // }
    // dataTable(){
    //     return this.state.usersCollection.map((data, i) => {
    //         return <DataTable obj={data} key={i} />;
    //     });
    // }
    render(){
        return(
            <div className="welcome" style={{marginTop:"30%"}}>
                <div>Welcome to Glabbr</div>
          
            </div>
        )
    }
}