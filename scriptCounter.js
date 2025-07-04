const countdownContainer = document.querySelector(
    ".countdown-container"
);
const monthsElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const messageElement = document.getElementById("message");
const birthday = "2025-07-13T18:30:00.000Z";

let countdownInterval;

startCountdown(birthday);

function startCountdown(birthday) {
    countdownInterval = setInterval(() => {
        const today = new Date();
        const currentYear = today.getFullYear();

        // Set the next birthday date
        let nextBirthday = new Date(birthday);
        nextBirthday.setFullYear(currentYear);

        // If the birthday has already passed this year, set it to next year
        if (nextBirthday < today) {
            nextBirthday.setFullYear(currentYear);
        }

        const timeDifference = nextBirthday - today;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            messageElement.textContent = "HOY ES!!";
            return;
        }

        const days = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24 * 30)) /
                (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
            (timeDifference % (1000 * 60)) / 1000
        );

        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(
            2,
            "0"
        );
        secondsElement.textContent = String(seconds).padStart(
            2,
            "0"
        );
    }, 1000);
}