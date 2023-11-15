// import { StyleSheet } from "react-native";
// import { FONT, SIZES, COLORS } from "../../constants";

// const remarkStyles = {
//   redText: { color: 'red' },
//   greenText: { color: 'green' },
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: SIZES.medium,
//     backgroundColor: COLORS.lightWhite,
//   },
//   headerBtn: {
//     fontSize: SIZES.medium,
//     fontFamily: FONT.medium,
//     color: COLORS.gray,
//     marginBottom: SIZES.medium,
//   },
//   greet: {
//     fontFamily: FONT.regular,
//     fontSize: SIZES.large,
//     color: COLORS.primary,
//     marginBottom: SIZES.medium,
//   },
//   started: {
//     fontFamily: FONT.bold,
//     fontSize: SIZES.xLarge,
//     color: COLORS.primary,
//     marginTop: 2,
//   },
//   remarkTextRed: {
//     ...remarkStyles.redText,
//   },
//   remarkTextGreen: {
//     ...remarkStyles.greenText,
//   },
//   additionalStyle: {
//     marginTop: SIZES.medium,
//     padding: SIZES.small,
//     backgroundColor: COLORS.secondary,
//     borderRadius: SIZES.medium,
//   },
//   additionalTextStyle: {
//     fontFamily: FONT.medium,
//     fontSize: SIZES.medium,
//   },
// });

// export default styles;

import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../constants";

const remarkStyles = {
  redText: { color: 'red' },
  greenText: { color: 'green' },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginBottom: SIZES.medium,
    textAlign: 'center',
  },
  detail: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: SIZES.small,
  },
  remarkText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    textAlign: 'center',
    marginTop: SIZES.medium,
  },
  remarkTextRed: {
    ...remarkStyles.redText,
  },
  remarkTextGreen: {
    ...remarkStyles.greenText,
  },
});

export default styles;
