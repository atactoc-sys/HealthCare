import React, { useState, useEffect } from "react";
import ReportCard from "./ReportCard";
import "./ReportCard.css";
import "./Report.css";

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Simulate fetching reports from a dummy API after component mounts
    fetchReportsFromDummyAPI().then((data) => setReports(data));
  }, []);

  const fetchReportsFromDummyAPI = () => {
    // Simulate an API call with mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        const dummyReports = [
          {
            id: 1,
            title: "Urin Report",
            content: "View report",
          },
          {
            id: 2,
            title: "Blood Report",
            content: "View report",
          },
          {
            id: 3,
            title: "Bp repoet",
            content: "View report",
          },
          {
            id: 4,
            title: "full body report",
            content: "View report",
          },
          // Add more dummy reports as needed
        ];
        resolve(dummyReports);
      }, 1000); // Simulate a 1-second delay
    });
  };

  const handleViewDetails = (reportId) => {
    console.log(`View details clicked for report ID ${reportId}`);
  };

  return (
    <div className="report">
      <div className="reportComponent">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            reportTitle={report.title}
            reportContent={report.content}
            onViewDetails={() => handleViewDetails(report.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Reports;
