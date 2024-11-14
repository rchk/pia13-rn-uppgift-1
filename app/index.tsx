import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 5, backgroundColor: "skyblue" }}>
      
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "red" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>RÖD</Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "green" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>GRÖN</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "yellow" }} />
   
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 3, justifyContent: "center", alignItems: "center", backgroundColor: "red" }} />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }} />
      </View>

      <View style={{ flex: 4, justifyContent: "center", alignItems: "center", backgroundColor: "skyblue" }} />

      <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center", backgroundColor: "orange" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>ORANGE</Text>
      </View>

    </View>
  );
}
