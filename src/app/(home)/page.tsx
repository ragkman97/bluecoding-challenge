'use client'
import { SearchInput } from "@/components/input/seacrh"
import React, { ChangeEvent } from "react"
import { API_KEY, API_URL } from "../../../params"
import { CardGif } from "@/components/cards/imgGif"
import { Pagination } from "@/components/cards/pagination"
import { CleanLocaleStorageHistory, GetLocaleStorageHistory, UpdateLocalStorageHistory } from "@/utils/localstorage"


const texts = {
    title: 'HOME PAGE',
    history: 'History:',
    clean: 'Clean History',
}

const step: number = 20
export default function HomePage() {

    const history = GetLocaleStorageHistory()
    const [offset, setOffset] = React.useState<number>(0)
    const [searchText, setSearchText] = React.useState<string>('')
    const [response, setResponse] = React.useState<GiphyResponse | null>(null)

    //handlers

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)
    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (offset >= step) setOffset((prev) => prev - step)
    }
    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => setOffset((prev) => prev + step)


    const handleCleanHistory = () => {
        CleanLocaleStorageHistory()
        setOffset(0)
        setSearchText('')
    }


    //effects
    React.useEffect(() => {
        const execute = setTimeout(() => {
            fetch(`${API_URL}?api_key=${API_KEY}&q=${searchText}&limit=20&offset=${offset}`)
                .then((res) => res.json())
                .then((data) => setResponse(data))
            //execute
            const current = UpdateLocalStorageHistory(searchText)
        }, 2000)
        return () => clearTimeout(execute)
    }, [searchText, offset])

    return (
        <section>
            <h1 className="text-slate-950 font-semibold text-xl">{texts.title}</h1>
            <SearchInput
                value={searchText}
                placeholder="Buscar ..."
                handleChange={handleChangeSearch}
            />
            <p className="my-3">{texts.history} {history.map((element, index) => ` , ${element}`)}</p>
            <button
                className="rounded shadow bg-gray-100 p-2  my-3"
                onClick={handleCleanHistory}>{texts.clean}</button>
            <Pagination
                prev={handlePrev}
                next={handleNext}
            />
            <ul
                className="columns-3 p-4"
            >
                {response != null && response.data
                    ? response.data.map((element, index) => {
                        return (
                            <CardGif
                                key={element.id}
                                src={element.images.original.url}
                                alt={element.title}
                            />
                        )
                    })
                    : <p>loading...</p>

                }
            </ul>


        </section>
    )
}