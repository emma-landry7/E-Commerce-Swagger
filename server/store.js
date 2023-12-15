axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        console.log(response.data)
        function addCard() {
            response.data.forEach((item) => {
                // console.log(item.image)
                const template = document.getElementById('card-template').content.cloneNode(true);
                template.querySelector('.card-image').setAttribute("src", item.image);
                template.querySelector('.card-title').innerText = item.title;
                template.querySelector('.card-price').innerText = item.price;
                template.querySelector('.card-text').innerText = item.description;

                document.querySelector('#product-list').appendChild(template)
            })
        }

        function getData() {
            return new Promise(resolve => {
                setTimeout(function() {
                    resolve()
                }, 1000)
            })
        }
    })