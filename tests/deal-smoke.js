import http from    'k6/http'
import  {sleep, check} from'k6'
import uuid from './libs/uuid.js'

export const options = {
    vus: 1,
    duration: '1m',
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
            'user-key': ('insira seu token de api aqui')
        }
    }

    const res =  http.post(url, payload, headers)
    
   check(res, {
    'status should be 200': (r) => r.status === 200
   })
   
    sleep(1)
}