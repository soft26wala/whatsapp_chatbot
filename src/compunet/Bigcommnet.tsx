import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { Grid, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItem from '../../public/Screenshot 2025-09-12 115056.png';

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
export default function Bigcomnet(props: {title: string, para: string, imgages: string}) {
    return (
        <Grid container spacing={{ lg: 2, xs: 6 }} sx={{ flexGrow: 1, border: "1px solid lightgray", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "10px", marginLeft: {lg:"30px", xs:"0px"}, marginRight: {lg:"0px", xs:"0px"} }}>
            <Grid size={12}>
                <Item sx={{}}>
                    <Typography variant="h5" fontWeight="bold">{props.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { lg: "1.5rem", sm: "1.1rem", xs: "1rem" }, fontStyle: "normal", marginTop: { lg: "10px", sm: "-10px", xs: "-10px" } }}>
                        {props.para}
                    </Typography></Item>
            </Grid>


            <Grid size={12}>
                <Item>
                    
                </Item>
            </Grid>


            <Grid size={{ lg: 12, xs: 12 }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.1rem", fontStyle: "normal", marginTop: "130px" }}>
                    <ImageList sx={{ width: 1700, height: 450 }} cols={3} rowHeight={164}>

                        <ImageListItem >
                            <img
                                srcSet={`../../public/Screenshot 2025-09-12 115056.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={props.imgages}
                                // src={`../../public/Screenshot 2025-09-12 115024.png`}
                                alt="chatbot"
                                loading="lazy"
                            />
                        </ImageListItem>

                    </ImageList>
                </Typography>
            </Grid>


        </Grid>
    )
}
