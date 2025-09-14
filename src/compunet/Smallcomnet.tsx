import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { Grid, Typography } from "@mui/material";

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography["body-sm"],
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: 8,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function Smallcomnet(props: {
  title: string;
  para: string;
  imgages: string;
}) {
  return (
    <Grid container spacing={2} sx={{border: "1px solid lightgray", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" , borderRadius: "10px"}}>
  {/* Text Section */}
  <Grid size={12}>
    <Item sx={{ textAlign: "left", padding: { lg: "20px", xs: "10px" } }}>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {props.para}
      </Typography>
    </Item>
  </Grid>

  {/* Image Section */}
  <Grid size={12}>
    <Item>
      <img
        src={props.imgages}
        alt="chatbot"
        style={{
          width: "100%",      // grid ke width ke hisaab se adjust hoga
          height: "100%",     // parent box fill karega
          maxHeight: "400px", // optional limit
          objectFit: "cover", // crop karke fill karega
          borderRadius: "8px"
        }}
      />
    </Item>
  </Grid>
</Grid>
  );
}
