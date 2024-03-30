"use client";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  useTheme,
  MobileStepper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  address: {
    addressLocality: "Hyderabad",
    postalCode: "",
    streetAddress: "Hyderabad",
  },
  email: "reddeppa@yrpdesigns.in",
  alumni: [
    {
      name: "Reddeppa",
    },
  ],
  name: "yrpdesigns",
  telephone: "+91 8555040965",
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              YRP Designs
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
            <CardMedia
              sx={{ height: 145 }}
              image="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                TRANSFORM YOUR SPACE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bringing life to your home with our interior design services
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button variant="contained">GET STARTED</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box>
        <Typography
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ padding: ".75rem" }}
        >
          ABOUT YRP DESIGNS
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="green iguana"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Our Expertise
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  At YRP DESIGNS, we have a team of expert interior designers
                  who are passionate about creating beautiful, functional spaces
                  that reflect your unique style and personality.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: "none", borderRadius: 0, height: "320px" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="green iguana"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Our Process
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  From initial consultation to final installation, our
                  streamlined process ensures that your interior design project
                  runs smoothly and efficiently.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1597476817120-9b82cef5ce82?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="green iguana"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Our Portfolio
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  Take a look at some of our past projects and get inspired for
                  your own interior design project. We have experience working
                  on a wide variety of spaces, from residential to commercial.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ padding: ".75rem" }}
        >
          DESIGNS THAT DEFINE: OUR DESIGN WORKS
        </Typography>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
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
                    component="img"
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "primary.main",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`Copyright © ${new Date().getFullYear()} YRP DESIGNS - All Rights Reserved.`}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
