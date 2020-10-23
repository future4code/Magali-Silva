export type Extract = {
    value: number,
    date: Date | string,
    description: string
}

export type userAccount = {
    id: number,
    name: string,
    cpf: string,
    dateOfBirth: string,
    balance: number,
    extract: Extract[]
}

export let users: userAccount[] = [
    {
        id: 1,
        name: "Magali",
        cpf: "123.456.789-10",
        dateOfBirth: "04/12/1994",
        balance: 0,
        extract: [
            {
                value: 0,
                date: "",
                description: ""
            }
        ]
    }
]