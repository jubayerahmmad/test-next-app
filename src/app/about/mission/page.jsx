import Image from "next/image";
import img from "../../../../public/Pau-Cubarsi.jpg";

const Mission = () => {
  return (
    <main>
      <h2 className="text-4xl mt-10">Mission Page</h2>

      <Image
        src={img}
        alt="image"
        placeholder="blur"
        height={350}
        width={450}
      />
    </main>
  );
};

export default Mission;
