import React, { useState } from 'react'
import * as Components from './Components';
import { useEffect } from 'react';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import img1 from './Images/img1-removebg-preview.png'
import img2 from './Images/img2-removebg-preview.png'
import img3 from './Images/img3-removebg-preview.png' 
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { useNavigate, Link } from "react-router-dom"
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Login({setData}) {
    const [signIn, toggle] = React.useState(true);
    const[email,setEmail] = useState('');
    const[name,setName]=useState('')
    const[password,setPassword] = useState('');
    const[mobile,setMobile] = useState('');
    const[gender,setGender] = useState('');
    const[role,setRole] = useState('');

  const history = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    if (isMobileValid) {
      toast("Submitting...", { autoClose: 1500 });
      try {
        await axios.post("http://localhost:8000/", {
          name,
          email,
          password,
          mobile,
          gender,
          role,
          age,
        },
        { timeout: 3000 }
        );
      }
        finally{
          toast("Account created, Please login to continue", { autoClose: 3000 });
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        }
        
      }
    else {
      toast.error("Invalid number");
    }
  };
  
 
  
    
      async function fetchDataFromBackend() {
        try {
          const response = await fetch('/api/user-data');
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    
      const handleLogin = async () => {
        // Fetch data from backend
        const data = await fetchDataFromBackend();
        // Update data in parent component
        setData(data);
      };
      
      const [step, setStep] = useState(1);
      const [date, setDate] = useState("");
      const[age,setAge] = useState(0);

      const submit1 = async (event) => {
        event.preventDefault();
      
        // Send HTTP request to check if user is present
        fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              // Store user data in parent component
              setData(data.user);
              history('/home', { state: { id: data.user.email, name: data.user.name,mobile:data.user.mobile,gender:data.user.gender,role:data.user.role,age:data.user.age} })

              // Display success toast
              toast.success('Logged in successfully!', { autoClose: 3000 });
              // Wait for 3 seconds before redirecting to new page
              setTimeout(() => {
                window.location.href = '/home';
              }, 3000);
            } else {
              // Display danger toast
              toast.error('Wrong email or password!', { autoClose: 3000 });
            }
          })
          .catch((err) => console.error(err));
      };
      const [isMobileValid, setIsMobileValid] = useState(false);

     const handleMobileChange = (event) => {
    const mobile = event.target.value;
    setMobile(mobile);
    setIsMobileValid(mobile.length === 10);
  };
        
      
      
    //   useEffect(() => {
    //     if (localStorage.getItem("showToast") === "true") {
    //       toast("Account created! Please login to continue.");
    //       localStorage.removeItem("showToast");
    //     }
    //   }, []);

    return(
      <>
      {/* <div className='container1' style={{overflow:'hidden',position:'absolute',left:'750px',width:'500px',overflowX:'hidden',overflowY:'hidden'}}>

      <div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel" data-mdb-interval="false">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block w-100" alt="Wild Landscape" />
        </div>
        <div class="carousel-item" data-mdb-interval="2000">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera" />
        </div>
        <div class="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits" />
        </div>
    </div>
    <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
      </div> */}

     <div className='image_slideshow' style={{position:'absolute',right:'0px',filter: 'saturate(200%)',top:'0px', width:'600px'}}>
  
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"   data-bs-interval="2500"
>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

<div className='login_page'>
<Components.Container>
          
          <ToastContainer />
          <Components.SignUpContainer signinIn={signIn}>
          <Components.Form action='POST'>
    {step === 1 && (
      <div>
        <Components.Title>Create Account</Components.Title>
        <Components.Input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

              
        <Components.Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Components.Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
                <Components.Button onClick={() => setStep(2)}>Next</Components.Button>
      </div>
    )}
    {step === 2 && (
      <div>
        <Components.Input
          type="text"
          placeholder="Mobile Number"
          onChange={handleMobileChange}
        />
        <Components.Select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <Components.Option value="">Select Gender</Components.Option>
          <Components.Option value="Male">Male</Components.Option>
          <Components.Option value="Female">Female</Components.Option>
          <Components.Option value="Other">Other</Components.Option>
        </Components.Select>


        <Components.Input type='text' placeholder='Role' onChange={(e)=>{setRole(e.target.value)}}/>

        <Components.Input type="number" placeholder='Age' onChange={(e)=>{
          setAge(e.target.value)
        }}/>
        
        <Components.Button onClick={submit} value="Submit" >Sign Up</Components.Button>
        <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="large">
        <ArrowBackIcon onClick={()=>
          setStep(1)
        }/>
      </IconButton>
    </Stack>
      </div>
    )}
  </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
               <Components.Form>
                   <Components.Title>Sign in</Components.Title>
                   <Components.Input type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                  <Components.Input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />

                   <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                   <Components.Button onClick={submit1}>Sign In</Components.Button>
               </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Welcome Back!</Components.Title>
                  <Components.Paragraph>
                      To keep connected with us please login with your personal info
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)} >
                      Sign In
                  </Components.GhostButton>
                  </Components.LeftOverlayPanel>

                  <Components.RightOverlayPanel signinIn={signIn}>
                    <Components.Title>Hello, Friend!</Components.Title>
                    <Components.Paragraph>
                        Enter Your personal details and start journey with us
                    </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton> 
                  </Components.RightOverlayPanel>

              </Components.Overlay>
          </Components.OverlayContainer>

      </Components.Container>
      </div>
    </>
        
        // <form action='POST'>
        //     <textarea name="text" onChange={(e)=>{setName(e.target.value)}}></textarea>
        //     <input type='submit' onClick={submit} value="Submit"/>
        // </form>
    )
}
