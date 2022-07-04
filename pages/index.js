import { Button } from "@mui/material";
import React from "react";
import Container from "../components/Container";
import EntityList from "../components/EntityList";

const Index = () => {
  return (
    <Container>
      <img src="https://hoom.com.co/wp-content/uploads/2022/04/logo_color.svg" />
      <hr noshade></hr>
      <div>
        {EntityList}
      </div>
        Hello woorld
    </Container>
  );
};
export default Index;
