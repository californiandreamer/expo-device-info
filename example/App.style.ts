import { StyleSheet } from "react-native";

const colors = {
  white: "#fff",
  lightGray: "#eee",
  gray: "#333",
  black: "#333",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  header: {
    backgroundColor: colors.black,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  headerButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.lightGray,
  },
  headerBatteryText: {
    paddingTop: 16,
    fontSize: 16,
    fontWeight: "300",
    color: colors.lightGray,
  },
  webViewContainer: {
    flex: 1,
    padding: 3,
    borderColor: colors.gray,
    borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    backgroundColor: colors.white,
  },
  webView: {
    flex: 1,
  },
});
