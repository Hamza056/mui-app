import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyleModal= styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});
const UserBox= styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
});
const Add = () => {
    const[open,setopen]=useState(false)
  return (
    <>
    <Tooltip onClick={()=>setopen(true)} title="Add" sx={{position:"fixed",bottom:20,
    left: {xs:"calc(50% - 25px)", md:30},
    }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
     <StyleModal
     open={open}
     onClose={()=>setopen(false)}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
       <Typography variant='h6' color="gray" textAlign="center">Create post</Typography>
       <UserBox>
        <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        sx={{width:30,height:30}}/>
           <Typography fontWeight={500} variant="span">
             Jhon Doe
           </Typography>
       
       </UserBox>
       <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="whats on your mind"
          variant="standard"
        />
      <Stack direction="row" gap={1} mb={3}>
      <EmojiEmotionsIcon color='primary'/>  
      <ImageIcon color='secondary'/>  
      <VideoCameraBackIcon color='success'/>  
      <PersonAddIcon color='error'/>  
      </Stack>
      <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
     <Button>post</Button>
  <Button><DateRangeIcon/></Button>

</ButtonGroup>
     </Box>
   </StyleModal>
   </>
  )
}

export default Add