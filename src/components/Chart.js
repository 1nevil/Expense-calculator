import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { readExpences, readIncome } from "../feature/counterSlice";
import { PieChart } from "react-minimal-pie-chart";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Chart = () => {
  const income = useSelector(readIncome);
  const expence = useSelector(readExpences);
  const savings = income - expence;

  return (
    <>
      <Box
        sx={{
          margin: "10px auto",
        }}
      >
        <Typography variant="h5" align="center">
          Total Savings
        </Typography>

        {savings <= 0 ? (
          <Typography variant="h6" mt={10} color="#ff7961" align="center">
            You need to control your expences
          </Typography>
        ) : (
          <>
            <Grid
              container
              direction="row"
              justifyContent="center"
              sx={{ margin: "1rem 0" }}
            >
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#5594fa",
                    border: 2,
                  }}
                ></Box>
                Income
              </Grid>
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#f7b45c",
                    border: 2,
                  }}
                ></Box>
                Expence
              </Grid>
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#96f78d",
                    border: 2,
                  }}
                ></Box>
                Saving
              </Grid>
            </Grid>
            <div className="chart-container ">
              <PieChart
                animate
                //   center={[75, 50]}
                paddingAngle={5}
                animationDuration={700}
                animationEasing="ease-out"
                data={[
                  { title: "Expence", value: expence, color: "#f7b45c" },
                  {
                    title: "Income",
                    value: income,
                    color: "#5594fa",
                  },
                  { title: "Saving", value: savings, color: "#96f78d" },
                ]}
                lengthAngle={360}
                lineWidth={45}
                startAngle={0}
                viewBoxSize={[100, 100]}
              />
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default Chart;
