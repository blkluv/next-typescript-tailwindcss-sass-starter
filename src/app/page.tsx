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
        Paid Ads
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
            <a href="https://healxyz.com" target="_blank">⚸ HealXYZ </a> Social media spirtual healing game.
            <a href="https://luvgames.luvnft.com" target="_blank">💸 LUV Games </a> Get paid to play grown games.
            <a href="https://cre.arvrtise.com/" target="_blank">🏢 CRE Club </a> CRE brokers, investors & services club.
            <a href="https://ateam.arvrtise.com/" target="_blank">🛒 A-Team </a> Learn how to Arvrtise, Crypto, AI & blockchain. 
            </p>
          </a>

          <a
            href="https://discord.com/channels/1164180431181201438/shop"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">PAY &rarr;</h2>
            <p className="m-0 text-xl">
            <a href="https://pay.luvnft.com" target="_blank">✨ PAY </a> $MATIC (Testnet)
            <a href="https://tip.luvnft.com" target="_blank">💲 TIP </a> $SOL
            <a href="https://xrpay.arvrtise.com/" target="_blank">🛒 XRpay </a> $XRP
            </p>
          </a>

          <a
            href="https://creclub.arvrtise.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">TOOLS &rarr;</h2>
            <p className="m-0 text-xl">
            <a href="https://arvrtise.com" target="_blank">📺 TV </a> YouTube on blockchain.
            <a href="https://live.luvnft.com" target="_blank">🔊 AUDIO </a> Free audio streaming.
            <a href="https://xrpay.arvrtise.com/" target="_blank">🏃🏽 RUN </a> Endless runner game played live for $LUV.
            <a href="https://lnelord.luvnft.com/" target="_blank">🫅🏽 LNElord </a> Real estate investing game played live for $LUV.
            </p>
          </a>
          <a
            href="https://arvrtise.com"
            className="m-4 min-h-[200px] max-w-xs rounded-md border p-6 text-left no-underline transition-colors duration-700 ease-in-out hover:border-indigo-500 hover:text-indigo-300"
          >
            <h2 className="mb-8 text-2xl">MARKETING &rarr;</h2>
            <p className="m-0 text-xl">
            <a href="https://arvrtise.com" target="_blank">🅰️ Arvrtise </a> Web2-Web5 marketing campaigns.
            <a href="https://live.luvnft.com" target="_blank">🔴 LIVE </a> Convert your live stream to a LUV NFT.
            <a href="https://xrpay.arvrtise.com/" target="_blank">💌 Note </a> Decentralized LUV notes to yourself.
            <a href="https://xrpay.arvrtise.com/" target="_blank">📓 Addy </a> Decentralized CRM of biz contacts.
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
