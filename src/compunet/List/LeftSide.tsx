import { Grid, Box, Typography, Button } from "@mui/material";

interface FeatureSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  image: string;
  reverse?: boolean; // agar image left/right switch karna ho
}





export default function LeftSide({
  title,
  description,
  buttonText,
  buttonLink = "#",
  image,
  reverse = false,
}: FeatureSectionProps) {
    
    // const [show, setShow] = useState(true);
    return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      direction={reverse ? "row-reverse" : "row"}
      sx={{ py: 6 }}
    >
      {/* Left Content */}
      <Grid size={{xs:12, md:6}}>
        <Box>
          <Typography variant="h4" gutterBottom >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Button
            href={buttonLink}
            variant="outlined"
            sx={{ mt: 2, borderRadius: "8px", px: 3, py: 1 }}
          >
            {buttonText}
          </Button>
        </Box>
      </Grid>

      {/* Right Image */}
      <Grid size={{xs:12, md:6}}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "82%",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Grid>
    </Grid>
  );
}
