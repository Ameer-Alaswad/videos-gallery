import { Box } from "@mui/material";
import Header from "./components/header";
import StandardImageList from "./components/videos-studio";
import Footer from "./components/footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
    typography: {
        fontFamily: "Caviar",
    },
});

function App() {
    return (
        <ThemeProvider theme={ theme }>
            <ToastContainer
                position="bottom-center"
                limit={ 1 }
            />
            <Box sx={ { height: "100vh" } }>
                <Header />
                <StandardImageList />
                <Footer />
            </Box>
        </ThemeProvider>
    );
}

export default App;
