const resultCount = document.getElementById("resultCount");

const fetchNews = async (page = 1, q = "tcs layoff") => {
    const url = `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=20&language=en&sortBy=popularity&apiKey=${CONFIG.API_KEY}`;
    try {
        // const res = await fetch("response.json");
        const res = await fetch(url);
        const response = await res.json();
        console.log("Local JSON Response:", response);

        function truncateText(text, maxLength) {
            if (!text) return "";
            if (text.length <= maxLength) return text;
            let trimmedText = text.slice(0, maxLength);
            return trimmedText.slice(0, trimmedText.lastIndexOf(" ")) + "...";
        }

        let str = "";
        resultCount.innerHTML = response.totalResults;

        let delay = 500;
        for (let item of response.articles) {
            let title = truncateText(item.title, 60);
            let description = truncateText(item.description, 100);

            str += `
            <div class="card my-4 mx-2 hidden" 
                 style="width: 18rem;transition: opacity 0.8s ease-out, transform 0.8s ease-out;">
                <img height="184" src="${item.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>`;
        }

        document.querySelector(".content").innerHTML = str;

        // Animate cards
        let cards = document.querySelectorAll(".content .card");
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("slide-in");
            }, delay * index);
        });
    } catch (err) {
        console.error("Error fetching local JSON:", err);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    fetchNews();
});
