import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";


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

export default function AutoGrid() {
    return (
        <Grid container spacing={{ lg: 2, xs: 6 }} sx={{ flexGrow: 1 }}>
            <Grid size={{ lg: 4, xs: 12 }}>
                <Item sx={{}}>  <ChatBubbleOutlineIcon sx={{ fontSize: { lg: 50, xs: 30 }, color: "gray" }} />
                    <Typography variant="h5" fontWeight="bold">Automate Queries</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { lg: "1.1rem", xs: "0.8rem" }, fontStyle: "normal", marginTop: "10px" }}>
                        Effortlessly automate 80% of common user queries with WhatsApp chatbot.
                    </Typography></Item>
            </Grid>


            <Grid size={{ lg: 4, xs: 12 }}>
                <Item> <Box
                    component="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#DA954B"
                    sx={{
                        height: { xs: "2rem", lg: "3rem" },
                        width: "auto",
                    }}
                >
                    <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" />
                </Box>
                    <Typography variant="h5" fontWeight="bold">Drive Sales</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.1rem", fontStyle: "normal", marginTop: "10px" }}>
                        Automate 3x sales on WhatsApp with Smart WhatsApp Chatbot.
                    </Typography>
                </Item>
            </Grid>


            <Grid size={{ lg: 4, xs: 12 }}>
                <Item>
                    <Box
                        component="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#5985E1"
                        sx={{
                            height: { xs: "2rem", lg: "3rem" },
                            width: "auto",
                        }}
                    >
                        <path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z" />
                    </Box>
                </Item>
                <Typography variant="h5" fontWeight="bold" sx={{ color: "#000" }}>Stay Active 24x7</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.1rem", fontStyle: "normal", marginTop: "10px" }}>
                    WhatsApp chatbot works 24/7, responds to user queries, and drives sales.
                </Typography>
            </Grid>
        </Grid>
    );
}
