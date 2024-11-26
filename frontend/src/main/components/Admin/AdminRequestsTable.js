import React from "react";
import OurTable, {} from "main/components/OurTable";

export default function AdminRequestsTable({ requests }) {
  // Stryker disable all : hard to test for query caching
  // Stryker restore all

  const columns = [
    {
      Header: "id",
      accessor: "id", // accessor is the "key" in the data
    },
    {
        Header: "Professor's Name",
        accessor: "professorName",
    },
    {
      Header: "Professor's Email",
      accessor: "professorEmail",
    },
    {
      Header: "Requester's Name",
      accessor: "requesterName",
    },
    {
      Header: "Recommendation Type",
      accessor: "recommendationType",
    },
    {
      Header: "Details",
      accessor: "details",
    },
    {
      Header: "Completion Date",
      accessor: "completionDate",
    },
  ];

  return (
    <OurTable
      data={requests}
      columns={columns}
      testid={"AdminRequestsTable"}
    />
  );
}