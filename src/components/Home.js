import React, { useState, useEffect } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import { MdGroupAdd } from "react-icons/md";
import { FaPeopleGroup, FaHeartCirclePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const navigate = useNavigate();

  const {user} = useAuthContext();

  return (
    <>
      <h1 className="home-title">Welcome to LA's premier venue finder app!</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
        <div onClick={() => navigate('/creategroup')}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} className="box-style">
            <MdGroupAdd size={250} style={{ color: '#4287f5' }} />
            <h1 className="home-subtitle">List Your Venue</h1>
            <p>Showcase your apartment or event space for others to discover. Add unique themes and details to attract the perfect guests!</p>
          </Stack>
        </div>
        
        <div onClick={() => navigate('/joingroup')}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} className="box-style">
            <FaPeopleGroup size={250} style={{ color: '#4287f5' }} />
            <h1 className="home-subtitle">Find Venues</h1>
            <p>Browse and join themed apartments and event spaces for your next night out, celebration, or gathering!</p>
          </Stack>
        </div>
        
        <div onClick={() => navigate('/findbuddy')}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} className="box-style">
            <FaHeartCirclePlus size={250} style={{ color: '#4287f5' }} />
            <h1 className="home-subtitle">Connect with Hosts</h1>
            <p>Meet new people and connect with hosts offering unique venues for all kinds of events and experiences!</p>
          </Stack>
        </div>
        
      </div>

      <div style={{ marginTop: 40, textAlign: 'center' }}>
        {user ? 
        <Typography><em>You are currently logged in. Choose a feature above to get started!</em></Typography>
         : 
          <Button variant="contained" color="primary" size="large" onClick={() => navigate('/login')}>
            Click here to login
          </Button>
        }
      </div>
    </>
  );
}
