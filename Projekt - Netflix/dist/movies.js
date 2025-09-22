"use strict";
// Elements references
const select = document.getElementById("movies");
const results = document.getElementById("movie-category");
select.addEventListener("change", async (e) => {
    // Convert the event target to HTMLSelectElement to access the selected value
    const target = e.target;
    const category = target.value;
    try {
        // Fetch show data from API based on selected category
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${category}`);
        // Parse JSON into a type array
        const data = await response.json();
        // Clear previous results before adding new ones
        results.innerHTML = "";
        // Create an image element and append him to the results container
        data.forEach((item) => {
            if (item.show.image) {
                const img = document.createElement("img");
                img.src = item.show.image.medium;
                img.alt = item.show.name;
                img.title = item.show.name;
                img.classList.add("movie-poster");
                results.appendChild(img);
            }
        });
    }
    catch (error) {
        // Log any errors during the fetch or processing
        console.error("Chyba při načítání dat:", error);
    }
});
