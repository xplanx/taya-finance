import { CountUp } from "../lib/count-up.min.js";

// pricing
(function () {
    const pricing = document.querySelector(".pricing"),
        buttons = pricing.querySelectorAll(".pricing__tabs button"),
        substrate = pricing.querySelector(".pricing__substrate"),
        values = pricing.querySelectorAll(".pricing__value span");

    let counters = [];
    values.forEach((value) => {
        const price = +value.innerHTML;
        const counter = new CountUp(value, price, {
            duration: 0.4,
            useEasing: false,
            preserveValue: true,
        });
        counter.start();
        return counters.push(counter);
    });

    buttons.forEach((button, index) =>
        button.addEventListener("click", () => {
            const prices = JSON.parse(button.dataset.prices);

            values.forEach((_, i) => {
                counters[i].update(prices[i]);
            });

            buttons.forEach((b) => b.classList.remove("active"));
            button.classList.add("active");

            if (index === 0) {
                substrate.classList.remove("active");
            } else {
                substrate.classList.add("active");
            }
        })
    );
})();
