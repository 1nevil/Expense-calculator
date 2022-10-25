import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import {
  Income,
  Groceries,
  Entertainment,
  Bills,
} from "../feature/counterSlice";
import Grid from "@mui/material/Grid";

const Form = () => {
  const [income, setIncome] = useState(50000);
  const [groceries, setGroceries] = useState(5000);
  const [entertainment, setEntertainment] = useState(5000);
  const [bills, setBills] = useState(5000);

  const dispatch = useDispatch();

  const handleIncome = (e) => {
    setIncome(e.target.value);
    dispatch(Income(e.target.value));
  };
  const handleGroceries = (e) => {
    setGroceries(e.target.value);
    dispatch(Groceries(e.target.value));
  };
  const handleEntertainment = (e) => {
    setEntertainment(e.target.value);
    dispatch(Entertainment(e.target.value));
  };
  const handleBills = (e) => {
    setBills(e.target.value);
    dispatch(Bills(e.target.value));
  };
  return (
    <>
      <Box
        sx={{
          maxWidth: 350,
          margin: "10px auto",
        }}
      >
        <Typography variant="h5" align="center">
          Enter Your Details
        </Typography>
        <Typography
          id="track-inverted-slider"
          mt={1.5}
          align="center"
          variant="subtitle1"
          gutterBottom2
        >
          Select your Income
        </Typography>
        <Typography id="track-inverted-slider" gutterBottom>
          Enter your salary
        </Typography>
        <Slider
          valueLabelDisplay="auto"
          aria-label="custom thumb label"
          min={0}
          max={100000}
          value={income}
          onChange={(e) => handleIncome(e)}
        />
        <Typography
          id="track-inverted-slider"
          align="center"
          mt={2}
          gutterBottom
          variant="subtitle1"
        >
          Select your expencies
        </Typography>
        <Typography id="track-inverted-slider" gutterBottom>
          Enter groceries Amount
        </Typography>
        <Slider
          valueLabelDisplay="auto"
          aria-label="custom thumb label"
          min={0}
          max={50000}
          value={groceries}
          onChange={handleGroceries}
        />
        <Typography id="track-inverted-slider" gutterBottom>
          Enter entertainment Amount
        </Typography>
        <Slider
          valueLabelDisplay="auto"
          aria-label="custom thumb label"
          min={0}
          max={50000}
          value={entertainment}
          onChange={handleEntertainment}
        />
        <Typography id="track-inverted-slider" gutterBottom>
          Enter bills Amount
        </Typography>
        <Slider
          valueLabelDisplay="auto"
          aria-label="custom thumb label"
          min={0}
          max={50000}
          value={bills}
          onChange={handleBills}
        />
        <Grid container mt={1.5} spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="subtitle1" color="primary">
              Total Income
            </Typography>
            <Typography variant="subtitle2">{income}</Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="subtitle1" color="primary">
              Total Expence
            </Typography>
            <Typography variant="subtitle2">
              {groceries + entertainment + bills}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="subtitle1" color="primary">
              Total Savings{" "}
            </Typography>
            <Typography variant="subtitle2">
              {income - (groceries + entertainment + bills)}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
