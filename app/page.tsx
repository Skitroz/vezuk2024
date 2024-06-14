import { Header } from "@/components/header/header";
import Logo from "../public/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-10">
        <h1 className="text-3xl text-center font-medium mb-4">Nouveautés</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10">
          <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <a
                href="/blogs/news/we-built-a-valorant-super-team"
                className="block"
                aria-label="We Built a VALORANT Super Team"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
                <div className="image-wrap">
                  <div className="grid__image-ratio grid__image-ratio--wide">
                    <Image src={Logo} alt="Logo" className="w-full h-auto" />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4 bg-white">
              <div className="article__grid-meta">
                <a
                  href="/blogs/news/we-built-a-valorant-super-team"
                  className="text-xl font-semibold text-gray-800 hover:text-red-600"
                >
                  Lorem Ipsum
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Publié le 10 juin 2024
                </p>
                <p className="text-gray-700 mt-4">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <a
                href="/blogs/news/another-article"
                className="block"
                aria-label="Another Article"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
                <div className="image-wrap">
                  <div className="grid__image-ratio grid__image-ratio--wide">
                    <Image src={Logo} alt="Logo" className="w-full h-auto" />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4 bg-white">
              <div className="article__grid-meta">
                <a
                  href="/blogs/news/another-article"
                  className="text-xl font-semibold text-gray-800 hover:text-red-600"
                >
                  Lorem Ipsum
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Publié le 15 juin 2024
                </p>
                <p className="text-gray-700 mt-4">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <a
                href="/blogs/news/yet-another-article"
                className="block"
                aria-label="Yet Another Article"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
                <div className="image-wrap">
                  <div className="grid__image-ratio grid__image-ratio--wide">
                    <Image src={Logo} alt="Logo" className="w-full h-auto" />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-4 bg-white">
              <div className="article__grid-meta">
                <a
                  href="/blogs/news/yet-another-article"
                  className="text-xl font-semibold text-gray-800 hover:text-red-600"
                >
                  Lorem Ipsum
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Publié le 20 juin 2024
                </p>
                <p className="text-gray-700 mt-4">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section
          className="py-12 bg-gray-100 my-12"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-[200px]">
              <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
                <h3 className="text-red-600 text-2xl font-bold mb-4">
                  Suivez-nous
                </h3>
                <p className="mb-4">
                  Soyez les premiers à connaître les nouveautés, les matchs
                  de la VeZuK.
                </p>
                <form
                  className="flex flex-col"
                >
                  <input name="g" type="hidden" value="UskBLC" />
                  <input name="$fields" type="hidden" value="$consent" />
                  <input name="$list_fields" type="hidden" value="$consent" />
                  <div className="flex mb-4">
                    <input
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                      autoComplete="off"
                      autoCapitalize="off"
                      required
                      name="email"
                      placeholder="Entrez votre email"
                      type="email"
                    />
                    <button
                      className="bg-red-600 text-white px-6 py-2 rounded-r-md hover:bg-red-700"
                      type="submit"
                    >
                      S'abonner
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-full lg:w-3/5">
                  <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
                    <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                    </div>
                    <p className="text-red-600 text-lg font-bold mb-2">
                      Soyez le premier
                    </p>
                    <p>à connaître les nouveautés</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
