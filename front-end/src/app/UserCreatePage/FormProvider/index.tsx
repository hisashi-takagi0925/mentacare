import { useUserEntity } from "@/_domains/user/_entities/useUserEntity";
import { ReactNode } from "react";
import { FormProvider as Form } from "react-hook-form";

type Props = {
  children: ReactNode;
};

export const FormProvider = ({ children }: Props) => {
  const { methods } = useUserEntity();

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>{children}</form>
    </Form>
  );
};
