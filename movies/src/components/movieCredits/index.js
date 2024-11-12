import React from "react";
import Typography from "@mui/material/Typography";

const MovieCredits = ({ credits }) => {
    return (
        <>
            <Typography variant="h5" component="h3">
                Cast: {credits.crew}
            </Typography>

            <Typography variant="h6" component="p">
                Crew: {credits.crew}
            </Typography>
        </>
    );
};
export default MovieCredits
