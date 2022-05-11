import AsyncStorage from "@react-native-async-storage/async-storage";
export async function GetData(key) {
  try {
    const value = await AsyncStorage.getItem(key).then((data) =>
      data ? JSON.parse(data) : null
    );
    return value;
  } catch (e) {
  }
}
