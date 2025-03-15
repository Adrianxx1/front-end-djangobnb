interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[100px] text-center py-4 bg-airbnb hover:bg-airbnbDark text-white rounded-xl transition cursor-pointer"
    >
      {label}
    </div>
  );
};

export default CustomButton;
