export interface Student {
    id: string,
    firstname: string,
    lastname: string,
    mail: string,
    phone: string
}

export interface CreateStudent {
    firstname: string,
    lastname: string,
    mail: string
}

export interface UpdateStudent {
    firstname?: string,
    lastname?: string,
    mail?: string
}
