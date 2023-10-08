import Image from "next/image";

export default function Home() {
  return (
    <div className="px-2 text-white">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center py-2">
        <h1 className="m-0 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-center text-8xl font-extrabold text-transparent hover:cursor-pointer">
          Welcome to <a href="https://luvnft.com">LUV NFT</a>
        </h1>
        <p className="my-16 text-center text-2xl">
           Welcome to the Purpose Economy Blueprint. Service to others is the rent you pay for your room here.{" "}
          <code className="rounded-2xl bg-gray-100 p-3 text-base text-black">
            "IN LUV WE TRUST"
          </code>
        </p>
        <div className="md:flex-unset flex max-w-3xl flex-wrap items-center justify-center">
          <a
            href="https://blkluv.org"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">LUV Games &rarr;</h2>
            <p className="m-0 text-xl">
               A tokenopoly game played on top of social meida, Complete a job-request to earn free $LUV.
            </p>
          </a>

          <a
            href="https://arvrtise.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">Arvrtise &rarr;</h2>
            <p className="m-0 text-xl">
              A tokenize arvrtising agency that accepts $LUV as a form of payment. Use our zero fee merchant POS.
            </p>
          </a>

          <a
            href="https://tip.luvnft.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">$TIP Drill &rarr;</h2>
            <p className="m-0 text-xl">
              No Mo Cap! Tip anyone in the world with a link attached to a bag of money. Pay zero fees!
            </p>
          </a>

          <a
            href="https://travel.luvnft.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">Travel (Soon) &rarr;</h2>
            <p className="m-0 text-xl">
              Pay rent, rent a car or take a vacation with your $LUV money.
            </p>
          </a>
        </div>
      </main>
      <footer className="flex h-[100px] w-full items-center justify-center border">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
