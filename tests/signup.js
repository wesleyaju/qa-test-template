import http from    'k6/http'
import  {sleep, check} from'k6'
import uuid from './libs/uuid.js'

export const options = {
    vus: 5,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(95)<2000'] //95% das requisições devem responder em ate 2s.
    }
}

export default function() { 
    const url = `https://api2.ploomes.com/Deals` 

    const payload = JSON.stringify({ title: `${uuid.v4().substring(24)}`})

    const headers = {
        'headers': {
            'user-key': ('6E1014F49A42E512BA902B890A6E12511B0C51FE6BC10249BA5B620BA16AC04173F01D12227D439DDE116D3423AC62C2988EBB633244111C7A7E97E350B42346')
        }
    }

    const res =  http.post(url, payload, headers)
    
   check(res, {
    'status should be 200': (r) => r.status === 200
   })
   
    sleep(1)
}