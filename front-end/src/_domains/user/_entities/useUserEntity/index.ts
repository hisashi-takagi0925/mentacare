import { useForm } from "react-hook-form";

type UserEntity = {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

export const useUserEntity = () => {
  const methods = useForm<UserEntity>({
    defaultValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    },
    mode: "onChange",
  });

  const emailRegister = { ...methods.register("email") };

  return {
    emailRegister,
    methods,
  };
};
