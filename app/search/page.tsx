import getSongsByTitle from '@/actions/getSongsByTitle'
import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'

type SearchProps = {
	searchParams: {
		title: string
	}
}
export default async function Search({ searchParams }: SearchProps) {
	const songs = await getSongsByTitle(searchParams.title)

	return (
		<div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden  overflow-y-auto">
			<Header className="from-sky-800">
				<div className="mb-2 flex flex-col gap-y-6 ">
                    <h1 className='text-text-lighter text-3xl font-semibold' >Search</h1>
                    <SearchInput/>
                </div>
			</Header>
		</div>
	)
}
