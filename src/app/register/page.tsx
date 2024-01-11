import { MainLayout } from "@/layout";
import dynamic from "next/dynamic";

export interface AboutPageProps {}

//const Dummy = dynamic(() => import("@/components/common/Dummy"), { ssr: true });

export default function Register() {
  return (
    <MainLayout>
      <h1>Register Page</h1>
    </MainLayout>
  );
}
