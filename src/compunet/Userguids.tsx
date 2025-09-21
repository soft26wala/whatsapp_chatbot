import Button from '@mui/material/Button';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.background.level1,
    }),
}));

export default function Userguids() {
    return (
        <Grid container spacing={{ lg: 2, xs: 6 }} sx={{ flexGrow: 1 }}>
            <Grid size={12}>
                <Item sx={{}}> 
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { lg: "1.1rem", sm: "1.1rem", xs: "1rem" }, fontStyle: "normal", marginTop: {lg:"10px", sm:"-10px", xs:"-10px"}, width: { lg: "85vw", sm: "90%", xs: "100%" }, textAlign: "center", color: "#696969", fontWeight: "400" , marginLeft: {lg:"5.5vw", sm:"-20px", xs:"0px"} }}>
                       &nbsp; Simple Steps to Create Your First Chatbot with AiSensy
                    </Typography></Item>
            </Grid>


            <Grid size={12}>
                <Item>
                     
                </Item>
            </Grid>


           
        </Grid>
    );
}
