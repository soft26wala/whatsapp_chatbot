import React from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';


function Header() {
  return (
      <Alert variant="filled" severity="success" sx={{
        bgcolor: "green.700", // Material color palette use करो या custom hex
        color: "white",
        maxHeight: {sm:"70px", xs:"30px", lg:"30px"},
        marginBottom: {sm:"230px", xs:"70px"},
        py: 1,
        px: { xs: 0, lg: 2 },
        display: "flex",
        justifyContent: { xs: "start", sm: "center" },
        alignItems: { xs: "start", sm: "center" },
        textAlign: { xs: "left", sm: "center" },
        gap: 2,
        transform: "scaleY(1.2)", 
        fontSize: { xs: "0.5rem", sm:"0.8em", lg: "1.4rem" },
        background: "linear-gradient(90deg,rgba(48, 155, 42, 1) 0%, rgba(80, 145, 107, 1) 0%, rgba(0, 38, 0, 1) 100%, rgba(158, 181, 159, 1) 16%);",

      }}>

        Unlock AI advantage for your business at India’s Biggest AI event • 24 Sept 2025 <Button variant="contained"
          sx={{
            mx: {lg:7,  sm:3,  xs:1},
            borderRadius:{ lg:"5px", xs:"5px"},
            color: "#1c1c1cff",
            backgroundColor: "green",
            fontWeight: {sm:"bold", xs:"100"},
            textTransform: "none",
            fontSize: {sm:"1rem", xs:"0.5rem"},
            letterSpacing: {sm:"1.5px", xs:"0.5px"},
            height: {lg:"25px", sm:"25px", xs:"15px"},
          }}>Register</Button>
      </Alert>
  )
}

export default Header
