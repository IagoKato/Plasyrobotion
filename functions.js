export function sleep(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Sleepou')
        }, segundos * 1000);
    })
}
const denyList = [
    'google',
    'globo',
    'g1',
    'facebook',
    'instagram',
    'gov.br',
    'noticias',
    'javascript:void(0);',
    'youtube',
    'vimeo'
]

/**
 * Check if url constais any key in blacklist
 * @param {string} url
 * @returns bool
 */
function isDenyList(url) {
    return !(denyList.find(denyKey => url.includes(denyKey)) === undefined)
}

/**
 * Check if url constais any key in blacklist and not empty
 * @param {string} url 
 * @returns bool
 */
export function filtraUrl(url) {
    return !(url === '' || isDenyList(url));
}