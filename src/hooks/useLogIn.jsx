import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../services/constants";
import { toastError } from "../services/toastNotifications";
import { login } from "../services/api";

export function useLogIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUpMutation, isPending } = useMutation({
    mutationFn: (user) => login(user),
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate("/toDos");
    },
    onError: (error) => {
      toastError(error);
    },
  });

  return {signUpMutation, isPending};
}
