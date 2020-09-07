import React,{Component} from 'react';
import axios from 'axios';
import './create.css';

export default class CreateUser extends Component{
    constructor(props){
        super(props)
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

    loginPage(){
        window.location.assign('/users');
    
    }
    postData(){
        
        const userObj={
            email: this.state.email,
            password: this.state.password
        }
        // console.log(this.state.password);
        axios.post('https://run.mocky.io/v3/2ef706ec-6347-4ae5-9f9c-ed2c0d77edd9', userObj)
        .then((res)=>{
            // delete res.data.user["password"];
            res.data.user.email=this.state.email;
            res.data.user.password=this.state.password;
            // console.log(res.data);
            this.loginPage();
            // console.log(res.data.user.password);
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
                document.getElementById("next-btn").setAttribute("hidden","true");
                document.getElementById("login-btn").removeAttribute("hidden");
                
            }
        })
        .catch(function(error){
            console.log("error");
        })
        
    }

    render(){
        return(
            <div className="wrapper1">
                <div className="login" id="login">Login</div>
                <div className="label" id="label">Enter your email</div>
                
                <div>
                    <div className="form-group">
                        <input type="text" value={this.state.email} placeholder="john.doe@acme.com" onChange={this.onChangeUserEmail} id="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="hidden" value={this.state.password} placeholder="*******" onChange={this.onChangeUserPassword} id="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button className="sub-btn" id="next-btn" type="submit" onClick={this.onSubmit}>Next</button>
                    </div>
                    <div className="form-group">
                        <button className="sub-btn" id="login-btn" onClick={this.postData} hidden>Login</button>
                    </div>
                    <div className="form-group">
                        <span className="mr-2">Don't have an account?</span>
                        <a href="/#" className="signup">
                            <u>Sign Up</u>
                        </a>
                    </div>
                </div>                
            </div>
        )
    }
}
