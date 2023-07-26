import BackgroundImageNaslovna from "@/components/BackgroundImageNaslovna";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="pt-14 xl:pt-1">
      <Container>
        <BackgroundImageNaslovna>
          <div className="sm:mx-auto pt-20 xl:pt-56">
            <div className="text-neutral-50  text-4xl xl:text-6xl font-bold text-center">
              Doživotna hidroizolacija betona
            </div>
            <div className="text-neutral-50 text-xl xl:text-2xl text-center">
              <br />
              materijali za hidroizolaciju, impregnaciju i sanaciju betona.
            </div>
          </div>
          <div className="pt-10">
            <button className=" bg-transparent border-white border-2 rounded-full text-white text-xl lg:text-2xl w-36 lg:w-48 h-12 lg:h-16 font-bold focus:border-black hover:bg-red-500">
              Pošaljite uput
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 pt-20">
            <button className="bg-white w-80 h-80 rounded-lg text-center items-center">
              
            </button>
            <button className="bg-white w-80 h-80 rounded-lg"></button>
            <button className="bg-white w-80 h-80 rounded-lg"></button>
          </div>
        </BackgroundImageNaslovna>
      </Container>
    </div>
  );
}
