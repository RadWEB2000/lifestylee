// import { generateUri } from "@/func/index";
import Image from "next/image";

type tPostPage = {
  params: Promise<{
    category: string;
    subcategory: string;
    post: string;
    url: {
      pathname: string;
      search: string;
    };
  }>;
};

export default async function PostPage(props: tPostPage) {
  const params = (await props).params;
  console.log(params);
  // const { category, post, subcategory } = await props.params;
  // const pathname = generateUri(category, subcategory, post);

  return (
    <div>
      <ul>Start ➡️ Kategoria ➡️ Podkategoria ➡️ Wpis blogowy</ul>
      <div>
        <h1>
          Zbigniew Ziobro ma zostać doprowadzony przed komisję. Zabrał głos
        </h1>
        <strong>
          Mimo że jestem za granicą, to przybędę do Polski, bo ja się nie
          obawiam funkcjonariuszy. Nie będę stawiał też oporu, ale postawię
          sprawę jasno, pokazując wyrok Trybunału Konstytucyjnego – przekazał na
          antenie Polsat News Zbigniew Ziobro, dodając, że nie należy do osób,
          które mdleją. W ten sposób skomentował decyzję sądu o przymusowym
          doprowadzeniu go przed komisję śledczą.
        </strong>
        <br />
        <i>Data publikacji: 27 stycznia 2025</i>
        <br />
        <i>Czas potrzebny do przeczytania artykułu: 12min</i>
        <br />
        <br />
        <picture>
          <Image
            alt="asd"
            height={350}
            src="https://ocdn.eu/pulscms-transforms/1/4n-k9kpTURBXy9kMjUyYmEyZWIyM2ZlNDE4OGM4MDBlZmIwNTAyNjYxOC5qcGeSlQMAzITNENDNCXWVAs0DrADCw94AA6EwBaExAaEzww"
            title=""
            style={{
              display: "block",
              objectFit: "cover",
            }}
            width={850}
          />
        </picture>
      </div>
      <main>
        W poniedziałek Sąd Okręgowy w Warszawie zgodził się na zatrzymanie i
        przymusowe doprowadzenie byłego ministra sprawiedliwości, obecnie posła
        PiS na posiedzenie sejmowej komisji śledczej ds. Pegasusa. Posiedzenie
        komisji zaplanowano na piątek. — Nie należę do tych, którzy mdleją. Mimo
        że jestem za granicą, to przybędę do Polski, bo ja się nie obawiam
        funkcjonariuszy. Nie będę stawiał też oporu, ale postawię sprawę jasno,
        pokazując wyrok Trybunału Konstytucyjnego – powiedział polityk w
        rozmowie z Polsat News. Zbigniew Ziobro zaznaczył, iż uważa, że nie
        powinien stawiać się i nie stawi się dobrowolnie przed tzw. komisję ds.
        Pegasusa, która została zdelegalizowana. — 10 września zeszłego roku
        legalność działania komisji badał Trybunał Konstytucyjny, który jest
        organem, zgodnie z polską konstytucją, uprawnionym do badania wszystkich
        tego typu aktów prawnych. Jego wyrok, jak mówi konstytucja, jest
        ostateczny i niepodważalny. TK 10 września uznał, że uchwała o komisji
        śledczej ds. Pegasusa została przyjęta z naruszeniem zapisów polskiej
        konstytucji i de facto tę komisje zdelegalizował — przekazał polityk.
        Zbigniew Ziobro trafi przed komisję śledczą ds. Pegasusa? Jest decyzja
        sądu Ziobro podsumował, że nie może godzić się na jawne bezprawie, czyli
        podporządkowanie prawa interesom politycznym partii rządzącej Donalda
        Tuska. Zbigniew Ziobro nie stawiał się na przesłuchaniach Do tej pory
        Ziobro kilkukrotnie nie stawił się na posiedzenie komisji śledczej ds.
        Pegasusa. W związku z tym komisja wystąpiła z wnioskiem do sądu o zgodę
        na jego zatrzymanie i przymusowe doprowadzenie na przesłuchanie. Sejm
        uchylił mu w tym celu immunitet. Przed wydaniem postanowienia sądu
        Ziobro oświadczył w poniedziałek na platformie X, że nie będzie stawiał
        czynnego oporu, jeżeli sąd nakaże doprowadzenie go na — jak napisał —
        zdelegalizowaną komisję śledczą. Podkreślił, że policjantom, których
        zaleceniom się podporządkuje, nie grozi z jego strony żadne
        niebezpieczeństwo. Pokażę im wyroki Trybunału Konstytucyjnego wskazujące
        na przestępczy charakter orzeczenia sądu, gdyby takie zapadło — dodał.
      </main>
    </div>
  );
}
