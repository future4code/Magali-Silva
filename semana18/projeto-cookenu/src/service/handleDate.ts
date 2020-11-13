export const handleDate = () => {
    const data = new Date
    const day = data.getDate().toString()
    const dayFormat = (day.length == 1) ? "0"+day : day
    const now = `${dayFormat}/${data.getMonth()+1}/${data.getFullYear()}`

    const nowForDB: Date = new Date(`${data.getFullYear()}-${data.getMonth()+1}-${dayFormat}`)

    console.log(data, day)
    console.log(now)
    console.log(nowForDB)


    return {
        now,
        nowForDB
    }
}

