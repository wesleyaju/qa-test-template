import http from    'k6/http'
import  {sleep, check} from'k6'
import uuid from './libs/uuid.js'

export const options = {
    stages: [
        { duration: "2m", target: 1 }, // below normal load
        { duration: "5m", target: 1},
        { duration: "2m", target: 2 }, // normal load
        { duration: "5m", target: 2 },
        { duration: "2m", target: 3 }, // around the breaking point
        { duration: "5m", target: 3 },
        { duration: "2m", target: 4 }, // beyond the breaking point
        { duration: "5m", target: 5 },
        { duration: "10m", target: 0 }, // scale down. Recovery stage.
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
            'user-key': ('0C562706C9F33747E120B133CAB7407B851986177B8F31AD7A15A5EBE63DE4EBEE1E184B4D9CEBF4A4ABB8A505F073172C16566E18B0B87635179E0B41C02B9A')
        }
    }

    const res =  http.post(url, payload, headers)
    
   check(res, {
    'status should be 200': (r) => r.status === 200
   })
   
    sleep(1)
}