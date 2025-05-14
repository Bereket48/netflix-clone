import React from "react";
import Row from "../Row/Row";
import Requests from "../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </>
  );
};

export default RowList;
