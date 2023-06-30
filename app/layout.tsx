import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUseId from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
	title: 'My-Spot',
	description: 'listen to your favorite music',
}

export const revalidate = 0


export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	const userSongs = await getSongsByUseId()

	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider/>
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider/>
							<Sidebar songs={userSongs} >
								{children}
							</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	)
}
