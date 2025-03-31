import { BackToStaffPage } from "../../components/backToStaffPage/BackToStaffPage";

interface StaffLayoutProps {
  children: React.ReactNode;
}

export default function StaffLayout({ children }: StaffLayoutProps) {
  return (
    <>
      <BackToStaffPage />
      {children}
    </>
  )
}