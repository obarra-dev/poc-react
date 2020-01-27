
//TODO estudiar esta sintaxis
export const apiGet = (url) => () => fetch(url).then(res => res.json());

export const apiPut = (url, id, object) => () => 
    fetch(`${url}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(object),
        headers: new Headers({'Content-type': 'application/json'})
    }).then(res => res.json())
    .then(res => {
        if(res.error){
            return Promise.reject(res.validate);
        }
        return res;
    }
    )