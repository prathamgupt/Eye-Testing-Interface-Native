// import React from "react";
// import { View, Text, SafeAreaView, ScrollView } from "react-native";
// import styles from "./resultdetails.style";

// const ResultDetails = ({ route }) => {
//   const { item } = route.params;

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View>
//           <Text>Result</Text>
//           <Text>{item.vision}</Text>
//           <Text>{item.spherical}</Text>
//           <Text>{item.astigmatic}</Text>
//           <Text style={item.remark === "Please Consult a doctor" ? styles.remarkTextRed : styles.remarkTextGreen}>
//             {item.remark}
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ResultDetails;


import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "./resultdetails.style";

const ResultDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Result</Text>
          <Text style={styles.detail}>{item.vision}</Text>
          <Text style={styles.detail}>{item.spherical}</Text>
          <Text style={styles.detail}>{item.astigmatic}</Text>
          <Text
            style={
              item.remark === "Please Consult a doctor"
                ? [styles.remarkText, styles.remarkTextRed]
                : [styles.remarkText, styles.remarkTextGreen]
            }
          >
            {item.remark}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultDetails;
