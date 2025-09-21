import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  MenuItem,
} from "@mui/material";

export default function Demo() {
  const [lang, setLang] = useState("");

  return (
    <>
    <p>tag panding design soon ...</p>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 1100,
          width: "100%",
          borderRadius: 3,
          boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <Grid container spacing={4} alignItems="left">
            {/* LEFT SIDE */}
            <Grid size={{xs:12, md:6}} sx={{ textAlign: { xs: "left", md: "left" , lg:"left"}, borderRight: { xs: "none", md: "1px solid #e0e0e0", lg:"solid 0.5px #b7b7b7" }, pr: { md: 2, lg:0 }, padding:{lg:"100px 30px"} }}>
              <Box>
                {/* Logo */}
                <Box sx={{ mb: 2 }}>
                  <img
                    src="https://aisensy.com/assets/images/logo.png" // Replace with your logo
                    alt="AiSensy Logo"
                    style={{ height: 45 }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 1, fontSize: { lg: "1rem", md: "2rem" } }}
                >
                  AiSensy Live Demo Call
                </Typography>

                {/* English Description */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2, fontSize: { lg: "0.9rem", md: "1.2rem" } }}
                >
                  Explore the game-changing features & benefits of AiSensy - #1
                  WhatsApp Marketing Platform and how AiSensy can help you boost
                  sales by 3X
                </Typography>

                {/* Hindi Description */}
                <Typography variant="body1" color="text.secondary">
                  AiSensy की गेम-चेंजिंग सुविधाओं और लाभों को जानें - #1 व्हाट्सएप
                  मार्केटिंग प्लेटफ़ॉर्म और AiSensy आपको बिक्री को 3 गुना बढ़ाने
                  में कैसे मदद कर सकता है
                </Typography>
              </Box>
            </Grid>

            {/* RIGHT SIDE */}
            <Grid size={{xs:12, md:6}}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  padding: {lg:"22px 26px 0 18px"}
                }}
              >
                <Typography variant="body1" sx={{ fontSize: { lg: "1rem", md: "1.2rem" }, alignItems: "left" }}>
                  We offer AiSensy Demo in both Hindi & English. Please choose
                  the preferred language
                </Typography>

                {/* Dropdown */}
                <TextField
                  select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  fullWidth
                  variant="outlined"
                  placeholder="Select..."
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="hindi">हिंदी</MenuItem>
                </TextField>

                {/* Submit Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0066FF",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    py: 1.2,
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#0052cc" },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}
