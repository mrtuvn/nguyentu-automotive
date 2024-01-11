import { MainLayout } from "@/layout";
import dynamic from "next/dynamic";

export interface AboutPageProps {}

//const Dummy = dynamic(() => import("@/components/common/Dummy"), { ssr: true });

export default function Page() {
  return (
    <MainLayout>
      <h1>Login page</h1>
    </MainLayout>
  );
}
