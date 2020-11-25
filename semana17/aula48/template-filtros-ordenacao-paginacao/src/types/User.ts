export enum TYPE_USER {
   TEACHER = "Teacher",
   CX = "CX",
   OPERATIONS = "Operations"
}

export type User = {
   id: number,
   name: string,
   email: string,
   type: TYPE_USER
}
