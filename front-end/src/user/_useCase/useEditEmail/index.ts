import { useUserEntity } from "../../_entities/useUserEntity";

export const useEditEmail = () => {
  const { methods } = useUserEntity();
  const emailRegister = { ...methods.register("email") };

  return { emailRegister };
};
