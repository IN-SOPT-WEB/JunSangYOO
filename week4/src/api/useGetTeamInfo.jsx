import { useQuery } from "@tanstack/react-query";
import { getMyTeamAPI } from "./userAPI";

export default function useGetTeamInfo() {
  const { isLoading, isError, data, refetch } = useQuery(
    ["teaminfo"],
    getMyTeamAPI,
    {
      refetchOnWindowFocus: false,
      retry: 0,
      enabled: false,
    }
  );
  return { data, refetch };
}
