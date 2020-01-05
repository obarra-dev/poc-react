
//TODO estudiar esta sintaxis
export const apiGet = (url) => () => fetch(url).then(res => res.json());