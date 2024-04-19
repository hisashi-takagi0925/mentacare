import { useUserEntity } from "@/user/_entities/useUserEntity";

export const useEditFirstName = () => {
  const { methods } = useUserEntity();
  const firstNameRegister = { ...methods.register("firstName") };

  return { firstNameRegister };
};
