// import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

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

export default function ProjectHeader() {
  return (

    <Grid container spacing={{ lg: 2, xs: 6 }} sx={{ flexGrow: 1 }}>

      <Grid size={1}>
        <Item>
          <Avatar
            alt="Project Icon"
            src="/chatbotlogo.png" // Example icon, replace with your own
          //  sx={{ width: 56, height: 56, mr: 2 }}
          />
        </Item>
      </Grid>

      <Grid size={10}>
        <Item> </Item>
      </Grid>
        

      <Grid size={1}>
        <Item>menu</Item>
      </Grid>



    </Grid>

    //    <Box component="section" sx={{ boxShadow: "0 0 5px 0 #e6e5e5", position: "fixed", bgcolor: "white", zIndex: 1000, top: 0 }}>
    //    {/* <Box component="section" sx={{ p: 3, boxShadow: "0 0 5px 0 #e6e5e5", position: "fixed", width: "100vw", bgcolor: "white", zIndex: 1000, top: 0 }}> */}
    //    <Avatar
    //      alt="Project Icon"
    //      src="/chatbotlogo.png" // Example icon, replace with your own
    //     //  sx={{ width: 56, height: 56, mr: 2 }}
    //    />
    //    <Box component="span" sx={{ fontSize: "1.5rem", fontWeight: "bold", verticalAlign: "middle" }}>
    //      {/* Projects */}
    //    </Box>
    //  </Box>

  )
}
