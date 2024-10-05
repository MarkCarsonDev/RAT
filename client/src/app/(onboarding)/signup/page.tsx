"use client";
import { Button, TextField, Typography, Box, Link, Divider } from "@mui/material";

export default function SignupPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundColor: "#f6f8ff",
      }}
    >
      {/* Let's get started section */}
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Let’s Get Started.
      </Typography>

      {/* Sign in with Google Button */}
      <Button
        className="border-line"
        variant="outlined"
        startIcon={
          <img src="https://www.google.com/favicon.ico" alt="Google" />// will fix this to icon with mui
        }
        sx={{
          marginBottom: 3,
          backgroundColor: "#ffff",
          width: "780px",
          borderRadius: "8px",
          border: "none",
        }}
      >
        Sign up with Google
      </Button>

      {/* Divider with "Or" */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginY: 2,
        }}
      >
        <Divider
          sx={{
            width: "100px",
            height: "1px",
            backgroundColor: "#ccc",
            marginRight: 2, // MUI shorthand for marginRight
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          Or
        </Typography>
        <Divider
          sx={{
            width: "100px",
            height: "1px",
            backgroundColor: "#ccc",
            marginLeft: 2, // MUI shorthand for marginLeft
          }}
        />
      </Box>

      {/* Signup form */}
      <Box
      component={"form"}
      className="border-line"
        sx={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "8px",
          textAlign: "center",
          width: "700px",
        }}
      >
          <TextField
            label="Email"
            name="email"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Confirm Email"
            name="confirmEmail"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            required
            margin="normal"
          />
          <Button
          type="button"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ 
            mt: 2,
            boxShadow: "none", // Removed the shadow 
            backgroundColor: "#496FFF", // Applied the requested color for the button
            ":hover": { 
            backgroundColor: "#3B5AC6", 
            boxShadow: "none"
            } // Slightly darker shade on hover
          }}
        >
          Confirm
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          <Link href="/login" color="inherit">
            Logging in?
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}