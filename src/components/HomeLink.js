import { Fab, Link } from "@material-ui/core";
import { Home } from "@material-ui/icons";

export const HomeLink = () => {
    let style = {
        float: "right",
        margin: 20,
    };
    return (
        <div style={style}>
            <Link href="/" underline="none">
                <Fab size="medium" color="primary" aria-label="Home">
                    <Home fontSize="medium" />
                </Fab>
            </Link>
        </div>
    );
};
