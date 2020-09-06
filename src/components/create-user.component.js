import React,{Component} from 'react';
import axios from 'axios';
import './create.css';
import {Link} from 'react-router-dom';
// import {useHistory} from 'react-router-dom';
// import logo from '../logo.svg';

export default class CreateUser extends Component{
    constructor(props){
        super(props)
        // this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.postData=this.postData.bind(this);
        this.loginPage=this.loginPage.bind(this);
        this.state = {
            // name: '',
            email: '',
            password:''
        }
    }

    onChangeUserPassword(e){
        this.setState({password:e.target.value})
    }

    onChangeUserEmail(e){
        this.setState({email: e.target.value})
    }

    // onSubmit(e){
    //     e.preventDefault()

        // const userObject = {
            // /name: this.state.name,
            // email: this.state.email
        // };
        
    //     axios.('http://localhost:4000/users/create', userObject)
    //     .then((res) => {
    //         console.log(res.data)
    //     }).catch((error)=>{
    //         console.log(error)
    //     });
    //     this.setState({name: '', email: ''})
    // }
    loginPage(){
        // window.location.assign('/users');
    
    }
    postData(userObj){
        axios.post('https://run.mocky.io/v3/2ef706ec-6347-4ae5-9f9c-ed2c0d77edd9', userObj)
        .then((res)=>{
            // delete res.data.user["password"];
            res.data.user.email=this.state.email;
            res.data.user.password=this.state.password;
            console.log(this.state.email);
            console.log(this.state.password);
            this.loginPage();
        }).catch((error)=>{
            console.log(error);
        })
    }
    onSubmit(e){
        axios.get('https://run.mocky.io/v3/a704e123-2ac0-4976-b769-6e9adb8549c2')
        .then(res => {
            this.setState({usersCollection: res.data});
            // console.log(res.data.user.email);
            if(res.data.user.email === this.state.email){
                console.log("exist");
                document.getElementById("password").setAttribute("type", "password");
                document.getElementById("label").innerText="Enter your password";
                document.getElementById("email").setAttribute("type", "hidden");
                var userObj={
                    email: this.state.email,
                    password: this.state.password
                }
                this.postData(userObj);
            }
        })
        .catch(function(error){
            console.log("error");
        })
        // window.fetch('https://run.mocky.io/v3/a704e123-2ac0-4976-b769-6e9adb8549c2')
        // .then(res=>res.json()).then(
        //     (result)=>{
        //         console.log(result);
        //     },
        //     (error)=>{
        //         console.log(error);
        //     }
        // )
    }

    render(){
        return(
            <div className="wrapper1" style={{backgroundColor:"#fff",marginTop:"30%"}}>
                <div className="login" id="login">Login</div>
                <div className="label" id="label">Enter your email</div>
                
                <div>
                    
                    {/* <div className="form-group" style={{textAlign:"center"}}>
                        <label >Add User Name</label><br/>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="ant-input"/>
                    </div> */}
                    <div className="form-group">
                        <input type="text" value={this.state.email} placeholder="john.doe@acme.com" onChange={this.onChangeUserEmail} id="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="hidden" value={this.state.password} placeholder="*******" onChange={this.onChangeUserPassword} id="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button className="sub-btn" type="submit" onClick={this.onSubmit}>Next</button>
                    </div>
                    <div className="form-group">
                        <span className="mr-2">Don't have an account?</span>
                        <a className="signup">
                            <u>Sign Up</u>
                        </a>
                    </div>
                </div>                
            </div>
        )
    }
}
