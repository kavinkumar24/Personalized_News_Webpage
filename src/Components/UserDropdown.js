import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import './UserDropdown.css'
import { UserCard } from 'react-ui-cards';
import { FaEdit } from 'react-icons/fa';
import { FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import { FaCheck,FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";




const UserDropdown = ({ username, name, mobile, gender, role,age}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [nameInput, setNameInput] = useState(name);
  const [mobileInput, setMobileInput] = useState(mobile);
  const [genderInput, setGenderInput] = useState(gender);
  const [roleInput, setRoleInput] = useState(role);
  const[ageInput,setAgeInput] = useState(age);


  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8000/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameInput,
        email: username,
        mobile: mobileInput,
        gender: genderInput,
        role: roleInput,
        age: ageInput
      })
    });
    const data = await response.json();
    if (data.success) {
      // Update the user information in the component state
      setNameInput(data.user.name);
      setMobileInput(data.user.mobile);
      setGenderInput(data.user.gender);
      setRoleInput(data.user.role);
      setAgeInput(data.user.age);
      setIsEditing(false);
    } else {
      // Handle error
    }
  };
  
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('popup_active');
    } else {
      document.body.classList.remove('popup_active');
    }
  }, [showPopup]);

  const handleMenuClick = () => {
    setShowOptions(!showOptions);
  };

  const handleProfileClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  
  return (
    <>
      <div className='icon_container'>
        <button onClick={handleMenuClick}>
          <FaUser id="UserIcon" style={{ position: 'relative', padding: '10px', fontSize: '50px', borderRadius: '50px' }} />
        </button>
      </div>
      {showOptions && (
        <ul className='drop_down_list'>
          <li>
            <button onClick={handleProfileClick}><FaInfoCircle /><p> </p> My Profile</button>
          </li>
          <li>
            <button><FaSignOutAlt />Logout</button>
          </li>
        </ul>
      )}
      {showPopup && (
        <>
          <div className='popup'>
            <h2 id="head_popup">My Profile</h2>
            <div style={{ display: 'flex' }}>
            <div style={{ flex: 1,marginRight: '20px',marginTop:'20px' }}>
            <p style={{ display: 'flex', alignItems: 'center' }}>

              <span className="span_id_label" style={{ flex: 1 }}> Name: </span>
              {isEditing ? (
                <input type="text"  className="update_input" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
              ) : (
                <span className="backend_data" style={{ flex: 1 }}>{nameInput}</span>
              )}
            </p>

            <p style={{ display: 'flex', alignItems: 'center' }}>
          <span   className="span_id_label" style={{ flex: 1 }}>Email:</span>
          {isEditing ? (
            <>
              <span className="backend_data" style={{position:'relative',left:'25px'}}>{username}</span>
              <span style={{ color: 'red', fontSize: '12px',position:'absolute',top:'200px',left:'130px'}} >Cannot change email</span>
            </>
          ) : (
            <span className="backend_data" style={{ flex: 1,position:'relative',left:'33px'}}>{username}</span>
          )}
        </p>


            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span className="span_id_label"style={{ flex: 1 }}>Mobile:</span>
              {isEditing ? (
                <input type="text" className="update_input" value={mobileInput} onChange={(e) => setMobileInput(e.target.value)} />
              ) : (
                <span className="backend_data"style={{ flex: 1}}>{mobileInput}</span>
              )}
            </p>

            <p style={{ display: 'flex', alignItems: 'center' }}>

              <span className="span_id_label" style={{ flex: 1 }}>Gender:</span>
              {isEditing ? (
                <input type="text" className="update_input" value={genderInput} onChange={(e) => setGenderInput(e.target.value)} />
              ) : (
                <span className="backend_data" style={{flex:1}}>{genderInput}</span>
              )}
            </p>

            <p style={{ display: 'flex', alignItems: 'center' }}>

              <span className="span_id_label" style={{flex:1}}>Role:</span>
              {isEditing ? (
                <input type="text"className="update_input"  value={roleInput} onChange={(e) => setRoleInput(e.target.value)} />
              ) : (
                <span className="backend_data" style={{flex:1}}>{roleInput}</span>
              )}
            </p>

            <p style={{ display: 'flex', alignItems: 'center' }}>

              <span className="span_id_label" style={{flex:1}}>Age: </span>
              {isEditing ? (
                <input type="number"  className="update_input" value={ageInput} onChange={(e) => setAgeInput(e.target.value)} />
              ) : (
                <span className="backend_data" style={{flex:1}}>{ageInput}</span>
              )}
            </p>
           

            {!isEditing && (
              <button onClick={() => setIsEditing(true)} id="Edit_button">
               <FaEdit/> 
              </button>
            )}

            {isEditing && (
              <>
                <button onClick={() => setIsEditing(false)} id="cancel_update">
                <FaTimes />
                </button>{" "}
                <button onClick={handleSubmit} id="Success_update" >
              <FaCheck />
            </button>
              </>
            )}
 </div>
            <div class="d-flex" style={{ height: '320px', position: 'absolute',width:'4px',left: '340px', top: '115px', background:'linear-gradient( #ff4b2bb2,hwb(265 25% 0%))'}}>
              <div class="vr"></div>

            </div>
            <div style={{ flex: 2,marginLeft:'130px',width: '500px',marginTop:'20px' }} className='recommand'>
            <h3>Recommended</h3>
            <br></br>
            <div style={{ display: 'flex' }}>
              <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Sports
              </span>
              
              <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tech
              </span>
              <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Health
              </span>
             
            </div>
            <div style={{ display: 'flex' }}>
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Business
              </span>
              <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Articles
              </span>
              </div>
            </div>


            <div style={{ width: '100px' }}></div>

            <button onClick={handlePopupClose} style={{ position: 'absolute', top: '0px', right: '10px', fontWeight: 'bold', fontSize: '20px', padding: '20px' }}>X</button>
          </div>
          </div>
          <div className='overlay' onClick={handlePopupClose}></div>
        </>
      )}
    </>
  );
};

export default UserDropdown;
