import HeadCase3 from "./reusable/HeadDesc3";
import nadia from "../assets/nadia.png";
import CardTesti from "./reusable/CardTesti";
import putri from "../assets/putri.png"

export default function Testimonial() {
  return (
    <>
      <div className="flex justify-between items-start my-30 px-14">
        <div>
          <h2 className="text-4xl font-semibold mb-10">Testimonial</h2>

          <div className="flex flex-col gap-10">
            <HeadCase3 title="95%" description="Clients Reports" />
            <HeadCase3 title="9/10" description="Clients recomended" />
          </div>
        </div>

        <div className="w-3/4 flex gap-10 justify-between">
          <CardTesti
            image={nadia}
            title="Nadia, 25 tahun"
            description="Beneran bikin kulit lebih sehat dan terawat. Rasanya lebih kenyal, halus, dan nggak gampang kering lagi. Highly recommended!"
          />

          <CardTesti
            image={putri}
            title="Putri, 29 tahun"
            description="Setelah rutin pakai, kulitku jadi lebih lembap dan glowing. Nggak kusam lagi, dan rasanya lebih sehat dari sebelumnya. Suka banget!"/>
        </div>
      </div>
    </>
  );
}
