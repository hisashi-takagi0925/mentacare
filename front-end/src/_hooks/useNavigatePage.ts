import { useRouter } from "next/router";

export const useNavigatePage = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return {
    navigate,
  };
};
