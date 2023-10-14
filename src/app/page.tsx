import Image from "next/image";

export default function Home() {
  return (
    <div className="px-2 text-white">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center py-2">
        <h1 className="m-0 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-center text-8xl font-extrabold text-transparent hover:cursor-pointer">
          LUV NFT <a href="https://luvnft.com">IS WEB5</a>
        </h1>
        <p className="my-16 text-center text-2xl">
        Service to others is the rent you pay here.{" "}
        <a href="https://blkluv.org">
        <code className="rounded-2xl bg-gray-100 p-3 text-base text-black">
        BLK LUV org
        </code>
        </a>
        </p>
        <div className="md:flex-unset flex max-w-3xl flex-wrap items-center justify-center">
          <a
            href="https://blkluv.org"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">LUV Games &rarr;</h2>
            <p className="m-0 text-xl">
               A Web5 Social Media platform where $LUV is the new like, exchange $LUV for local services and products.
            </p>
          </a>

          <a
            href="https://arvrtise.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">Arvrtise &rarr;</h2>
            <p className="m-0 text-xl">
              A blockchain marketing agency that accepts $LUV as a form of payment. Use our zero fee merchant POS.
            </p>
          </a>

          <a
            href="https://tip.luvnft.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">$TIP Drill &rarr;</h2>
            <p className="m-0 text-xl">
              Tip anyone $SOL in the world with a link attached to a bag of money. Pay zero fees! No cap!
            </p>
          </a>

          <a
            href="https://luvnft.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">Travel (Soon) &rarr;</h2>
            <p className="m-0 text-xl">
               $LUV is the affordable housing, car rental and vacation solution for those with a heart.
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
