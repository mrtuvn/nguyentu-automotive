import { LayoutProps } from "@/constrants/layout";

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>sidebar</div>
      <div>{children}</div>
    </div>
  );
}
