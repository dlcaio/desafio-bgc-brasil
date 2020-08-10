export function addToChart(id) {
    return {type: 'ADD_TO_CHART', id}
}

export function removeFromChart(id) {
    return {type: 'REMOVE_FROM_Chart', id}
}