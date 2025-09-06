const RateCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-[var(--color-green-dark)] 
        flex-1 text-center text-white py-4 px-12 rounded-lg"
    >
      {children}
    </div>
  );
};

export default RateCard;
