
'use client'

import { Song } from "@/types"


type PageContentProps = {
    songs: Song[]
}

export default function PageContent({ songs }: PageContentProps) {

    if (songs.length !== 0) return (
        <div className="mt-4 text-neutral-400" >
            No songs available.
        </div>
    )


  return (
    <div>PageContent</div>
  )
}