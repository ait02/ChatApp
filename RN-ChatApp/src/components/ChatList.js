import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ChatMap from "./ChatMap";

const ChatList = ({ navigation }) => {
  const [persons, setPersons] = useState([
    {
      id: "1",
      name: "Arif Ikmal",
      image_url:
        "https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg",
    },
    {
      id: "2",
      name: "Jeff",
      image_url:
        "https://www.nairaland.com/attachments/5815065_0403jeffbezosamazon400x400_jpeg3319017d6f7e848686ed20274da68f9e",
    },
    {
      id: "3",
      name: "Jack",
      image_url:
        "https://i.guim.co.uk/img/media/4aa0bd7f9d022f2ce2bddc2229d4a3a11ae63e92/0_65_6260_3757/master/6260.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=52e6c8cdccc37527c88c97190d16d6ee",
    },
    {
      id: "5",
      name: "Elon",
      image_url:
        "https://s4.reutersmedia.net/resources/r/?m=02&d=20180828&t=2&i=1298146527&w=640&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEE7R08V",
    },
    {
      id: "6",
      name: "Patrick",
      image_url:
        "https://pbs.twimg.com/profile_images/825622525342199809/_iAaSUQf_400x400.jpg",
    },
    {
      id: "7",
      name: "Warren",
      image_url:
        "https://cdn.thegentlemansjournal.com/wp-content/uploads/2015/06/WarrenBuffettSquare-TGJ.jpg",
    },
    {
      id: "8",
      name: "Gates",
      image_url:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={persons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatMap
            item={item}
            lastPerson={persons[persons.length - 1]}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 15, flex: 1 },
  primaryText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});
