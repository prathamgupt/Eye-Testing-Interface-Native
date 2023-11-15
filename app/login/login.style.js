import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greet: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    width: "80%",
    marginBottom: SIZES.medium,
  },
  formInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    paddingHorizontal: SIZES.medium,
  },
  submitBtn: {
    width: "80%",
    height: 40,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtnText: {
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  errorContainer: {
    marginTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.red,
  },
});

export default styles;
