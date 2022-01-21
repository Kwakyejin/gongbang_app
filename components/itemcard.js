import { View } from "react-native";

function ItemCard({ key, BrandName, Name }) {
  return (
    <View>
      <Text>
        식물 설명 : <span className="text--brand">{BrandName}</span>
      </Text>
      <Text>식물이름 : {Name}</Text>
    </View>
  );
}
