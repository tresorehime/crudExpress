export interface Student {
    id: string,
    firstName: string,
    lastName: string,
    mail: string,
    phone: string
}

export interface CreateStudent {
    firstName: string,
    lastName: string,
    mail: string
}

export interface UpdateStudent {
    firstName?: string,
    lastName?: string,
    mail?: string
}
