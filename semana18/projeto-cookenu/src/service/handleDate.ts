export const handleDate = () => {
    const date = new Date
    const day = date.getDate().toString()
    const formatDay = (day.length == 1) ? "0"+day : day
    const now = `${formatDay}/${date.getMonth()+1}/${date.getFullYear()}`

    const nowForDB: Date = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${formatDay}`)

    console.log(date, day)
    console.log(now)
    console.log(nowForDB)


    return {
        now,
        nowForDB
    }
}

export const formatDate = (date: Date) => {
    const day = date.getDate().toString()
    const formatDay = (day.length == 1) ? "0"+day : day
    const now = `${formatDay}/${date.getMonth()+1}/${date.getFullYear()}`

    return now
}
