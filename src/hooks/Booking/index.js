import { useQuery, useMutation, useInfiniteQuery } from "react-query";
import GraphQlClient from "GraphQl/GraphQlClient";
import {
  GET_RECOMENDEDHOTELS,
  Hotel_GetHotels,
  FILTER_ROOM_AVALABLE,
  HOTEL_GET_ROOM,
} from "GraphQl/Booking/Queries";
import {
  HOTEL_ADD_TOFAVORITE,
  BOOKING_RESERVATIONROOM,
} from "GraphQl/Booking/Mutations";
const PAGE_SIZE = 10;
const useRecomendedHotels = ({ userId }) => {
  return useQuery(
    ["getRecomendedHotels", userId],
    async () => {
      return await GraphQlClient.request(GET_RECOMENDEDHOTELS, {
        userId,
      });
    },
    {
      enabled: !!userId,
    }
  );
};
const useSelectHotels = ({ hotelId }) => {
  return useQuery(
    ["getHotel", hotelId],
    async () => {
      return await GraphQlClient.request(Hotel_GetHotels, {
        hotelId,
      });
    },
    {
      enabled: !!hotelId,
    }
  );
};
const useGetRoom = ({ roomId }) => {
  return useQuery(
    ["getRoom", roomId],
    async () => {
      return await GraphQlClient.request(HOTEL_GET_ROOM, {
        roomId,
      });
    },
    {
      enabled: !!roomId,
    }
  );
};
const mutateAddToFavorite = () => {
  return useMutation(async ({ hotelId, userId }) => {
    return await GraphQlClient.request(HOTEL_ADD_TOFAVORITE, {
      hotelId,
      userId,
    });
  });
};
const mutateReservRoom = () => {
  return useMutation(async ({ reservationInputs }) => {
    console.log("++++++++  ", reservationInputs);
    return await GraphQlClient.request(BOOKING_RESERVATIONROOM, {
      reservationInputs: reservationInputs,
    });
  });
};
const useAvilabeRooms = ({ roomAvailabilityInput, hotelId, where }) => {
  return useInfiniteQuery(
    ["AvilabeRooms", roomAvailabilityInput, hotelId],
    async ({ pageParam = 0 }) => {
      return await GraphQlClient.request(FILTER_ROOM_AVALABLE, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where: where,
        roomAvailabilityInput,
        hotelId,
      });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (
          lastPage?.booking_filterRoomAvailability?.result?.pageInfo
            ?.hasNextPage
        ) {
          return allPages.length;
        }
        return undefined;
      },
      select: (data) => ({
        ...data,
        pages: data?.pages
          ?.map((a) => a.booking_filterRoomAvailability?.result?.items)
          .reduce((a, b) => a.concat(b), []),
      }),
      enabled: !!hotelId,
    }
  );
};
export {
  useRecomendedHotels,
  useSelectHotels,
  mutateAddToFavorite,
  useAvilabeRooms,
  useGetRoom,
  mutateReservRoom,
};
