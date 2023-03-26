let CNPJ = require('consulta-cnpj-ws');
let cnpj = new CNPJ();
 
cnpj.consultaCNPJ({cnpj: "06990590000123" })
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})