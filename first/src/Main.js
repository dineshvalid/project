import React, { useState  } from "react";
import {
    useNavigate,
  } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import Image from "material-ui-image";
import T_imagge from './Images/Timages.jpeg'
import Yellow_img from './Images/Yellow_image.jpeg'

function Main(){

    const navigate = useNavigate();

  const  Home = () =>{
    navigate("/Home")
    }

    const  About = () =>{
        navigate("/about")
        }

        const  What_We_do = () =>{
            navigate("/What_Wedo")
            }

            const  Project = () =>{
                navigate("/Project")
                }

                const  Blog = () =>{
                    navigate("/Blog")
                    }

                    const  Contact = () =>{
                        navigate("/Contact")
                        }        
    

    return(
        <div style={{height:'100vh'}}>
            <div style={{display:'flex',height:'55px' ,width:'100%',justifyContent:'space-between'}}>
                <div style={{display:'flex',alignItems:'center',width:'45%'}}>
                <img src={T_imagge} style={{width:'10%',height:'54px',marginLeft:'3%'}} />
                <label style={{color:'blue',marginLeft:'2%',fontFamily:'revert-layer',fontSize:'20px',marginLeft:'25px',color:'green'}}>TANTUM PROJECTS</label>
                </div>
                <div style={{display:'flex',alignItems:'center' ,width:'55%',marginLeft:'15%'}}>
                   
                    <label onClick={Home} style={{ marginLeft:'2%',fontFamily:'initial',cursor:'pointer'}}>HOME</label>
                    <label onClick={About} style={{ marginLeft:'3%',fontFamily:'initial',cursor:'pointer'}}>ABOUT US</label>
                    <label onClick={What_We_do} style={{ marginLeft:'3%',fontFamily:'initial',cursor:'pointer'}}>WHAT WE DO</label>
                    <label onClick={Project} style={{ marginLeft:'3%',fontFamily:'initial',cursor:'pointer'}}>PROJECTS</label>
                    <label onClick={Blog} style={{ marginLeft:'3%',fontFamily:'initial',cursor:'pointer'}}>BLOG</label>
                    <label onClick={Contact} style={{ marginLeft:'3%',fontFamily:'initial',cursor:'pointer'}}>CONTACT</label>
                </div>
                
            </div>
            <div style={{backgroundColor:'#D3D3D3',width:'93%',marginLeft:'5%',height:'40%'}}> 
                   
            </div>
        <div style={{backgroundColor:'yellow',height:'75%',marginTop:'-13%',width:'85%'}}>
          
                {/* <img style={{marginRight:'79.8%',height:'100%',width:'70%'}} src={Yellow_img}/> */}
            </div>
            <div style={{color:'black',marginTop:'-31%',backgroundColor:'white',width:'50%',marginLeft:'50%',height:'59.6%'}}>
                <h3 style={{marginLeft:'-37%',fontSize:'40px',color:'green',paddingTop:'40px',fontFamily:'initial'}}>Throw Your First</h3>
                <h3 style={{marginLeft:'-32.9%',fontSize:'40px',marginTop:'-40px',color:'green',fontFamily:'initial'}}>Boomerang Today,</h3>
                <h3 style={{marginLeft:'-42%',fontSize:'40px',marginTop:'-40px',color:'green',fontFamily:'initial'}}>and Prepare to</h3>
                <h3 style={{marginLeft:'-39%',fontSize:'40px',marginTop:'-40px',color:'green',fontFamily:'initial'}}>Catch the Profit</h3>
                <p style={{marginLeft:'-39%',marginTop:'-40px',paddingTop:'3px',fontFamily:'initial'}}>Exclusive properties deals that are not are</p>
                <p style={{marginLeft:'-34.5%',marginTop:'-10px',fontFamily:'initial'}}>notavailable through traditional means.Unlock</p>
            </div>
        </div>
    )

}

export default Main;