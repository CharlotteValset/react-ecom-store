import HeroImage from "../../assets/images/shopping.jpg";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-row mt-20 mx-auto bg-dark-gray max-w-7xl">
        <div className="flex flex-col justify-center items-center w-2/5 ">
          <p className=" text-background-white font-extralight sm:font-thin text-xl sm:text-5xl">Shop the</p>
          <p className="text-background-white font-extralight sm:font-thin text-xl sm:text-5xl">latest trends</p>
        </div>
        <img src={HeroImage} className="w-3/5" alt="Hero image" />
      </div>
    </>
  );
};
