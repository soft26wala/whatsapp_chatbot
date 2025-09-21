import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { Grid } from "@mui/material";


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
// demo
export default function Projects() {
   return (
        <Grid container spacing={{ lg: 2, xs: 6 }} sx={{ flexGrow: 1 }}>
            <Grid size={12}> 
                <Item sx={{}}>  </Item>
            </Grid>


            <Grid size={2}>
                <Item> side col 1</Item>
            </Grid>

             <Grid size={8}>
                <Item> box </Item>
            </Grid>

             <Grid size={2}>
                <Item> side col 2</Item>
            </Grid>
           
        </Grid>
    );
}
//  Demo 






//  
//       <Typography sx={{margin:"20px", fontSize:"22px", position: "relative", left:"172px" , top:"50px", width: "60vw"}}>hello, Anmol</Typography>
//       <Boxitem />