import * as React from 'react';
// import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

function SideVid() {

  return (
   <Card sx={{ minHeight: {xs: "20vh", sm:"50vh", lg: "75vh" }, width: "44vw", position: 'relative', top: {lg:"90px", sm:"60px" , xs:"10px"}, borderRadius: "none" }}>
     <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="/vid1.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
      <CardCover
        
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
         
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SideVid