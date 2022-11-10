import { useQuery } from "@tanstack/react-query";
import { getUserAPI } from "./userAPI";

export default function useGetUserInfo(userId) {
  const { isLoading, isError, data } = useQuery(
    ["userinfo", userId],
    () => getUserAPI(userId),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      suspense: true,
    }
  );
  return data;
}
