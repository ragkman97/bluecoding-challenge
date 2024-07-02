

export function UpdateLocalStorageHistory(v:string){
    if (typeof window !== 'undefined'){
        let values:Array<string> = []
        const current = localStorage.getItem('history')
        if (current!=null){
            values = JSON.parse(current)
        }
        values.push(v)
        localStorage.setItem('history',JSON.stringify(values))
        return values
    }else{
        return []
    }
}

export function GetLocaleStorageHistory(){
    if (typeof window !== 'undefined'){
        let values:Array<string> = []
        const current = localStorage.getItem('history')
        if (current!=null){
            values = JSON.parse(current)
        }
        return values
    }else{
        return []
    }
}

export function CleanLocaleStorageHistory(){
    if (typeof window !== 'undefined'){
        localStorage.setItem('history',JSON.stringify([]))
    }else{
        return []
    }
}