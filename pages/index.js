import { Button, Card, CardHeader, CardContent } from "@mui/material";
import React from "react";
import Container from "../components/Container";
//import EntityList from "../components/EntityList";

const Index = () => {
     return(
        <Container>
            <Card>
                <CardHeader/>
                <CardContent>
                    <h1>Hello World</h1>
                </CardContent>
            </Card>
            <Button variant="outline" color="primary">Hello woorld</Button>
        </Container>
        
     )
}
export default Index