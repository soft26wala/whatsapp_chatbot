import Button from '@mui/material/Button';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { useEffect, useState } from 'react';

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




export default function Carditem() {
 const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("card");
    if (saved) {
      setValues(JSON.parse(saved));
    }
  }, []);



    return (
        
       

        <Grid container sx={{
            rowGap: { lg: "-15px" }
            
        }}>
 {values.map((val, i) => (
            <Grid size={4}>
                <Item sx={{}} key={i}>
      
       
     

                    <Card sx={{ minWidth: 275 }}>
                        <Grid container sx={{ p: 1 }}>

                            <Grid size={12}>
                                <Item sx={{ textAlign: "left", }}>
                                    <Typography variant="h6" component="div">
                                        {val}
                                    </Typography>
                                </Item>
                            </Grid>



                            <Grid size={6}>
                                <Item sx={{ textAlign: "left", }}>
                                    <Typography component="div">
                                        Status
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "1rem", color: "grey" }}>
                                        Created
                                    </Typography>
                                </Item>
                            </Grid>

                            <Grid size={6}>
                                <Item sx={{ textAlign: "left", }}>
                                    <Typography component="div">
                                        Active plan
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ fontSize: "1rem", color: "#0a474c;" }}>
                                        FREE FOREVER
                                    </Typography>
                                </Item>
                            </Grid>

                            <Grid size={6}>
                                <Item sx={{ textAlign: "left" }}>

                                </Item>
                            </Grid>

                            <Grid size={6}>
                                <Item sx={{ textAlign: "left" }}>

                                </Item>
                            </Grid>


                            <Grid size={6}>
                                <Item sx={{ textAlign: "left" }}>
                                    <Typography component="div">
                                        Number
                                    </Typography>
                                    <Typography component="div" variant="h6" sx={{ color: "grey", fontWeight: 700 }}>
                                        N/A
                                    </Typography>
                                </Item>
                            </Grid>

                            <Grid size={6}>
                                <Item sx={{ textAlign: "left" }}>  </Item>
                            </Grid>

                            <Grid size={6}>
                                <Item sx={{ textAlign: "left" }}>


                                </Item>
                            </Grid>

                            <Grid size={6}>
                                <Item sx={{ textAlign: "left" }}>  </Item>
                            </Grid>


                            <Grid size={8}>
                                <Item sx={{ textAlign: "left" }}> Created at Sep 8, 2025</Item>
                            </Grid>



                            <Grid size={12}>
                                <Link to={'Demo'}><Button

                                    sx={{
                                        mt: 2, // margin-top: 16px (theme.spacing(2))
                                        mr: 3, // margin-right: 24px (theme.spacing(3))
                                        px: 3, // padding-left/right: 24px
                                        width: "100%",
                                        color: "#0a474c",
                                        border: "1px solid rgba(10, 71, 76, 0.5)",
                                        fontSize: "0.875rem",
                                        minWidth: 60,
                                        boxSizing: "border-box",
                                        transition:
                                            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, " +
                                            "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, " +
                                            "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                        fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
                                        fontWeight: 500,
                                        lineHeight: 1.75,
                                        letterSpacing: "0.02857em",
                                        textTransform: "none",
                                        cursor: "pointer",
                                        display: "inline-flex",
                                        outline: 0,
                                        position: "relative",
                                        alignItems: "center",
                                        userSelect: "none",
                                        verticalAlign: "middle",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                        backgroundColor: "transparent",
                                        WebkitAppearance: "none",
                                        WebkitTapHighlightColor: "transparent",
                                        borderRadius: "6px",
                                        height: "40px",
                                    }}
                                >View</Button></Link>
                                <Item sx={{ textAlign: "left" }}>  </Item>
                            </Grid>
                        </Grid>





                        <CardActions>

                        </CardActions>
                    </Card>




                </Item>
            </Grid>

))}
</Grid>

    )
}
