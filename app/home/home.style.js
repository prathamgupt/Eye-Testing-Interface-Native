import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
  },
  headerBtn: {
    width: "25%",
    height: 40,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  greet: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginBottom: SIZES.medium,
  },
  started: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    marginBottom: 8
  },
  additionalStyle: {
    marginTop: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  additionalTextStyle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});

export default styles;

