import React from "react";
import Typography from "@mui/material/Typography";

const MovieRecommendation = ({ recommendation }) => {
    return (
        <>
            <Typography variant="h5" component="h3">
                Recommended Movie:
            </Typography>

            <Typography variant="h6" component="p">
                Summary:
            </Typography>
        </>
    );
};
export default MovieRecommendation