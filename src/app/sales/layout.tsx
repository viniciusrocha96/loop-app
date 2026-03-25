export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f0f0f0] font-sans">
      {children}
    </div>
  );
}
