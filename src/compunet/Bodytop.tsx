import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import SideVid from './SideVid';
import Lista from './Lista';
import AutoGrid from './AutoGrid';
import Mid from './Mid';
import Smallcomnet from './Smallcomnet';
import Bigcomnet from './Bigcommnet';
// import { createTheme, ThemeProvider } from "@mui/material";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       custom: 700, // 👈 नया breakpoint
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });



function Bodytop() {

    return (
        <>
            <Box sx={{ flexGrow: 1 , alignItems : {xs: "center"} , width: {xs:"126vws"}}}>
                <Grid container spacing={2} sx={{ boxShadow: "none" }}>
                    <Grid size={{ xs: 12, sm: 6 }} >
                        <Item elevation={0} sx={{ fontSize: { lg: "3rem", xs: "2.8rem" }, textAlign: "left", color: "#000", fontWeight: "extrabold", margin: { lg: "23px", xs: "4px" } }}>Create No-code WhatsApp <br /> <span style={{ color: "green" }}>Chatbots</span> in Minutes
                            <Lista /></Item>

                    </Grid>


                    <Grid size={{ xs: 12, sm: 6 }} sx={{ boxShadow: "none", height: { lg: "500px", xs: "270px" } }}>
                        <Item elevation={0} sx={{ height: "500px", }}> <SideVid /> </Item>
                    </Grid>

                    <Grid size={12} sx={{ marginTop: { lg: "250px", sm: "150px", xs: "0px" }, marginBottom: "50px" }}>
                        <Item elevation={0} sx={{ fontSize: { lg: "4rem", xs: "2rem" }, color: "#000" }} >Build Smart WhatsApp Chatbots with AiSensy</Item>
                        <AutoGrid />
                    </Grid>

                    <Grid size={12} >
                        <Item elevation={0} sx={{ fontSize: { lg: "3rem", sm: "2.2rem", xs: "1.75rem" }, marginBottom:{lg:"-16px"} ,color: "#000" }}>Add-on Feature</Item>
                        <Mid />
                    </Grid>


                    <Grid size={{lg:5, xs:12, sm:6}} >
                        <Item elevation={0} ><Smallcomnet title="Turn Leads into Customers Effortlessly"
                            para="Let your chatbot do the heavy lifting by qualifying leads easily, driving conversions without human intervention."
                            imgages="../../public/Screenshot 2025-09-12 115024.png"
                             /> </Item>
                    </Grid>

                    <Grid size={{lg:7, xs:12, sm:6}} >
                        
                         <Item elevation={0} ><Smallcomnet title="Turn Leads into Customers Effortlessly"
                            para="Let your chatbot do the heavy lifting by qualifying leads easily, driving conversions without human intervention."
                            imgages="../../public/Screenshot 2025-09-12 115136.png"
                            /> </Item>
                    </Grid>

                    <Grid size={{lg:7, xs:12, sm:6}} >
                         <Item elevation={0} ><Smallcomnet title="Turn Leads into Customers Effortlessly"
                            para="Let your chatbot do the heavy lifting by qualifying leads easily, driving conversions without human intervention."
                            imgages="../../public/Screenshot 2025-09-12 115136.png" /> </Item>
                    </Grid>

                    <Grid size={{lg:5, xs:12, sm:6}} >
                        <Item elevation={0} ><Smallcomnet title="Turn Leads into Customers Effortlessly"
                            para="Let your chatbot do the heavy lifting by qualifying leads easily, driving conversions without human intervention."
                            imgages="../../public/Screenshot 2025-09-12 115136.png" /> </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Bodytop
