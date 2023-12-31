import Header from "@/components/Header"
import AccountContent from "./components/AccountContent"

type pageProps = {}
export default function Account({}: pageProps) {
	return <div className="bg-neutral-900 rounded-lg h-full w-full oveflow-hidden overflow-y-auto " >
        <Header className="from-emerald-700" >
            <div className="mb-2 flex flex-col gap-y-6 ">
                <h1 className="text-white text-3xl font-semibold" >
                    Account Settings
                </h1>
            </div>
        </Header>
        <AccountContent />
        </div>
}
