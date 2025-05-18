import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardContent,
  Container,
} from "@mui/material";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePlaceOrder = () => {
    alert(
      `✅ Order Placed!\n📍 Address: ${address}\n💳 Payment: ${paymentMethod}`
    );
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          mb: 8,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "#fff",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Checkout
        </Typography>

        <Card variant="outlined" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Delivery Instructions
            </Typography>
            <TextField
              fullWidth
              label="Enter delivery address"
              multiline
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Payment Method
            </Typography>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery"
              />
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Card Payment"
              />
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
            </RadioGroup>
          </CardContent>
        </Card>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handlePlaceOrder}
        >
          Place Order
        </Button>
      </Box>
    </Container>
  );
};

export default Checkout;
