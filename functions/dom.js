/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @return {HTMLElement}
 */
export function createElemen(tagName,attributes = {}){

    const element = document.createElement(tagName)
    //permet de parcourir un objet en JS 
    for(const [attribute,value] of Object.entries(attributes)){
        element.setAttribute(attribute,value)
    }
    return element
    

}