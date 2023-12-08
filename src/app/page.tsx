import Image from "next/image";

export default function Home() {
  return (
    <div className="px-2 text-white">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center py-2">
        <h1 className="m-0 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-center text-8xl font-extrabold text-transparent hover:cursor-pointer">
          LUV NFT <a href="https://luvnft.com"></a>
        </h1>
        <p className="my-16 text-center text-2xl">
        Web5 purpose economy powered by $LUV. IN LUV WE TRUST{" "}
        <a href="https://y.luvnft.com">
        <code className="rounded-2xl bg-gray-100 p-3 text-base text-black">
        MORE
        </code>
        </a>
        </p>
        <div className="md:flex-unset flex max-w-3xl flex-wrap items-center justify-center">
          <a
            href="https://nftv.luvnft.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">PPV &rarr;</h2>
            <p className="m-0 text-xl">
            📺 NFTV is the first social media PPV network that pays creators 10x more for their content compared to any other platform.
            </p>
          </a>

          <a
            href="https://pay.luvnft.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">PAY &rarr;</h2>
            <p className="m-0 text-xl">
            ✨ PAY anyone in $MATIC (Testnet) any where in the world in less than 4 seconds with a email address and zero fees.
            </p>
          </a>

          <a
            href="https://creclub.arvrtise.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">CRE CLUB &rarr;</h2>
            <p className="m-0 text-xl">
            🏢 CRE Club is a social media platgform of elite commercial real estate brokers, investor and service providers.
            </p>
          </a>
          <a
            href="https://arvrtise.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">MARKETING &rarr;</h2>
            <p className="m-0 text-xl">
             🅰️ Arvrtise is a next-gen Web2-to-Web5 marketing agency that assists brands and creators in mastering Web5 advertising
            </p>
          </a>
        </div>
      </main>
      <footer className="flex h-[100px] w-full items-center justify-center border">
        <a
          href="https://blkluv.org"
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-2 h-5">
            <Image
              className="ml-2"
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
