import React from "react";
import { Container, Box, Typography, Grid, makeStyles, Theme, createStyles, Card } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const MainElements: React.FC = (props) => {

  const GridItem: React.FC = (p) => {
    return (
      <Grid item xs={12} md={6} className={useStyles().paper}>
        <Card >
          <Typography variant="h3" align="center">
            {p.children}
          </Typography>
        </Card>
      </Grid>
    );
  };
  const Employees: React.FC = () => {
    return <GridItem>
      ?
    </GridItem>
  }
  return (
    <Container className={useStyles().root}>
      <Grid container>
        <GridItem>العقود</GridItem>
        <GridItem>المخازن</GridItem>
        <Employees></Employees>
        <GridItem>4</GridItem>
      </Grid>
    </Container>
  );
};

export default MainElements;
