import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import StandardImageList from "./components/videos-studio";
import Footer from "./components/footer";

function App() {
    return (
        <Box sx={{ height: "100vh" }}>
            <Header />
            <StandardImageList />
            <Footer />
        </Box>
    );
}

export default App;
