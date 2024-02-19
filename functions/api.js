export async function fetchJSON(url,options){

    const headers = {Accept:'application/json',...options}

    const res = await fetch(url,{...options,headers})

    if(res.ok){
        return res.json()
    }
    throw new Error('Ereeur serveur!!',{cause:res})

}