import http from    'k6/http'
import  {sleep, check} from'k6'
import uuid from './libs/uuid.js'

export const options = {
    vus: 5,
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
            'user-key': ('0999E8FF5394A51D688972A26F3081F1EC30B1D9C74C2F40E1B874E1D9E15A04E44772FDC40721BA2D96253F5D04EEF77F787AD564C45DDDA402459ACC2D4848')
        }
    }

    const res =  http.post(url, payload, headers)
    
   check(res, {
    'status should be 200': (r) => r.status === 200
   })
   
    sleep(1)
}