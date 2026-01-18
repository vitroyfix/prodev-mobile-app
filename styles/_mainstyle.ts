import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImageContainer: { flex: 1, height: height },
  logoContainer: { padding: 40, alignItems: "center", marginTop: 74 },
  titleContainer: { marginTop: 40 },
  titleText: { fontSize: 40, textAlign: "center", fontWeight: "800", color: "#fff" },
  titleSubTextContainer: { marginTop: 20 },
  titleSubText: { fontWeight: "300", fontSize: 18, textAlign: "center", color: "#fff" },
  buttonPrimary: { backgroundColor: "#fff", alignItems: "center", padding: 20, borderRadius: 36, flex: 1 },
  buttonPrimaryText: { fontSize: 18, fontWeight: "300", textAlign: "center" },
  buttonSecondary: { alignItems: "center", padding: 20, borderRadius: 36, borderWidth: 1, borderColor: "#fff", flex: 1 },
  buttonSecondaryText: { fontSize: 18, fontWeight: "300", textAlign: "center", color: "#fff" },
  buttonGroup: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, paddingHorizontal: 20 },
});