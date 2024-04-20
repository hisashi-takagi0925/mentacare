"use client";
import { FormProvider } from "./FormProvider";
import { EmailInput } from "./FormProvider/EmailInput";

const UserCreatePage = () => {
  return (
    <FormProvider>
      <EmailInput />
      <EmailInput />
    </FormProvider>
  );
};

export default UserCreatePage;
