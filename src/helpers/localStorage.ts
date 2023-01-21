export const addToLocalStorage = (name: string) => {
    if (localStorage.getItem('cities') === null){
        localStorage.setItem('cities', JSON.stringify([name]))
    } else {
        const temp = JSON.parse(localStorage.cities)
        if (!temp.includes(name)) {
            temp.unshift(name)
            localStorage.setItem('cities', JSON.stringify(temp))
        }
    }
}

export const removeLocalStorage = (name: string) => {
    const temp = JSON.parse(localStorage.cities).filter((cityName: string) => cityName !== name)
    localStorage.setItem('cities', JSON.stringify(temp))
}