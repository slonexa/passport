/* eslint-disable react-hooks/exhaustive-deps, @next/next/no-img-element */
// --- React Methods
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// --- Shared data context
import { UserContext } from "../context/userContext";

export default function Home() {
  const { handleConnection, address, walletLabel, wallet } = useContext(UserContext);

  const navigate = useNavigate();

  // Route user to dashboard when wallet is connected
  useEffect(() => {
    if (wallet) {
      navigate("/dashboard");
    }
  }, [wallet]);

  return (
    <div className="mx-auto flex flex-wrap">
      <div className="mb-6 w-1/2 w-full py-6">
        <img src="/assets/dpoppLogo.svg" className="invert" alt="logo" />
        <div className="font-miriam-libre text-gray-050 mt-10 font-normal font-bold leading-relaxed">
          <p className="text-6xl">
            Gitcoin
            <br />
            ID Passport
          </p>
        </div>
        <div className="font-libre-franklin mt-10 text-xl md:w-1/3">
          Gitcoin ID Passport is an identity aggregator of the top identity providers in the web3 space into one
          transportable identity that proves your personhood.
        </div>
        <div className="mb-10 mt-10 md:w-1/4">
          <button
            data-testid="connectWalletButton"
            className="min-w-full rounded-lg bg-gray-100 py-4 px-20 text-violet-500"
            onClick={handleConnection}
          >
            <p className="text-base">{address ? `Disconnect from ${walletLabel || ""}` : "Get Started"}</p>
          </button>
          {address ? <div className="pt-3">Connected to: {JSON.stringify(address, null, 2)}</div> : null}
        </div>
        <a className="underline">Why use your wallet as your identity?</a>
      </div>
    </div>
  );
}