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
        <button className="bg-transparent border-white border-2 rounded-full text-white h-10 w-32 hover:bg-red-500">
          Pošaljite uput
          </button>
        <div className="flex flex-col lg:flex-row gap-10 pt-20">
          <div className="bg-white w-10 h-10">

          </div>
          <div className="bg-white w-10 h-10">

          </div>
          <div className="bg-white w-10 h-10">

          </div>
        </div>
      
        </BackgroundImageNaslovna>
      </Container>
    </div>
  );
}
