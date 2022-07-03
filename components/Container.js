import { Link } from "@mui/material";
import Head from "next/head";

const Container = (props) => (
  <div>
    <Head>
      <title>HOOM Tecnical Test</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </Head>
    <div>{props.children}</div>
  </div>
);
export default Container;
