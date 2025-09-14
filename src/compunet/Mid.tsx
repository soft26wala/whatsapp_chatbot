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

export default function Mid() {
    return (
        <Grid container spacing={{ lg: 2, xs: 6 }} sx={{ flexGrow: 1 }}>
            <Grid size={12}>
                <Item sx={{}}> 
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { lg: "1.1rem", sm: "1.1rem", xs: "1rem" }, fontStyle: "normal", marginTop: {lg:"10px", sm:"-10px", xs:"-10px"}, width: { lg: "85vw", sm: "90%", xs: "100%" }, textAlign: "center", color: "#696969", fontWeight: "400" , marginLeft: {lg:"5.5vw", sm:"-20px", xs:"0px"} }}>
                       &nbsp; Unlock our advanced drag-and-drop Flow Builder for just ₹1999/month and start automating support, lead qualification, and product guidance instantly.
                    </Typography></Item>
            </Grid>


            <Grid size={12}>
                <Item>
                     <Button variant="contained"
          sx={{
            mx: {lg:7,  sm:-7,  xs:1},
            marginTop: { sm:"-50px", xs:"-50px", lg:"0px"},
            marginBottom: { sm:"50px", xs:"50px", lg:"80px"},
            borderRadius:{ lg:"5px", xs:"5px"},
            color: "#1c1c1cff",
            backgroundColor: "green",
            fontWeight: {sm:"bold", xs:"100"},
            textTransform: "none",
            fontSize: {sm:"1rem", xs:"1rem", lg:"1.2rem"},
            letterSpacing: {sm:"0.1px", xs:"0.5px"},
            height: {lg:"43px", sm:"40px", xs:"40px"},
          }}><Link to="/Pricing" id="btn_xdbwt1ollm" className="_acabfb42" style={{color:"#fff"}}><span>Explore Plans And Pricing</span>&nbsp;&nbsp;<svg width="1em" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" className="um-arrow"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" fill="currentColor"></path></svg></Link></Button>
                </Item>
            </Grid>


           
        </Grid>
    );
}
