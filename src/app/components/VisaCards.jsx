import Image from "next/image";

const VisaCards = ({ visa }) => {
  return (
    <div className="p-4 rounded-md">
      <Image
        referrerPolicy="no-referrer"
        src={visa?.countryImage}
        width="550"
        height="350"
        alt="country Image"
      />
    </div>
  );
};

export default VisaCards;
