import { server, basicAuth } from '../api';

export function getAllOrgUnits(){
    return fetch(`${server}/organisationUnits?paging=false`, {
        method: 'GET',
        headers: {
            'Authorization': basicAuth,
            'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(({ organisationUnits }) => organisationUnits);
}
