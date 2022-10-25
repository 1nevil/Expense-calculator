import Chart from "../components/Chart";
import Form from "../components/Form";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const Counter = () => {
  return (
    <Grid container>
      <Grid item justifyContent="center" xs={12} md={6} lg={6}>
        <Form />
      </Grid>
      <Grid item justifyContent="center" xs={12} md={6} lg={6}>
        <Chart />
      </Grid>
    </Grid>
  );
};

export default Counter;
