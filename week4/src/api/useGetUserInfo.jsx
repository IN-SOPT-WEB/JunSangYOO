import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserAPI } from "./userAPI";

export default function useGetUserInfo() {
  const { isLoading, isError, data, error } = useQuery(["user"], getUserAPI, {
    refetchOnWindowFocus: false,
    retry: 0,
    refetchOnMount: false,
  });

  // 추후에 구현할 Loading, Error boundary 처리
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error Happended!</p>;
  }
  return data;
}
