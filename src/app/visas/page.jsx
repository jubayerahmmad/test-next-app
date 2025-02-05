import VisaCards from "../components/VisaCards";
import getAllVisas from "../lib/getAllVisas";

const Visas = async () => {
  const visas = await getAllVisas();

  return (
    <div>
      <h1 className="text-2xl font-bold">All Visas</h1>
      <div className="grid grid-cols-3">
        {visas.map((visa) => (
          <VisaCards key={visa._id} visa={visa}></VisaCards>
        ))}
      </div>
    </div>
  );
};

export default Visas;
