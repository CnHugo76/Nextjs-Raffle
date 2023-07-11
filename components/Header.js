import { ConnectButton } from "web3uikit"
export default function Header() {
    return (
        <dev>
            <h1 className="py-4 px-4 font-bold text-3xl"> Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </dev>
    )
}
