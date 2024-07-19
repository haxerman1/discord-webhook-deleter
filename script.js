document.getElementById("webhookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const webhookUrl = document.getElementById("webhookUrl").value;
    deleteWebhook(webhookUrl);
});

function deleteWebhook(url) {
    fetch(url, {
        method: 'DELETE'
    })
    .then(response => {
        const resultElement = document.getElementById("result");
        if (response.status === 204) {
            resultElement.textContent = "💣Done dawg, its deleted💣.";
        } else {
            resultElement.textContent = "erm the webhook couldnt be deleted sadly, try checking the url.";
        }
        resultElement.classList.add("visible");
    })
    .catch(error => {
        console.error("error, here it is:", error);
        const resultElement = document.getElementById("result");
        resultElement.textContent = "error happend, try agen?";
        resultElement.classList.add("visible");
    });
}
