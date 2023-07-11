"use client"
// import MaualHeader from "@/components/MaualHeader"
import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"
import Image from "next/image"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

export default function Home() {
    return (
        <dev>
            <MoralisProvider initializeOnMount={false}>
                <NotificationProvider>
                    <Header />
                    <LotteryEntrance />
                </NotificationProvider>
            </MoralisProvider>
        </dev>
    )
}
