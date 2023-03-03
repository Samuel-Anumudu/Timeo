import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/colors";

const HistoryItem = ({ item }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  // const clearHistory = () => {
  //   onClear();
  // };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 0.5,
          // alignItems: "center",
        }}
      >
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>All our focused tasks</Text>
            <FlatList
              style={{ flex: 1, padding: 12, backgroundColor: "#E6E6FA" }}
              contentContainerStyle={{
                flex: 1,
                // alignItems: "center",
              }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "#FF6347" : "green",
    fontSize: fontSizes.md,
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    padding: 12,
    fontWeight: "bold",
  },
  clearContainer: {
    alignItems: "center",
    padding: spacing.md,
  },
});
