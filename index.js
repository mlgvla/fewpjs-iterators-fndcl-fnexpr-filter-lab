// Code your solution here
function findMatching(drivers, name) {
    let result
    result = drivers.filter( driver => driver.toLowerCase() === name.toLowerCase())
    return result
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => 
        driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, name) {
    return drivers.filter(driver => 
        driver.name.toLowerCase() === name.toLowerCase())
}