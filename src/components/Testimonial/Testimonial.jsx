import Statistik from "./Stastistik";
import TestimonialList from "./TestimonialList";

export default function Testimonial() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between lg:items-start items-center gap-10 my-20 lg:my-30 lg:px-14">
        <div className="lg:w-fit w-full text-center lg:text-start lg:block md:flex md:justify-between">
          <h2 className="text-3xl font-semibold md:mb-10 mb-10 tracking-wide">Testimonial</h2>
          <Statistik />
        </div>

        <TestimonialList />
      </div>
    </>
  );
}
