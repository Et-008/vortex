import SideNav from '@/components/ui/side-nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row md:overflow-hidden">
      <div className="w-40">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
