import {
  Accessibility,
  Amentities,
  Attractions,
  Checkout1,
  Dates2,
  Dates3,
  Dates4,
  Dinningfeaturelist,
  Dinnings,
  Dinnings2,
  Fitness,
  Forgotpassword,
  Forgotpassword1,
  HomeScreen,
  HomeTab,
  InRoomService,
  InRoomService2,
  InRoomService3,
  LockDoor,
  LockDoor2,
  LockDoor3,
  MakeReservation,
  NavigateToMyRoom,
  NavigateToMyRoom2,
  Onboarding,
  Onboarding2,
  ParkingTransit,
  Paymentmethod,
  Paymenttermcondition,
  Paymenttermcondition2,
  Profile,
  ProfileFavorite,
  ProfileMemberSupport,
  ProfileProgramBenefits,
  ProfileRoomPreference,
  ProfileRoomPreferencebedtype,
  ProfileRoomPreferenceroomlocaton,
  ProfileRoomPreferenceroomtype,
  ProfileSettingPaymentInformation,
  Profilesettings,
  Profilesettingschangepassword,
  ProfilesettingsPaymentInformation2,
  ProfilesettingsPersonalInformation,
  Recommendation,
  SelectHotel,
  SelectRoom,
  SelectRoomFilterYourResults,
  SelectRoomReviewReservation,
  SelectRoomroomdetails,
  SignUpDone,
  Signupstep1,
  Signupstep1Verify,
  Signupstep2,
  Signupstep3,
  Spa,
  Termcondition,
  Termconditionn2,
  UnlockDoor,
  UnlockDoor2,
  UnlockDoor3,
  UnlockDoor4,
  UpcommingReservation,
  UpcommingReservationcheckin,
  UpcommingReservationcheckin2,
  Dates,
  UpcommingReservationmanagereservations,
  UserSignin,
  DatesCalendar,
  CurrentHotel,
  ChatPage,
  HotelPhotoGallery,
  Dinnings3,
  UpcomingReservationHotel,
  Splash,
  ChatBotPage,
} from "screens";
import LoadingPage from "screens/chatBotPage/ChatBotPage/LoadingPage";
import { COLORS, METRIC_SIZES } from "./common";
export const APP_SCREENS = [
  {
    name: "Home",
    title: "Home",
    iconName: "home-variant",
    focusIconName: "home-variant",
    screens: [
      {
        name: "Home",
        Component: HomeTab,
        options: {
          headerShown: false,
        },
      },
    ],

    iconOptions: {
      color: COLORS.Color707,
      size: 24,
    },
    focusIconOptions: {
      color: "#121212",
      size: 24,
    },
    tabBarLabelStyle: { backgroundColor: "red" },
  },

  {
    name: "Book",
    title: "Book",
    iconName: "calendar-blank",
    focusIconName: "calendar-blank",
    screens: [
      {
        name: "Book",
        Component: MakeReservation,
        options: {
          headerShown: false,
        },
      },
    ],

    iconOptions: {
      color: COLORS.Color707,
      size: 24,
    },
    focusIconOptions: {
      color: "#121212",
      size: 24,
    },
  },

  {
    name: "Upcoming",
    title: "Upcoming",
    iconName: "bag-carry-on", //bag-suitcase
    focusIconName: "bag-carry-on",
    screens: [
      {
        name: "Upcomming Reservation",
        Component: UpcommingReservation,
      },
    ],

    iconOptions: {
      color: COLORS.Color707,
      size: 24,
    },
    focusIconOptions: {
      color: "#121212",
      size: 24,
    },
  },

  {
    name: "Recommend",
    title: "Recommend",
    iconName: "office-building",
    focusIconName: "office-building",
    screens: [
      {
        name: "Recommendation",
        Component: Recommendation,
        title: "Recommendation",
      },
    ],

    iconOptions: {
      color: COLORS.Color707,
      size: 24,
    },
    focusIconOptions: {
      color: "#121212",
      size: 24,
    },
  },

  {
    name: "selected",
    title: "Account",
    iconName: "account-outline",
    focusIconName: "account-outline",
    screens: [
      {
        name: "Profile",
        Component: Profile,
        options: {
          headerShown: false,
        },
      },
    ],

    iconOptions: {
      color: COLORS.Color707,
      size: 24,
    },
    focusIconOptions: {
      color: "#121212",
      size: 24,
    },
  },
];

export const DEFAULT_TABBAR_OPTIONS = {
  keyboardHidesTabBar: true,
};
export const ROOT_SCREENS = [
  {
    name: "ProfilesettingsPaymentInformation2",
    Component: ProfilesettingsPaymentInformation2,
    title: "Payment Information",
  },
  {
    name: "Splash",
    Component: Splash,
    options: {
      headerShown: false,
    },
  },
  {
    name: "LockDoor3",
    Component: LockDoor3,
    options: {
      headerShown: false,
    },
  },
  {
    name: "SelectHotel",
    Component: SelectHotel,
    title: "",
    hasLike: true,
    options: {
      headerShown: false,
    },
  },
  {
    name: "DatesCalendar",
    title: "Dates",
    Component: DatesCalendar,
    isDarkMode: true,
  },
  {
    name: "CurrentHotel",
    title: "",
    Component: CurrentHotel,
  },
  {
    name: "HomeTab",
    Component: HomeTab,
    options: {
      headerShown: false,
    },
  },
  {
    name: "SignupDone",
    Component: SignUpDone,
    options: {
      headerShown: false,
    },
  },
  {
    name: "UpcomingReservationHotel",
    Component: UpcomingReservationHotel,
  },
  // {
  //     name: 'Dates',
  //     Component: Dates,
  //     options: {
  //         headerShown: false,
  //     },
  // },

  {
    name: "Dinningfeaturelist",
    Component: Dinningfeaturelist,
    title: "Dinning",
  },

  {
    name: "Signupstep2",
    Component: Signupstep2,
    title: "Step one",
  },

  {
    name: "Paymenttermcondition2",
    Component: Paymenttermcondition2,
    title: "Terms & Conditions",
  },
  {
    name: "Dates",
    Component: DatesCalendar,
    title: "Dates",
  },

  {
    name: "Paymenttermcondition",
    Component: Paymenttermcondition,
    title: "Terms & Conditions",
  },

  {
    name: "Dates3",
    Component: Dates3,
    isDarkMode: true,
    title: "Room & Guests",
  },

  {
    name: "InRoomService",
    Component: InRoomService,
    title: "Requests",
  },

  {
    name: "UpcommingReservationcheckin",
    Component: UpcommingReservationcheckin,
    title: "Check In",
  },

  {
    name: "LockDoor2",
    Component: LockDoor2,
    options: {
      headerShown: false,
    },
  },

  {
    name: "ProfilesettingsPersonalInformation",
    Component: ProfilesettingsPersonalInformation,
    title: "Personal Information",
  },

  {
    name: "ProfileRoomPreferenceroomtype",
    Component: ProfileRoomPreferenceroomtype,
    title: "Room Type",
  },

  {
    name: "UnlockDoor",
    Component: UnlockDoor,
    title: "Unlock Door",
  },

  {
    name: "UpcommingReservationmanagereservations",
    Component: UpcommingReservationmanagereservations,
    title: "Manage Reservation",
    isDarkMode: true,
  },

  {
    name: "ProfileRoomPreference",
    Component: ProfileRoomPreference,
    title: "Room Preference",
  },

  {
    name: "Forgotpassword",
    title: "Forgot password",
    Component: Forgotpassword,
  },

  {
    name: "Onboarding2",
    Component: Onboarding2,
    options: {
      headerShown: false,
    },
  },

  {
    name: "ParkingTransit",
    Component: ParkingTransit,
    title: "Parking& Transit",
  },

  {
    name: "Termconditionn2",
    Component: Termconditionn2,
    title: "Terms& Conditions",
  },

  {
    name: "SelectRoomroomdetails",
    Component: SelectRoomroomdetails,
    title: "Room Details",
  },

  {
    name: "LockDoor",
    Component: LockDoor,
    title: "Lock Door",
  },

  {
    name: "Profile",
    Component: Profile,
    options: {
      headerShown: false,
    },
  },

  {
    name: "InRoomService3",
    Component: InRoomService3,
    title: "My Request",
  },

  {
    name: "Dates4",
    Component: Dates4,
    title: "Special Rates & Points",
    isDarkMode: true,
  },

  {
    name: "Attractions",
    Component: Attractions,
  },

  {
    name: "Fitness",
    Component: Fitness,
  },

  {
    name: "Profilesettings",
    Component: Profilesettings,
    title: "Settings",
  },

  {
    name: "Dinnings2",
    Component: Dinnings2,
    title: "Make A Reservation",
  },
  {
    name: "Dinnings3",
    Component: Dinnings3,
    title: "Make A Reservation",
  },

  {
    name: "Spa",
    Component: Spa,
    title: "Spa",
  },

  {
    name: "Paymentmethod",
    Component: Paymentmethod,
    title: "Payment Method",
  },

  {
    name: "SelectRoomReviewReservation",
    Component: SelectRoomReviewReservation,
    title: "Review Reservation",
  },

  {
    name: "UnlockDoor4",
    Component: UnlockDoor4,
    options: {
      headerShown: false,
    },
  },

  {
    name: "UnlockDoor2",
    Component: UnlockDoor2,
    title: "How It Work",
  },

  {
    name: "UnlockDoor3",
    Component: UnlockDoor3,
    options: {
      headerShown: false,
    },
  },

  {
    name: "ProfileMemberSupport",
    Component: ProfileMemberSupport,
    title: "Member Support",
  },

  {
    name: "ProfileRoomPreferenceroomlocaton",
    Component: ProfileRoomPreferenceroomlocaton,
    title: "Room Location",
  },

  {
    name: "NavigateToMyRoom",
    Component: NavigateToMyRoom,
    options: {
      headerShown: false,
    },
  },

  {
    name: "Profilesettingschangepassword",
    Component: Profilesettingschangepassword,
    title: "Change Password",
  },
  {
    name: "ProfileSettingPaymentInformation",
    Component: ProfileSettingPaymentInformation,
    title: "Payment Information",
  },
  {
    name: "Checkout1",
    Component: Checkout1,
    title: "Check Out",
  },

  {
    name: "SelectRoomFilterYourResults",
    Component: SelectRoomFilterYourResults,
    title: "Preference",
  },

  {
    name: "UserSignin",
    Component: UserSignin,
    options: {
      headerShown: false,
    },
  },

  {
    name: "Accessibility",
    Component: Accessibility,
    title: "Accessibility",
  },

  {
    name: "SelectRoom",
    Component: SelectRoom,
    title: " ",
  },

  {
    name: "ProfileProgramBenefits",
    Component: ProfileProgramBenefits,
    title: "Program Benefits",
  },

  {
    name: "InRoomService2",
    Component: InRoomService2,
    title: "Bath Amenties",
  },

  {
    name: "Dates2",
    Component: Dates2,
    isDarkMode: true,
    title: "",
  },

  {
    name: "Onboarding",
    title: "",
    Component: Onboarding,
    options: {
      headerShown: false,
    },
  },

  {
    name: "Dinnings",
    title: "dinning",
    Component: Dinnings,
  },

  {
    name: "NavigateToMyRoom2",
    title: "Navigate To My Room",
    Component: NavigateToMyRoom2,
  },

  {
    name: "Signupstep1",
    title: "",
    Component: Signupstep1,
  },

  {
    name: "Signupstep1Verify",
    title: "Verification",
    Component: Signupstep1Verify,
  },
  {
    name: "Signupstep3",
    title: "Step two",
    Component: Signupstep3,
  },

  {
    name: "Termcondition",
    title: "terms & conditions",
    Component: Termcondition,
  },

  {
    name: "ProfileRoomPreferencebedtype",
    Component: ProfileRoomPreferencebedtype,
    title: "Bed Type",
  },
  {
    name: "ProfileFavorite",
    Component: ProfileFavorite,
    title: "Favorite",
  },
  ,
  {
    name: "UpcommingReservationcheckin2",
    title: "Check in",
    Component: UpcommingReservationcheckin2,
  },

  {
    name: "Forgotpassword1",
    title: "Forgot password",
    Component: Forgotpassword1,
  },

  {
    name: "HotelPhotoGallery",
    title: "Gallery",
    Component: HotelPhotoGallery,
  },

  {
    name: "Amentities",
    Component: Amentities,
  },
  {
    name: "ChatPage",
    Component: ChatPage,
    title: "Chat",
  },
  {
    name: "ChatBotPage",
    Component: ChatBotPage,
    title: "Make A Reservation",
  },
  {
    name: "LoadingPage",
    Component: LoadingPage,
    title: "",
  },
];

const LONG_NBAR_HEIGHT = 80;
const MEDIUN_NBAR_HEIGHT = 60;

const pro = {
  style: {
    backgroundColor: COLORS.Color304,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    height: LONG_NBAR_HEIGHT,
    borderTopWidth: 1,
    borderTopColor: COLORS.Color707,
  },
  customTabBarOptions: {
    activeTintColor: "#121212",
    inactiveTintColor: COLORS.Color707,
    tabStyle: {
      // marginVertical: 20,
      marginBottom: METRIC_SIZES.small,
    },
    tabBarLabelStyle: { backgroundColor: "red" },
  },
};

export const screens = [{ screens: APP_SCREENS, settings: pro }];
export const getBottomNavbar = (props) => {
  return screens[props.navbarIndex - 1];
};
export const CustomBottomTab = undefined;
