import { Typography, Box, Fab } from "@material-ui/core";
import { VerifiedUser, Email, PhoneIphone, LinkedIn, Instagram, WhatsApp } from "@material-ui/icons";

export const Profile = (props) => {
    return <ProfileCard user={props.user} />;
};

var ProfileCard = (props) => {
    let style = {
        height: 500,
        width: 500,
        backgroundColor: "black",
        borderRadius: "10px",
        padding: 20,
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        margin: "30px auto",
    };
    return (
        <div style={style}>
            <AvatarImage />
            <AvatarInfo user={props.user} />
            <AvatarLinks />
            <Footer />
        </div>
    );
};

var AvatarImage = () => {
    let style = {
        height: 175,
        width: 175,
        borderRadius: "50%",
        marginTop: -50,
    };
    return <img alt="profileImage" src={require("../../../assets/images/User1.jpg")} style={style} />;
};

var AvatarInfo = (props) => {
    let style = {
        color: "white",
    };
    return (
        <div style={{ paddingTop: 20 }}>
            <Typography color="error" variant="h4" style={style}>
                {props.user.name}
            </Typography>
            <ul>
                <li>
                    <Typography variant="subtitle1" style={style}>
                        <VerifiedUser fontSize="small" color="error" style={{ paddingRight: 3 }} />
                        {props.user.username}
                    </Typography>
                </li>
                <li>
                    <Typography variant="subtitle1" style={style}>
                        <Email fontSize="small" color="error" style={{ paddingRight: 3 }} />
                        {props.user.email}
                    </Typography>
                </li>
                <li>
                    <Typography variant="subtitle1" style={style}>
                        <PhoneIphone fontSize="small" color="error" style={{ paddingRight: 3 }} />
                        {props.user.phone}
                    </Typography>
                </li>
            </ul>
            <br />
        </div>
    );
};

var AvatarLinks = () => {
    return (
        <Box sx={{ "& > :not(style)": { m: 1 }, textAlign: "center", marginTop: "50px" }}>
            <Fab color="secondary" aria-label="add">
                <LinkedIn fontSize="large" />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <Instagram fontSize="large" />
            </Fab>
            <Fab color="secondary" aria-label="like">
                <WhatsApp fontSize="large" />
            </Fab>
        </Box>
    );
};

var Footer = () => {
    return (
        <Typography variant="subtitle2" color="primary" align="center">
            Design By FocuSoft
        </Typography>
    );
};
