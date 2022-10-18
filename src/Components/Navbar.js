import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import {Box, Typography} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Search= styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%",
    
}));
const Icons= styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));
const StyledToolbar= styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
   
})
const UserBox=styled(Box)(({theme})=>({
display:"flex",
alignItems:"center",
gap:"10px",
[theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))
const Navbar = () => {
    const[open,setopen]=useState(false);
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography sx={{display:{xs:"none",sm:"block"}}} varient="h6">MUI page</Typography>
            <AcUnitIcon sx={{display:{xs:"block",sm:"none"}}}/> 
            <Search><InputBase placeholder='serrch' sx={{color:"black"}}/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
           <MailIcon />
           
           </Badge>
           <Badge badgeContent={2} color="error">
           
           <NotificationsIcon/>
           </Badge>
           <Avatar onClick={()=>setopen(true)} sx={{width:35,height:35}} src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'/>
           
            </Icons>
          <UserBox onClick={()=>setopen(true)}>
          <Avatar sx={{width:35,height:35}} src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'/>
          <Typography varient="span">Jhon</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>setopen(false)}
        anchorOrigin={{
            vertical:'top',
            horizontal:"right"
        }}
        TransitionComponent={Fade}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
   
  )
}

export default Navbar