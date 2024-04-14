import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { Header } from "../components/Header";
import BackVector from "../../assets/vectors/back.svg";
import { colors } from "../theme/colors";
import { songs } from "../mocks/songs.mock";
import { Card } from "../components/Card";
import { CommonStyles } from "../theme/common";
import { screenWidth } from "../theme/consts.styles";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
const HeaderLeft = () => {
  const { navigate } = useNavigation();
  return (
    <Pressable onPress={() => navigate("Home")}>
      <BackVector color={colors.white} />
    </Pressable>
  );
};

export const FavoriteScreen = () => {
  const renderItems = ({ item }: { item: any }) => {
    return (
      <Card
        size="l"
        url={item.url}
        style={{ width: "100%" }}
        imageStyle={{ width: cardWidth }}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Header left={<HeaderLeft />} />
      <View style={styles.info}>
        <Image style={styles.image} source={{ uri: songs[0].url }} />
        <View style={CommonStyles.flex}>
          <View style={styles.cardTitle}>
            <Text style={styles.singer}>{songs[0].title}</Text>
            <Text style={styles.text}>{songs[0].gmail}</Text>
          </View>
          <Text style={[styles.text, styles.member]}>
            {songs[0].subscription ?? "Not subscribed"}
          </Text>
          <Text style={styles.text}>{songs[0].description}</Text>
        </View>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <Text style={styles.singer}>Favourite Album</Text>
        <FlashList
          estimatedItemSize={50}
          data={songs}
          renderItem={({ item: { url } }) => <Card size="l" url={url} />}
          horizontal
          ItemSeparatorComponent={() => (
            <View style={{ width: 9, height: "100%" }} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={CommonStyles.flex}>
        <Text style={styles.singer}>Favourite Music</Text>
        <FlashList
          data={songs}
          estimatedItemSize={50}
          scrollEnabled={false}
          renderItem={renderItems}
          numColumns={3}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
    </ScrollView>
  );
};

const screenPaddingSize = 17 * 2;
const cardWidth = Math.floor((screenWidth - screenPaddingSize - 18) / 3);

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 17,
    gap: 32,
    minHeight: "100%",
    minWidth: "100%",
    paddingBottom: 40,
    backgroundColor: colors.dark,
  },
  cardTitle: {
    gap: 2,
  },
  member: {
    marginTop: 11,
    marginBottom: 13,
  },
  singer: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
    color: colors.white,
    marginBottom: 24,
  },
  text: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    color: colors.gray,
  },
  info: {
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: 91,
    height: 100,
    borderRadius: 10,
  },
});
