import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import * as userLocalStorage from "./user.localstore";
import { refresh } from "../services/api";
import { QUERY_KEY } from "../services/constants";

export function useUser() {
  const { data: user } = useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: async () => refresh(user),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: userLocalStorage.getUser,
    onError: () => {
      userLocalStorage.removeUser();
    },
  });

  useEffect(() => {
    if (!user) {
      userLocalStorage.removeUser();
    } else {
      userLocalStorage.saveUser(user);
      refresh(user)
    }
  }, [user]);

  return {
    user: user ?? null,
  };
}
