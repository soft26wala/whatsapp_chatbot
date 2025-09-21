// import Box from '@mui/material/Box';
// import Boxcontent from './Boxcontent';

import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { Grid, Typography } from "@mui/material";
import { TextField, Button } from "@mui/material";
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

export default function Boxitem() {
  const [value, setValue] = useState("");
  const [txtcolor, setTxtcolor] = useState("#000");
  
  const [input, setInput] = useState("");
  const letercount = input.length + "/36";
  const [values, setValues] = useState<string[]>([]);

  // 🔹 Load existing values from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("card");
    if (saved) {
      setValues(JSON.parse(saved));
    } else {
      // default value dal do
      const defaultVal = ["soft26"];
      setValues(defaultVal);
      localStorage.setItem("card", JSON.stringify(defaultVal));
    }
  }, []);

  const handleSubmit = () => {
    if (!input.trim()) return;

    const updated = [...values, input]; // add new value
    setValues(updated);
    localStorage.setItem("card", JSON.stringify(updated)); // save to localStorage
    setInput(""); // input clear
  };


  return (


    <Grid container sx={{ flexGrow: 1 }}>
      <Grid size={7}>
        <Item sx={{
          background: "none",
        }}>

          <Typography variant="h6" sx={{ marginTop: "100px", display: "flex", color: "#000" }}>Create New Project</Typography>
          <Typography sx={{ marginTop: "1px", marginBottom: "25px", display: "flex", fontSize: "0.8rem" }}>One Business Project is associated with one WhatsApp Business API Number</Typography>


          <Grid container sx={{ flexGrow: 1 }}>

            <Grid size={11} >
              <Item sx={{ borderRadius: "4px 0 0 4px", padding: "5px", }}>
                <input type="text" style={{
                  height: "100%",
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "1rem",
                  color: "#000",
                  backgroundColor: "#fff"


                }}
                  placeholder="Enter your Project Name"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Item>
            </Grid>



            <Grid size={1}>
              <Item sx={{
                borderRadius: "0 4px 4px 0",
                color: txtcolor,
                padding: "5px",
              }} > {letercount} </Item>
            </Grid>



            <Grid container sx={{ flexGrow: 1 }}>

              <Grid size={1}>
                <Item sx={{
                  background: "none",
                  padding: "5px 0",
                }} >


                  <Button variant="contained" onClick={handleSubmit}
                    sx={{
                      marginTop: "5px",
                      borderRadius: "5px",
                      color: "#1c1c1cff",
                      backgroundColor: "green",
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: "1rem",
                      letterSpacing: "0.5px",
                      height: "35px",
                      padding: "0 21px",
                      marginBottom: "100px"
                    }}>Create</Button>

                </Item>
              </Grid>
              <Grid size={11}>
                <Item sx={{
                  borderRadius: "0 4px 4px 0",
                  background: "none",
                }} > </Item>

              </Grid>

            </Grid>
          </Grid>


        </Item>
      </Grid>

      {/* <=========================================================> */}

      <Grid size={5}>
        <Item sx={{
          background: "none",
        }}>
          <img src="/sideimg.png" alt="Project Illustration" style={{ width: "80%", marginTop: "80px" }} />
        </Item>
      </Grid>



    </Grid>

  )
}
