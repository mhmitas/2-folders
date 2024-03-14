// Load category to the category bar
const loadCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');

    const data = await res.json()
    // console.log(data.data.news_category)

    const categoryContainer = document.getElementById('category-bar-container')

    data.data.news_category.forEach(item => {
        // console.log(item.category_name)
        const div = document.createElement('div')
        div.innerHTML = `
            <button onclick= "loadNews('${item.category_id}')" class="btn btn-success">${item.category_name}</button>
        `
        // append category buttons to the category bar
        categoryContainer.appendChild(div)

    })
}

loadCategory()


const loadNews = async (catId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`)
    const data = await res.json()
    // console.log(data.data);

    const newsContainer = document.getElementById('news-container')
    newsContainer.textContent = "";

    data.data.forEach(item => {
        // console.log(item)
        const div = document.createElement('div')

        // div.innerHTML= 

        div.classList = 'card bg-[#00001a] shadow-xl card-side border'

        div.innerHTML = `
        <figure class = "w-96"><img src="${item.image_url}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <div class="news-info">
                <h4>${item.title}</h4>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex justify-between">
                <div class="flex gap-6 items-center">
                    <div>
                        <img class="w-9 rounded-xl" src="${item.author.img}" alt="author img">
                    </div>
                    <div>
                        <p>MR Devid</p>
                        <p>${item.author.published_date}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <p>view: ${item.total_view}</p>
                    <!-- <button></button> -->
                    <button class="btn btn-secondary">Details</button>
                </div>
            </div>
        </div>
        `
        newsContainer.appendChild(div)

    })
}

loadNews('01')


const handleSearch = () => {
    const inputValue = document.getElementById('search-field').value
    console.log(inputValue, typeof inputValue)
    if(inputValue){
        loadNews(inputValue)
    }else{
        alert('input search id')
    }

}