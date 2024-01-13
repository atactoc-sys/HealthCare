// ReportCard.jsx

import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./ReportCard.css"; // Import the stylesheet

const ReportCard = ({ reportTitle, reportContent, onViewDetails }) => {
  return (
    <Card className="CardRoot">
      <CardContent className="CardContentRoot">
        <Typography variant="h5" component="div" className="ReportTitle">
          {reportTitle}
        </Typography>
        <Typography className="ReportContent" color="text.secondary">
          {reportContent}
        </Typography>
        <Button
          variant="contained"
          className="ViewDetailsButton"
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

ReportCard.propTypes = {
  reportTitle: PropTypes.string.isRequired,
  reportContent: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ReportCard;
