export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="p-8">
            {children}
        </div>
    )
}