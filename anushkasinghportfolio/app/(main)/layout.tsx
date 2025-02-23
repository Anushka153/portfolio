export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="p-0">
            {children}
        </div>
    )
}