const Card = ({
  children,
  heading,
  backgroundColor="bg-gray-300",
  textColor="text-blue-500",
  buttonInfo,
}) => {
  return (
    <div
      className={`${backgroundColor} p-4 rounded shadow-md`}
    >
      <h3 className={`text-2xl ${textColor} font-bold mb-4`}>{heading}</h3>
      {children}
     
    </div>
  );
};

export default Card;
