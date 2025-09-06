export const InvestmentCardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section
      className="flex flex-col relative rounded-lg min-h-[39.5625rem] md:min-h-[39.3125rem] lg:min-h-100 p-4 md:p-8 lg:p-8 pb-8 md:pb-[5.9375rem] bg-gray-medium"
    >
      {children}
    </section>
  )
}

export default InvestmentCardLayout
