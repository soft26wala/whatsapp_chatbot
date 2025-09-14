import ListItem from '@mui/joy/ListItem';
import List from '@mui/joy/List';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { Link } from 'react-router-dom';

function Lista() {
    return (
        <div>
            <List marker={'disc'} sx={{ margin: {lg:"23px", xs: "2px" }, textAlign: "left", fontSize: {lg:"20px", sm:"1rem", xs:"0.8rem"}, gap: "3px", color: "#696969", fontWeight: "400" }}>
                <ListItem nested>
                    <ListItem>Build Multiple dynamic WhatsApp Chatbots easily with a drag-and-drop Interface.</ListItem>
                </ListItem>

                <ListItem nested>
                    <ListItem> Enable Multiple WhatsApp Chatbots in one account.</ListItem>
                </ListItem>

                <ListItem nested>
                    <ListItem>Automate up to 80% of customer queries  without writing a single line of code.</ListItem>
                    <ListItem></ListItem>
                    <ListItem>⚡️Powered by Official WhatsApp Business API</ListItem>
                </ListItem>
            </List>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Link to={'Demo'}> <Button sx={{padding: {lg:'0 14px 0 14px', xs: "0 8px 0 8px"}, fontSize: '1.2rem', background: "green", height:{lg:"53px"}, width:{lg:"177px"}}}>Start For Free 🔜</Button></Link>
               <Link to={'Demo'}><Button sx={{padding: {lg:'0 14px 0 14px', xs: "0 8px 0 8px"}, fontSize: '1.2rem', background: "none" , color: "#000", border: "3px solid black", height:{lg:"53px"}, width:{lg:"177px"}}}>Book a demo</Button></Link> 
            </Box>
        </div>
    )
}

export default Lista
