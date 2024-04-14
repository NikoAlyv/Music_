import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useSyncExternalStore } from "react";
import { Avatar } from "../components/Avatar";
import { Header } from "../components/Header";
import RingVector from "../../assets/vectors/ring.svg";
import SearchVector from "../../assets/vectors/search.svg";
import { activeIndex, standardHitSlop } from "../theme/standard";
import { colors } from "../theme/colors";
import { Input } from "../components/Input";
import { Card, ICard } from "../components/Card";
import { songs } from "../mocks/songs.mock";
import { FlashList } from "@shopify/flash-list";
import { CommonStyles } from "../theme/common";
import { useNavigation } from "@react-navigation/native";
export const HomeScreen = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { navigate } = useNavigation();
  const renderCards = ({ item, index }: { item: any; index: number }) => {
    return (
      <Card
        key={index}
        title={item.artist.name}
        url={item.artist.picture_medium}
        onPress={() => navigate("Music")}
      />
    );
  };

  const renderVerticalCards = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    return (
      <Card
        size="s"
        key={index}
        horizontal
        singer={item.artist.name}
        title={item.album.title}
        description={item.type}
        url={item.artist.picture_big}
      />
    );
  };
  const fetchSongs = async () => {
    const response: Response = await fetch(
      "https://api.deezer.com/radio/37151/tracks"
    );
    const result = await response.json();

    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <ScrollView
      indicatorStyle="white"
      style={styles.scrollView}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.root}>
        <Header
          left={
            <Avatar
              title=""
              caption="Gold Member"
              url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
            />
          }
          right={
            <TouchableOpacity
              activeOpacity={activeIndex}
              hitSlop={standardHitSlop}
              onPress={() => console.log("--")}
            >
              <RingVector color={colors.gray} />
            </TouchableOpacity>
          }
        />

        <View style={styles.search}>
          <Text numberOfLines={2} style={styles.title}>
            Listen The Latest Music
          </Text>

          <Input
            placeholder="Search Music"
            placeholderTextColor={colors.gray}
            inputStyle={{ flexGrow: 0, width: 100 }}
            value={value}
            icon={<SearchVector color={colors.lightGray} />}
            setValue={setValue}
          />
        </View>
        <View
          style={[
            CommonStyles.flex,
            { gap: 16, width: "100%", height: "100%" },
          ]}
        >
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <Text numberOfLines={2} style={[styles.title, styles.cardHeader]}>
              Recently Played
            </Text>
          )}

          {data ? (
            <FlashList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              estimatedItemSize={50}
              ItemSeparatorComponent={() => <View style={{ width: 17 }} />}
              renderItem={renderCards}
            />
          ) : null}
        </View>

        <Text numberOfLines={2} style={[styles.title, styles.cardHeader]}>
          Recommend for you
        </Text>
        <FlashList
          data={data}
          removeClippedSubviews
          contentContainerStyle={styles.cards}
          scrollEnabled={false}
          estimatedItemSize={50}
          ItemSeparatorComponent={() => <View style={{ height: 17 }} />}
          renderItem={renderVerticalCards}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.dark,
    minHeight: "100%",
  },
  scrollView: {
    flex: 1,
  },
  search: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 26,
    width: "50%",
    color: colors.white,
  },
  cards: {
    paddingTop: 18,
    // gap: 17,
  },
  cardHeader: {
    width: undefined,
    fontSize: 22,
    marginTop: 44,
  },
});
