
let currentQuery = "sports";
let currentPage = 1;
const navbarLinks = document.querySelectorAll(".nav-link"); // Select all navbar links
const footerLinks = document.querySelectorAll(".footer-link");

const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".custom-search-btn"); // Fix for search button
const prev = document.getElementById("prev"); // 'prev' has this ID in HTML
const next = document.getElementById("next"); // 'next' has this ID in HTML

const fetchNews = async (page, q) => {
    console.log(`fetching news for ${q}, Page number ${page}...`);
    var url = 'https://newsapi.org/v2/everything?' +
        'q=' + q +
        '&from=2025-03-16&' +
        'pageSize=20&' +
        'language=en&' +
        'page=' + page +
        '&sortBy=popularity&' +
        'apiKey=2c4ea760f56c4925be0897081b782bb2';

    // var req = new Request(url);

    // let a = await fetch(req)
    // let response = await a.json()
    // console.log("API Response:", response);


    let response = { "status": "ok", "totalResults": 319, "articles": [{ "source": { "id": null, "name": "BBC News" }, "author": "Jonathan Jurejko", "title": "Draper stuns Alcaraz to reach Indian Wells final", "description": "Britain's Jack Draper is helped by a controversial video call in his favour to earn a coming-of-age win over four-time major champion Carlos Alcaraz.", "url": "https://www.bbc.com/sport/tennis/articles/czdn86z4v50o", "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/7fe6/live/72b825f0-01fd-11f0-a9cc-f1d2f0520d3f.jpg", "publishedAt": "2025-03-16T00:48:42Z", "content": "Britain's Jack Draper was helped by a controversial video assistant referee-style call in his favour to earn a coming-of-age win over Carlos Alcaraz and reach the biggest final of his career.\r\nDraper… [+1089 chars]" }, { "source": { "id": "business-insider", "name": "Business Insider" }, "author": "Lakshmi Varanasi", "title": "5 takeaways from HumanX: Here's how key speakers managed to look past the industry's hype", "description": "I attended HumanX this week. Here are my top takeaways from the conference.", "url": "https://www.businessinsider.com/takeaways-from-humanx-ai-conference-2025-3", "urlToImage": "https://i.insider.com/67d61be7b8b41a9673faca8f?width=1200&format=jpeg", "publishedAt": "2025-03-16T01:51:15Z", "content": "Kamala Harris speaks at HumanX.Big Event Media/Getty Images for HumanX Conference\r\n<ul><li>At HumanX in Las Vegas tech leaders talked about on AI's impact on business.</li><li>Speakers like Kamala Ha… [+6529 chars]" }, { "source": { "id": "business-insider", "name": "Business Insider" }, "author": "Noah Sheidlower,Jacob Zinkula", "title": "Ageism, economic shifts, and finances: Over 600 older Americans shared how they're navigating today's job market", "description": "Hundreds of older Americans told BI that ageism, tech changes, and economic shifts have affected their retirement plans.", "url": "https://www.businessinsider.com/cant-retire-no-jobs-older-americans-work-money-struggles-2025-3", "urlToImage": "https://i.insider.com/67d2fee0b8b41a9673fa8c1e?width=1200&format=jpeg", "publishedAt": "2025-03-16T07:59:01Z", "content": "Getty Images; Rebecca Zisser/BI\r\n<ul><li>Older Americans are taking blue-collar jobs or navigating unemployment because of hiring slowdowns.</li><li>Many said that ageism, tech changes, and economic … [+7986 chars]" }, { "source": { "id": null, "name": "Awwwards.com" }, "author": null, "title": "Horizonte Village", "description": "Horizonte Village is a luxury residential project in Mijas, Costa del Sol, offering modern villas with stunning sea views, smart home technology, and private pools.", "url": "https://www.awwwards.com/sites/horizonte-village", "urlToImage": "https://assets.awwwards.com/awards/submissions/2025/02/67a362b9a2cc6822025703.jpg", "publishedAt": "2025-03-16T00:00:00Z", "content": "This website uses a colorpalette of 2 colors\r\n<ul><li></li><li></li></ul>" }, { "source": { "id": null, "name": "Forbes" }, "author": "Brooke Crothers, Contributor, \n Brooke Crothers, Contributor\n https://www.forbes.com/sites/brookecrothers/", "title": "Steering Clear Of Tesla? You Might Miss The Future Of Driving", "description": "Despite recent anti-Tesla protests, a Tesla delivers good bang for the buck and comes with technology you won’t find on other EVs.", "url": "https://www.forbes.com/sites/brookecrothers/2025/03/16/steering-clear-of-tesla-you-might-miss-the-future-of-driving/", "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/67d650ff11b8ab89bc170232/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds", "publishedAt": "2025-03-16T07:06:09Z", "content": "2025 Tesla Model Y with Full Self Driving version 13.\r\nCredit: Brooke Crothers\r\nDespite recent anti-Tesla protests some violent and destructive a Tesla delivers good bang for the buck and comes with … [+3998 chars]" }, { "source": { "id": null, "name": "Yanko Design" }, "author": "JC Torres", "title": "Transform Your Content Creation Game with MagMirror’s Revolutionary 3-in-1 Selfie Monitor", "description": "Transform Your Content Creation Game with MagMirror’s Revolutionary 3-in-1 Selfie MonitorHave you ever noticed how smartphone manufacturers boast about their incredible camera systems, yet the front-facing cameras always seem like an afterthought? While some …", "url": "https://www.yankodesign.com/2025/03/15/transform-your-content-creation-game-with-magmirrors-revolutionary-3-in-1-selfie-monitor/", "urlToImage": "https://www.yankodesign.com/images/design_news/2025/03/transform-your-content-creation-game-with-magmirrors-revolutionary-3-in-1-selfie-monitor/MagMirror_Real_time_viewing_Selfie_Monitor_Screen_layout.jpg", "publishedAt": "2025-03-16T01:45:57Z", "content": "Have you ever noticed how smartphone manufacturers boast about their incredible camera systems, yet the front-facing cameras always seem like an afterthought? While some phones have OK front cameras,… [+3637 chars]" }, { "source": { "id": null, "name": "Yahoo Entertainment" }, "author": null, "title": "Weak Financial Prospects Seem To Be Dragging Down CPE Technology Berhad (KLSE:CPETECH) Stock", "description": null, "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_2021a1ee-65bd-4602-8db7-6b6a5cd6d375", "urlToImage": null, "publishedAt": "2025-03-16T00:21:21Z", "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]" }, { "source": { "id": null, "name": "mindbodygreen.com" }, "author": "https://www.mindbodygreen.com/wc/carleigh-ferrante", "title": "I'm Shocked By How Quickly This Helps My Sore Muscles Recover After Tough Workouts", "description": "Worth the biohacker hype?", "url": "https://www.mindbodygreen.com/articles/flexbeam-editor-review", "urlToImage": "https://mindbodygreen-res.cloudinary.com/image/upload/c_crop,x_0,y_0,w_2000,h_1334/c_fill,w_2000,h_1200,g_auto,fl_lossy,f_jpg/org/worok2f1nm893gys9.jpeg", "publishedAt": "2025-03-16T04:00:00Z", "content": "If you've ever dealt with persistent back pain or muscle soreness, you know how frustrating it can be. As someone who relies on speedy workout recovery, Ive tested a lot of techniques to ease my ache… [+5143 chars]" }, { "source": { "id": null, "name": "netzwelt" }, "author": "Birte Keller", "title": "Apples Konkurrenz zum \"Magischen Radierer\": So könnt ihr eure Bilder auf dem iPhone bereinigen", "description": "Mit iOS 18.4 hat Apple eine Konkurrenz für Googles \"Magisches Radiergummi\" nach Deutschland gebracht. Wir erklären, wie ihr die Funktion \"Bereinigen\" verwendet. \nDieser Artikel wurde einsortiert unter \nApple,Technology.", "url": "https://www.netzwelt.de/anleitung/240098-apples-konkurrenz-magischen-radierer-so-bilder-iphone-bereinigen.html", "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw1920_sh1080_sx0_sy0_sr16x9_nu2/picture/original/2025/03/apple-intelligence-fotos-bereinigen-428706.jpeg", "publishedAt": "2025-03-16T07:30:00Z", "content": "WIE NUTZE ICH DIE FUNKTIONEN VON KÜNSTLICHER INTELLIGENZ?\r\nMit iOS 18.4 hat Apple eine Konkurrenz für Googles \"Magisches Radiergummi\" nach Deutschland gebracht. Wir erklären, wie ihr die Funktion \"Be… [+1282 chars]" }, { "source": { "id": null, "name": "Bangkok Post" }, "author": "Supoj Wancharoen", "title": "Agencies team up to boost Thai rail transport innovation", "description": "<p>The State Railway of Thailand (SRT) and the Rail Technology Research and Development Agency (RTRDA) will join hands to support the development of rail transport innovations, helping to boost the competitiveness of the country's rail industry and lessen its…", "url": "https://www.bangkokpost.com/thailand/general/2980736/agencies-team-up-to-boost-thai-rail-transport-innovation", "urlToImage": "https://static.bangkokpost.com/media/content/20250316/c1_2980736_250316062542_700.jpg", "publishedAt": "2025-03-16T00:13:00Z", "content": "The State Railway of Thailand (SRT) and the Rail Technology Research and Development Agency (RTRDA) will join hands to support the development of rail transport innovations, helping to boost the comp… [+1587 chars]" }, { "source": { "id": null, "name": "Rivals.com" }, "author": "Keenan Cummings", "title": "Technology provides benefits for West Virginia football", "description": "Technology has come a long way in the game of football and Rich Rodriguez believes that it certainly has a place.", "url": "https://westvirginia.rivals.com/news/technology-provides-benefits-for-west-virginia-football?yptr=yahoo", "urlToImage": "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/n3vkfgqgkwtnipquam32", "publishedAt": "2025-03-16T08:04:00Z", "content": "Technology has come a long way in the game of football and West Virginia head coach Rich Rodriguez believes that it certainly has a place.\r\nThe Mountaineers utilize GPS trackers with players that dis… [+2071 chars]" }, { "source": { "id": null, "name": "Screen Rant" }, "author": "Martha Wright", "title": "All Of Christopher Nolan’s Sci-Fi Movies Take Place In The Same Universe According To This Detailed Theory", "description": "Christopher Nolan has made four sci-fi films throughout his career, and one detailed fan theory speculates that these take place in a shared universe.", "url": "https://screenrant.com/christopher-nolan-shared-universe-connects-movies-theory/", "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/03/all-of-christopher-nolan-s-sci-fi-movies-take-place-in-the-same-universe-according-to-this-detailed-theory.jpg", "publishedAt": "2025-03-16T00:00:13Z", "content": "Christopher Nolan's collection of films spans a variety of genres, but one detailed fan theory suggests Nolan's science fiction epics take place in the same universe (via Reddit.) Considering very fe… [+7818 chars]" }, { "source": { "id": null, "name": "Bangkok Post" }, "author": "Supoj Wancharoen", "title": "SRT and RTRDA agree to team up to boost rail transport innovation", "description": "<p>The State Railway of Thailand (SRT) and the Rail Technology Research and Development Agency (RTRDA) will join hands to support the development of rail transport innovations, helping to boost the competitiveness of the country's rail industry and lessen its…", "url": "https://www.bangkokpost.com/thailand/general/2980736/srt-and-rtrda-agree-to-team-up-to-boost-rail-transport-innovation", "urlToImage": "https://static.bangkokpost.com/media/content/20250316/c1_2980736_250316062542_700.jpg", "publishedAt": "2025-03-16T00:13:00Z", "content": "The State Railway of Thailand (SRT) and the Rail Technology Research and Development Agency (RTRDA) will join hands to support the development of rail transport innovations, helping to boost the comp… [+1587 chars]" }, { "source": { "id": null, "name": "Macsparky.com" }, "author": "David Sparks", "title": "MacSparky Book Report: Nexus by Yuval Noah Harari", "description": "Because I’m spending so much time with artificial intelligence lately, and because it seems to be such an interesting topic for podcast listeners and MacSparky Labs members alike, I decided to read Nexus: A Brief History of Information Networks by Yuval Noah …", "url": "https://www.macsparky.com/blog/2025/03/macsparky-book-report-nexus-by-yuval-noah-harari/", "urlToImage": "https://www.macsparky.com/wp-content/uploads/2025/03/153DS_nexus-book-cover.jpeg", "publishedAt": "2025-03-16T08:00:20Z", "content": "Because I’m spending so much time with artificial intelligence lately, and because it seems to be such an interesting topic for podcast listeners and MacSparky Labs members alike, I decided to read N… [+2060 chars]" }, { "source": { "id": null, "name": "netzwelt" }, "author": "Phan Y Ngo", "title": "Samsung rollt One UI 7-Beta für mehr Geräte aus: Diese Handys und Tablets erhalten das Update", "description": "Auf Samsungs neuesten Betriebssystem One UI 7 müssen sich Nutzer länger gedulden als erwartet. Doch zumindest ist nun die Beta-Version für die ersten Galaxy-Geräte verfügbar.\nDieser Artikel wurde einsortiert unter \nSamsung,Technology,Samsung: So lange erhält …", "url": "https://www.netzwelt.de/news/240076-samsung-rollt-one-ui-7-beta-mehr-geraete-handys-tablets-erhalten-update.html", "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw1280_sh720_sx0_sy120_sr16x9_nu2/picture/original/2024/10/one-ui-70-basiert-android-15-415601.jpeg", "publishedAt": "2025-03-16T07:45:00Z", "content": "SAMSUNG *:not([data-mrf-experience]) img.lazy'); var tl = domTargets.length; var te = 0; var ta = function() { if (document.getElementById('adobe-print')) { tx(); } else { var div = document.createEl… [+3091 chars]" }, { "source": { "id": null, "name": "KicksOnFire.com" }, "author": "Kicksonfire", "title": "Nike Vomero 18 Platinum Tint / Siren Red", "description": "The Nike Vomero 18 in Platinum Tint and Siren Red is a striking addition to the Vomero lineup, merging advanced running technology with a modern aesthetic. Known for its superior cushioning, the Vomero 18 offers an exceptional level of comfort appealing to bo…", "url": "https://www.kicksonfire.com/nike-vomero-18-platinum-tint-siren-red", "urlToImage": "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_nike-vomero-18-platinum-tint-siren-red.png", "publishedAt": "2025-03-16T04:42:19Z", "content": "The Nike Vomero 18 in Platinum Tint and Siren Red is a striking addition to the Vomero lineup, merging advanced running technology with a modern aesthetic. Known for its superior cushioning, the Vome… [+1310 chars]" }, { "source": { "id": null, "name": "KicksOnFire.com" }, "author": "Kicksonfire", "title": "Nike Winflo 11 Cave Stone / Vast Grey", "description": "The Nike Winflo 11 in the Cave Stone/Vast Grey colorway is a shoe that exemplifies both performance and style. Designed for runners who demand efficiency and comfort, this iteration of the Winflo series is equipped with advanced cushioning technology to provi…", "url": "https://www.kicksonfire.com/nike-winflo-11-cave-stone-vast-grey", "urlToImage": "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_nike-winflo-11-cave-stone-vast-grey.png", "publishedAt": "2025-03-16T04:39:15Z", "content": "The Nike Winflo 11 in the Cave Stone/Vast Grey colorway is a shoe that exemplifies both performance and style. Designed for runners who demand efficiency and comfort, this iteration of the Winflo ser… [+1079 chars]" }, { "source": { "id": null, "name": "KicksOnFire.com" }, "author": "Kicksonfire", "title": "Adidas Adizero Electric Tpu Core Black / Cloud White", "description": "The Adidas Adizero Electric TPU in Core Black and Cloud White is a striking addition to Adidas's lineup, combining cutting-edge technology with sleek design. This model is particularly noted for its innovative use of Thermoplastic Polyurethane (TPU) materials…", "url": "https://www.kicksonfire.com/adidas-adizero-electric-tpu-core-black-cloud-white", "urlToImage": "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_adidas-adizero-electric-tpu-core-black-cloud-white.png", "publishedAt": "2025-03-16T04:50:42Z", "content": "The Adidas Adizero Electric TPU in Core Black and Cloud White is a striking addition to Adidas's lineup, combining cutting-edge technology with sleek design. This model is particularly noted for its … [+1474 chars]" }, { "source": { "id": null, "name": "KicksOnFire.com" }, "author": "Kicksonfire", "title": "Adidas By Stella Mccartney Solarglide Wmns Bright Green / Semi Pulse Lilac", "description": "The \"Adidas by Stella McCartney Solarglide WMNS Bright Green / Semi Pulse Lilac\" is a striking fusion of cutting-edge sports technology and high-fashion design. This unique collaboration between Adidas and renowned fashion designer Stella McCartney showcases …", "url": "https://www.kicksonfire.com/adidas-by-stella-mccartney-solarglide-wmns-bright-green-semi-pulse-lilac", "urlToImage": "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_adidas-by-stella-mccartney-solarglide-wmns-bright-green-semi-pulse-lilac.png", "publishedAt": "2025-03-16T04:53:17Z", "content": "The \"Adidas by Stella McCartney Solarglide WMNS Bright Green / Semi Pulse Lilac\" is a striking fusion of cutting-edge sports technology and high-fashion design. This unique collaboration between Adid… [+1493 chars]" }, { "source": { "id": null, "name": "KicksOnFire.com" }, "author": "Kicksonfire", "title": "Nike Zegama 2 Thunder Blue / Diffused Blue", "description": "The Nike Zegama 2 Thunder Blue / Diffused Blue is a striking addition to Nike's lineup, offering a dynamic blend of style and performance for the avid runner. This iteration is particularly eye-catching, as it balances bold aesthetics with cutting-edge techno…", "url": "https://www.kicksonfire.com/nike-zegama-2-thunder-blue-diffused-blue", "urlToImage": "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_nike-zegama-2-thunder-blue-diffused-blue.png", "publishedAt": "2025-03-16T04:41:39Z", "content": "The Nike Zegama 2 Thunder Blue / Diffused Blue is a striking addition to Nike's lineup, offering a dynamic blend of style and performance for the avid runner. This iteration is particularly eye-catch… [+1183 chars]" }] }
    function truncateText(text, maxLength) {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        let trimmedText = text.slice(0, maxLength);
        return trimmedText.slice(0, trimmedText.lastIndexOf(" ")) + "...";
    }
    let str = " "
    resultCount.innerHTML = response.totalResults;
    let delay = 500;


    for (let item of response.articles) {
        let title = truncateText(item.title, 60);
        let description = truncateText(item.description, 100);

        str = str + `<div class="card my-4 mx-2 hidden " style="width: 18rem;transition: opacity 0.8s ease-out, transform 0.8s ease-out;">
                    <img height = "184" src="${item.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}...</p>
                        <a href="${item.url}" target = "_blank" class="btn btn-primary">Read More</a>
                    </div>
        </div>`;
        
    }
    document.querySelector(".content").innerHTML = str
    let cards = document.querySelectorAll(".content .card");
cards.forEach((card, index) => {
    setTimeout(() => {
        card.classList.add("slide-in");
    }, delay * index);
});
}
fetchNews(currentPage, currentQuery);
// search.addEventListener("click", (e) => {

//     e.preventDefault()
//     let query = searchInput.value;
//     currentQuery = query
//     fetchNews(1, query)
// })
// prev.addEventListener("click", (e) => {

//     e.preventDefault()
//     if (currentPage > 1) {
//         currentPage = currentPage - 1
//         fetchNews(1, query)
//     }
// })
// next.addEventListener("click", (e) => {

//     e.preventDefault()
//     currentPage = currentPage + 1
//     fetchNews(1, query)
// })
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let query = searchInput.value.trim(); // Trim spaces
    if (query !== "") { // Avoid empty searches
        currentQuery = query;
        currentPage = 1;
        fetchNews(1, query);
    }
});

prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        fetchNews(currentPage, currentQuery); // Use currentQuery instead of undefined 'query'
    }
});

next.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage++;
    fetchNews(currentPage, currentQuery); // Use currentQuery
});

document.addEventListener("DOMContentLoaded", () => {
    // Navbar Links
    const navbarLinks = document.querySelectorAll(".nav-link");

    navbarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            currentQuery = link.getAttribute("data-category");
            currentPage = 1;
            console.log("Fetching news for:", currentQuery);
            fetchNews(currentPage, currentQuery);
        });
    });

    // Footer Quick Links
    const footerLinks = document.querySelectorAll(".footer-link");

    footerLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            currentQuery = link.getAttribute("data-category");
            currentPage = 1;
            console.log("Fetching news for:", currentQuery);
            fetchNews(currentPage, currentQuery);
            window.scrollTo({ top: 0, behavior: "smooth" });

        });
    });
});