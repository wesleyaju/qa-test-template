import http from    'k6/http'
import  {sleep, check} from'k6'
import uuid from './libs/uuid.js'

export const options = {
    stages: [
        {duration: '1m', target: 5},
        {duration: '2m', target: 5},
        {duration: '1m', target: 0}
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'], //95% das requisições devem responder em ate 2s.
        http_req_failed: ['rate<0.01']  //1% das requisições podem ocorrer erros.
    }
}

export default function() { 
    const url = `https://api2.ploomes.com/Deals` 

    const payload = JSON.stringify({ title: `${uuid.v4().substring(24)}`})

    const headers = {
        'headers': {
            'user-key': ('2E362E8D7832D47AF5E462715F284E497A1937A8B8F8E8BC749E91BD982A7A40806AF5E43BB17FE87453D26C94BC00DC315C1F7E7A399B0E45C7FD4FBB92FFBD')
        }
    }

    const res =  http.post(url, payload, headers)
    
   check(res, {
    'status should be 200': (r) => r.status === 200
   })
   
    sleep(1)
}