import React from "react";
import DataTable from "../components/DataTable";

function DataPage({ fundings }) {
  const funding = fundings;
  return (
    <>
      <DataTable funding={funding} />
    </>
  );
}

export default DataPage;
