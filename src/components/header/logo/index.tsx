import { Avatar } from "@mui/material";


const Logo = () => {
    return (
        <>
            <Avatar
                alt="Material-UI Logo"
                src="logo.jpg"
                sx={ { width: 60, height: 60, marginRight: 1 } }
            />
        </>
    )
}

export default Logo