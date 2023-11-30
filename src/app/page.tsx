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
        <a href="https://linktr.ee/luvnft">
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
            <a href="https://arvrtise.com" target="_blank">📺 NFTV </a> Creators earn 10x more for PPV social media content.
            </p>
          </a>

          <a
            href="https://discord.com/channels/1164180431181201438/shop"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">PAY &rarr;</h2>
            <p className="m-0 text-xl">
            <a href="https://pay.luvnft.com" target="_blank">✨ PAY </a> Send $MATIC (Testnet) any where in the world with your email address.
            </p>
          </a>

          <a
            href="https://creclub.arvrtise.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">🏢 CRE CLUB &rarr;</h2>
            <p className="m-0 text-xl">
            Commercial real estate brokers, investor and service providers.
            </p>
          </a>
          <a
            href="https://arvrtise.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">MARKETING &rarr;</h2>
            <p className="m-0 text-xl">
             🅰️ Arvrtise nex-gen Web2-Web5 marketing campaigns.
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
