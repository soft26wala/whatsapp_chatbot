import Boxitem from "./Boxitem";
import ProjectHeader from "./ProjectHeader";
// import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { Card, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Carditem from './Carditem';


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

export default function Projects() {
   return (
        <Grid container spacing={{ lg: 2, xs: 6 }} sx={{ flexGrow: 1 }}>
            <Grid size={12} sx={{height: {lg:"80px", xs:"60px"}}}> 
                <Item sx={{}}> <ProjectHeader /> </Item>
            </Grid>


            <Grid size={2}>
                <Item> </Item>
            </Grid>

             <Grid size={8}>
                <Item sx={{ bgcolor: "#e0eae0",
          boxShadow: "0 0 10px 0 #e0e0e0",}}>
      <Boxitem />
                    </Item>
            </Grid>

             <Grid size={2}>
                <Item> </Item>
            </Grid>



              <Grid size={2}>
                <Item> side col 1</Item>
            </Grid>

             <Grid size={8}>
                <Item>
                <Carditem />
                    </Item>
            </Grid>

             <Grid size={2}>
                <Item> side col 2</Item>
            </Grid>


           
        </Grid>

        
    );
}







//  
//       <Typography sx={{margin:"20px", fontSize:"22px", position: "relative", left:"172px" , top:"50px", width: "60vw"}}>hello, Anmol</Typography>