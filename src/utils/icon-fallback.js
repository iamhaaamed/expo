import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const IconFallback = (_Name, _Component) => {
  if (_Component) {
    return {
      Icon_Name: _Name,
      Icon_Component: _Component,
    };
  } else if (MaterialCommunityIcons.hasIcon(_Name)) {
    return {
      Icon_Name: _Name,
      Icon_Component: MaterialCommunityIcons,
    };
  } else if (MaterialIcons.hasIcon(_Name)) {
    return {
      Icon_Name: _Name,
      Icon_Component: MaterialIcons,
    };
  } else if (Ionicons.hasIcon(_Name)) {
    return {
      Icon_Name: _Name,
      Icon_Component: Ionicons,
    };
  } else {
    return {
      Icon_Name: "help-outline",
      Icon_Component: Ionicons,
    };
  }
};
