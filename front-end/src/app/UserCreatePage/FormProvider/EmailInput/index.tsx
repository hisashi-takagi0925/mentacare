import { useUserEntity } from "@/user/_entities/useUserEntity";

export const EmailInput = () => {
  const { emailRegister } = useUserEntity();

  return <input type="email" {...emailRegister} placeholder="Email" />;
};
