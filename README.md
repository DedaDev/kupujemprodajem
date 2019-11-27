# Kupujemprodajem Live

Modul koji "sluša" nove oglase na kupujemprodajem.com

## API

```js
const Kp = require('kupujemprodajem');
const kp = new Kp();

kp.on('data', (oglas) => {
    /*{
        ad_id: 87019458,
        ad_url: '/Bela-tehnika-i-kucni-aparati/...',
        name: 'Kamin Alfa-plam Rustik',
        thumbnail: 'photos/oglasi/8/....jpeg',
        price: '220,00&nbsp;&euro;',
        posted: '2019-11-27 22:23:27',
        currency: 'eur',
        lat: '44.3671910',
        lon: '20.9604515',
        location_id: 29,
        html: '\n' +...'
    }*/
});
```

### Events

* `data` - novi oglas.
* `error` - ukoliko se desi neka greška.
* `connected` - kada je konekcija uspostavljena.
* `disconnected` - kada je konekcija prekinuta.
