import AsyncStorage from "@react-native-async-storage/async-storage";
export async function StoreData(key, value) {
  try {
    value = JSON.stringify(value);
    if (value) return await AsyncStorage.setItem(key, value);
  } catch (e) {
  }
}
