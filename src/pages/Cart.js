import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <Box sx={{ p: 6 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={3}>
        {/* Left Section - Cart Items */}
        <Grid item xs={12} md={8}>
          {cartItems.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            cartItems.map((item, index) => (
              <Card key={index} sx={{ mb: 3 }}>
                <CardContent sx={{ display: "flex" }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: 120,
                      height: 120,
                      objectFit: "contain",
                      mr: 2,
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography color="text.secondary">
                      Brand: {item.brand || "Generic"}
                    </Typography>
                    <Typography fontWeight="bold" sx={{ my: 1 }}>
                      ₹{item.price.toLocaleString("en-IN")}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Typography>Qty: 1</Typography>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </Button>
                    </Box>
                    <Typography color="success.main">
                      Eligible for FREE Shipping
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>

        {/* Right Section - Summary */}
        <Grid item xs={12} md={4}>
          <Card sx={{ position: "sticky", top: 100 }}>
            <CardContent>
              <Typography color="success.main" gutterBottom>
                Part of your order qualifies for <b>FREE Delivery</b>. Choose
                FREE Delivery option at checkout.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">
                Subtotal ({cartItems.length} items):{" "}
                <span style={{ color: "#B12704" }}>
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="This order contains a gift"
                sx={{ my: 2 }}
              />
              <Button
                variant="contained"
                color="warning"
                fullWidth
                onClick={handleCheckout}
              >
                Proceed to Buy
              </Button>
              <Typography color="text.secondary" align="center" sx={{ mt: 2 }}>
                EMI Available
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
