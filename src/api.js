export const server = 'https://play.dhis2.org/test/api';

export const basicAuth = `Basic ${btoa('admin:district')}`;

export function getAllDataElements(){
    return fetch(`${server}/dataElements.json`, {
        method: 'GET',
        headers: {
            'Authorization': basicAuth,
            'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(({ dataElements }) => dataElements);
}
