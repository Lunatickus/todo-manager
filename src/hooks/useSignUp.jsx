import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../services/constants";
import { toastError } from "../services/toastNotifications";
import { register } from "../services/api";

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUpMutation, isPending } = useMutation({
    mutationFn: (user) => register(user),
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate("/toDos");
    },
    onError: (error) => {
      toastError(error);
    },
  });

  return { signUpMutation, isPending };
}
