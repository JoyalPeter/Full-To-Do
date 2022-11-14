import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styles from './SigninForm.module.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

function SigninForm () {

    localStorage.setItem("LoginToken",false)
    const navigate=useNavigate();
    const [UserName,getUserName]=useState('');
    const [PassWord,getPassWord]=useState('');
    const [UserNameFlag,setuserNameFlag]=useState(false);
    const [PassWordFlag,setPassWordFlag]=useState(false);

    const submitForm=()=>{
        if(UserName && PassWord){
            const user=localStorage.getItem(UserName)
            if(user){
                if(UserNameFlag){
                    setuserNameFlag(false)}
                if(user===PassWord){
                    if(UserNameFlag){
                        setuserNameFlag(false)}
                    if(PassWordFlag){
                        setPassWordFlag(false)}
                    localStorage.setItem("LoginToken",true)
                    navigate(`/AddItem/${UserName}`);
                }else{
                    setPassWordFlag(true)
                }
            }else{
                if(PassWordFlag){
                    setPassWordFlag(false)}
                setuserNameFlag(true)
            }
        }else{
            alert("Username and Password cannot be empty!");
        }
        
    }

    return (
        <>
        <div className={styles.signin}>
            <h1>SIGN IN</h1>
            <div className={styles.name}><TextField onChange={(e)=>getUserName(e.target.value)} label="Enter User Name" variant="outlined" required/></div>
            {UserNameFlag && <div className={styles.username}>Invalid Username!</div>}
            <div className={styles.pwd}><TextField onChange={(e)=>getPassWord(e.target.value)} type="password"  label="Enter Password" variant="outlined" required/></div>
            {PassWordFlag && <div className={styles.passwrd}>Incorrect Password!</div>}
            <div className={styles.bttn}><Button variant="contained" onClick={submitForm}>Submit</Button></div>
            <div className={styles.SignUpLink}>
                <a href="/signup">
                    Not a user? Sign up
                </a>
            </div>
        </div>

        </>
    )
}

export default SigninForm;