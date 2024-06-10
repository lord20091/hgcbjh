let cards = document.getElementById(`cards`)

let api = `https://jsonplaceholder.typicode.com/users`

fetch(api)
.then((response) => response.json())
.then((res) => getData(res))
.catch((err) => console.log(err));

function getData(data){
    for (const fetch of data) {
        let card = document.createElement(`div`)
        let btn = document.createElement(`button`)
        let p = document.createElement(`p`)
        let pEmail = document.createElement(`p`)
        let pManzil = document.createElement(`p`)
        let h3 = document.createElement(`h3`)

        btn.innerHTML = `More`
        h3.innerHTML = `Ismi: ` + fetch?.name
        p.innerHTML = `Username: ` + fetch?.username
        pManzil.innerHTML = `Manzil: ` + fetch?.address.street
        pEmail.innerHTML = `Email: ` + fetch?.email
        card.classList.add(`card`);
        card.appendChild(h3)
        card.appendChild(p)
        card.appendChild(pManzil)
        card.appendChild(pEmail)

        cards.appendChild(card);
    }
}