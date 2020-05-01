export class IEvent {
    id: number
    name: string
    time: string
    date:  Date
    price: number
    imageUrl: string
    location?: {
        address: string
        city: string
        country: string
    }
    onlineUrl?: string
    sessions: ISessions[]
}

export class ISessions {
    id: number
    presenter: string
    duration: number
    name: string
    level: string
    abstract: string
    voters?: string[]
}
