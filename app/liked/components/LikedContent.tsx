'use client'

import { useUser } from "@/hooks/useUser"
import { Song } from "@/types"
import { useRouter } from "next/navigation"
import { useEffect } from "react"




type LikedContentProps = {
    songs:Song[]
  }
export default function LikedContent({ songs }: LikedContentProps) {


    const router = useRouter()
    const { isLoading, user, } = useUser()

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/')
        } 
    }, [isLoading, user, router])


    if(songs.length === 0) return (
     <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Liked Songs
     </div>
    )

return (
  <div>
     LikedContent
  </div>
  )
}