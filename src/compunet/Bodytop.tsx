import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import SideVid from './SideVid';
import Lista from './Lista';
import AutoGrid from './AutoGrid';
import Mid from './Mid';
import Smallcomnet from './Smallcomnet';
import Midsecond from './Midsecond';
import Listitem from './List/Listitem';
import Header from './Header';



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



function Bodytop() {

    return (
        <>
          <Header />

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
                            imgages="/Screenshot 2025-09-12 115024.png"
                             mb="55px"/> </Item>
                    </Grid>

                    <Grid size={{lg:7, xs:12, sm:6}} >
                        
                         <Item elevation={0} ><Smallcomnet title="A Chatbot Builder for Non-techies"
                            para="Build multiple WhatsApp Chatbots easily, thanks to a drag-and-drop interface that requires zero coding expertise."
                            imgages="/Screenshot 2025-09-12 115136.png"
                            mb="0" /> </Item>
                    </Grid>

                    <Grid size={{lg:7, xs:12, sm:6}} >
                         <Item elevation={0} ><Smallcomnet title="24x7 Support & Sales Automation on WhatsApp"
                            para="Automate Support & Sales processes with dynamic Chatbots answering your customer's common queries, helping them arrive at the sales decision 3x faster!"
                            imgages="/Screenshot 2025-09-17 123436.png" 
                            mb="0"/> </Item>
                    </Grid>

                    <Grid size={{lg:5, xs:12, sm:6}} >
                        <Item elevation={0} ><Smallcomnet title="Seamless Integration with Business Tools"
                            para="Connect your Chatbot with WhatsApp Catalogues & WhatsApp Pay to showcase your Catalogues & drive payments directly within WhatsApp. "
                            imgages="/Screenshot 2025-09-12 123802.png"
                            mb="106px" /> </Item>
                    </Grid>

                      <Grid size={12} >
                        <Item elevation={0} sx={{ fontSize: { lg: "3rem", sm: "2.2rem", xs: "1.75rem" }, marginBottom:{lg:"-16px"} ,color: "#000" }}>Founders & Marketers Love us</Item>
                        <Midsecond />
                    </Grid>

                     <Grid size={12} >
                        <Item elevation={0} sx={{ fontSize: { lg: "3rem", sm: "2.2rem", xs: "1.75rem" }, marginBottom:{lg:"-16px"} ,color: "#000" }}>How It Works</Item>
                        
                    </Grid>

                      <Grid size={12} >
                        <Item elevation={0} sx={{ fontSize: { lg: "3rem", sm: "2.2rem", xs: "1.75rem" }, marginBottom:{lg:"-16px"} ,color: "#000" }}>
                            <Listitem />
                        </Item>
                        
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Bodytop
