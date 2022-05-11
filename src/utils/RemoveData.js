import AsyncStorage from "@react-native-async-storage/async-storage";
export async function RemoveData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
}
