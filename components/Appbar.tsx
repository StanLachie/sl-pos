import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Appbar = () => {
  const cartTotal = 10;
  const cartChange = 0.5;
  const cartItems = 5;

  return (
    <View style={styles.appbar}>
      <Text style={styles.logo}>
        SL-<Text style={styles.logoFlair}>POS</Text>
      </Text>
      <View style={styles.cart}>
        <View style={styles.cartValues}>
          <Text style={styles.cartTotal}>${cartTotal.toFixed(2)}</Text>
          <Text style={styles.cartChange}>${cartChange.toFixed(2)}</Text>
        </View>
        <View style={styles.cartButton}>
          <Icon name="cart" style={styles.cartIcon} />
          <View style={styles.cartItems}>
            <Text style={styles.cartAmount}>{cartItems}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  appbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#161616",
  },
  logo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },
  logoFlair: {
    color: "#7935e8",
  },
  cart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cartValues: {
    marginRight: 12,
    paddingRight: 12,
    borderRightWidth: 3,
    borderRightColor: "#fff",
  },
  cartTotal: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
  },
  cartChange: {
    color: "#D3D3D3",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
  },
  cartButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartIcon: {
    color: "#fff",
    fontSize: 34,
  },
  cartItems: {
    position: "absolute",
    bottom: 18,
    left: 20,
    width: 16,
    height: 16,
    margin: 4,
    borderRadius: 20,
    backgroundColor: "#7935e8",
  },
  cartAmount: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center"
  },
});
