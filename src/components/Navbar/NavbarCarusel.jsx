import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Save Up to 40%",
    link: "Shop All Our New Markdowns",
  },
  {
    label: "Members: Free Shipping on Orders $50+",
    link: "Sign Up",
  },
  {
    label: "Get Your Gear Faster",
    link: "Look for Store Pickup at Checkout",
  },
];

function NavbarCarusel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F5F5F5",
          height: "60px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
          }}
        >
          <Button
            sx={{ color: "#111" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "400px",
                        textAlign: "center",
                        color: "#111",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {step.label}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#111",
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      {step.link}
                    </Typography>
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <Button
            sx={{ color: "#111" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        </Box>
      </Box>
      <Box>
        <Box className="container">
          <Box
            sx={{
              marginLeft: "-1pc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "15px 0 ",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: "22px" }}>
              Men's Shoes & Sneakers
            </Typography>
            {/* Здесь ранее находились кнопки "Sort By" */}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NavbarCarusel;
