const BankCustomers = ['Oliva', 'Nat', 'Gus']

function clientList(customer) {
    for(let index = 0; index <customer.length; index += 1) {
        console.log(`Olá, ${customer[index]}. Segui abaixo nossas ofertas da semana.`);
    }
};

clientList(BankCustomers);