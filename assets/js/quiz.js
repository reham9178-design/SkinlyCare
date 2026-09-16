const questions = [
    {
        title: "What is your primary skin concern right now?",
        options: [
            ["Severe dryness, flakiness, and damaged skin barrier", "Hydra Glow"],
            ["Dark circles, puffiness, and fatigue around the eyes", "Revive Eye Cream"],
            ["Excess oil, clogged pores, and frequent impurities", "Purifying Clay"],
            ["Dullness, uneven skin tone, and oxidation/dark spots", "Vit C Brightening"]
        ]
    },
    {
        title: "How does your skin feel halfway through the day?",
        options: [
            ["Tight, uncomfortable, and crying out for moisture", "Hydra Glow"],
            ["The eye area looks tired and shows fine lines", "Revive Eye Cream"],
            ["Greasy and shiny, especially around the T-zone", "Purifying Clay"],
            ["Lacking radiance and looking a bit tired or dull", "Vit C Brightening"]
        ]
    },
    {
        title: "What is your main goal for your nighttime or daily routine?",
        options: [
            ["Deep 48-hour hydration and barrier restoration", "Hydra Glow"],
            ["Intensive overnight repair and smooth renewal", "Overnight Repair"],
            ["Gentle daily cleansing without stripping natural oils", "Gentle Foaming"],
            ["Brightening up my complexion and protecting against environmental damage", "Vit C Brightening"]
        ]
    },
    {
        title: "Which texture or finish do you prefer for your skincare products?",
        options: [
            ["Rich yet lightweight daily moisturizer with a dewy finish", "Hydra Glow"],
            ["Silky, soft-matte or smoothing active treatment", "Purifying Clay"],
            ["Fresh, clean, foaming wash texture", "Gentle Foaming"],
            ["Radiant glow finish packed with active antioxidants", "Vit C Brightening"]
        ]
    },
    {
        title: "What active ingredients do you look for most in your products?",
        options: [
            ["Hyaluronic Acid, Ceramides, and Vitamin E", "Hydra Glow"],
            ["Peptide Complex and Squalane for night restoration", "Overnight Repair"],
            ["Kaolin Clay, Bentonite Clay, and Green Tea", "Purifying Clay"],
            ["Vitamin C, Ferulic Acid, and Antioxidants", "Vit C Brightening"]
        ]
    }
];

const productsData = {
    "Hydra Glow": {
        type: "Daily Moisturizer",
        price: "$38.00",
        description: "A rich yet lightweight daily moisturizer that deeply hydrates, strengthens the skin barrier, and leaves skin soft, smooth, and naturally radiant.",
        ingredients: "Hyaluronic Acid, Ceramides, Shea Butter, Vitamin E",
        image: "https://framerusercontent.com/images/aSDibWPrvkBeelboEnuZxzZRQ.png?width=600&height=439"
    },

    "Revive Eye Cream": {
        type: "Eye Cream",
        price: "$36.00",
        description: "A lightweight eye cream that hydrates the delicate eye area while reducing the appearance of puffiness, dark circles, and fine lines.",
        ingredients: "Caffeine, Hyaluronic Acid, Peptides, Vitamin E",
        image: "https://framerusercontent.com/images/r0YR0N2J4E3iRIknWRRnIynD7Q.png?scale-down-to=1024&width=1100&height=1300"
    },

    "Gentle Foaming": {
        type: "Foaming Cleanser",
        price: "$24.00",
        description: "A gentle foaming cleanser that effectively removes dirt, excess oil, and makeup while keeping skin hydrated and refreshed.",
        ingredients: "Amino Acids, Aloe Vera, Glycerin, Green Tea Extract",
        image: "https://framerusercontent.com/images/RGavrHi29XbPi6XBca7Op8cylHg.png?scale-down-to=512&width=1490&height=1380"
    },

    "Overnight Repair": {
        type: "Night Cream",
        price: "$46.00",
        description: "A rich overnight cream that deeply nourishes, repairs the skin barrier, and helps you wake up to smoother, healthier-looking skin.",
        ingredients: "Ceramides, Peptide Complex, Squalane, Vitamin E",
        image: "https://framerusercontent.com/images/xx19K3YfsnDbombxGHJm6CZH88.png?width=640&height=850"
    },

    "Purifying Clay": {
        type: "Clay Face Mask",
        price: "$32.00",
        description: "A detoxifying clay mask that removes impurities, absorbs excess oil, and leaves skin feeling fresh, smooth, and refined.",
        ingredients: "Kaolin Clay, Bentonite Clay, Green Tea, Aloe Vera",
        image: "https://framerusercontent.com/images/j1aQ22jXGtkDF9TO3iPjIYEpWtc.png?width=640&height=960"
    },

    "Vit C Brightening": {
        type: "Brightening Serum",
        price: "$42.00",
        description: "A powerful antioxidant serum that visibly brightens skin, reduces dark spots, and promotes a smooth, radiant complexion.",
        ingredients: "Vitamin C, Ferulic Acid, Vitamin E, Hyaluronic Acid",
        image: "https://framerusercontent.com/images/npFsLQPkNTfpaXTXEbCoM4tuU0w.png?width=640&height=794"
    }
};

// خريطة تربط اسم المنتج في الكويز بالـ id بتاعه في data.js
const quizToProductId = {
    "Hydra Glow": "hydra-glow",
    "Revive Eye Cream": "revive-eye-cream",
    "Gentle Foaming": "gentle-foaming",
    "Overnight Repair": "overnight-repair",
    "Purifying Clay": "purifying-clay",
    "Vit C Brightening": "vitc-brightening"
};

let currentQuestion = 0;
let answers = [];

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

function showScreen(screen) {
    [welcomeScreen, quizScreen, resultScreen].forEach(item => {
        item.classList.add("hidden");
    });

    screen.classList.remove("hidden");
}

function startQuiz() {
    currentQuestion = 0;
    answers = [];
    showScreen(quizScreen);
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("question-title").textContent = question.title;

    document.getElementById("question-counter").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progress-bar").style.width = `${progress}%`;
    document.getElementById("progress-percentage").textContent =
        `${Math.round(progress)}%`;

    const questionArea = document.getElementById("question-area");

    questionArea.style.animation = "none";
    void questionArea.offsetWidth;
    questionArea.style.animation =
        "questionEnter .6s cubic-bezier(.16,1,.3,1)";

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    question.options.forEach(([text, product], index) => {
        const selected = answers[currentQuestion] === product;

        const box = document.createElement("div");

        box.className = `option-box ${selected ? "selected" : ""}`;

        box.style.animation =
            `questionEnter .5s ${index * .07}s both`;

        box.innerHTML = `
            <span class="option-text">${text}</span>
            <i class="option-icon ${
                selected ? "fa-solid" : "fa-regular"
            } fa-circle-check"></i>
        `;

        box.onclick = () => selectOption(product, box);

        container.appendChild(box);
    });

    const prev = document.getElementById("prev-btn");

    prev.style.visibility =
        currentQuestion === 0 ? "hidden" : "visible";

    prev.style.opacity =
        currentQuestion === 0 ? "0" : "1";

    document.getElementById("next-btn").disabled =
        !answers[currentQuestion];
}

function selectOption(product, element) {
    document.querySelectorAll(".option-box").forEach(box => {
        box.classList.remove("selected");

        box.querySelector(".option-icon").className =
            "option-icon fa-regular fa-circle-check";
    });

    element.classList.add("selected");

    element.querySelector(".option-icon").className =
        "option-icon fa-solid fa-circle-check";

    answers[currentQuestion] = product;

    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showResult() {
    const counts = {};

    answers.forEach(product => {
        counts[product] = (counts[product] || 0) + 1;
    });

    const bestMatch = Object.keys(counts).reduce((a, b) =>
        counts[a] >= counts[b] ? a : b
    );

    const product = productsData[bestMatch];

    document.getElementById("product-result-content").innerHTML = `
        <div class="product-card">

            <div class="product-image-wrapper">
                <img
                    src="${product.image}"
                    alt="${bestMatch}"
                    class="product-image"
                >
            </div>

            <div class="product-info">

                <div class="product-top">
                    <span class="product-type">
                        ${product.type}
                    </span>

                    <span class="product-price">
                        ${product.price}
                    </span>
                </div>

                <h3 class="product-name">
                    ${bestMatch}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="ingredients">
                    <strong>Active Ingredients:</strong>
                    ${product.ingredients}
                </div>

                <button
                    class="buy-button"
                    id="buy-btn"
                    onclick="buyProduct('${bestMatch}')"
                >
                    <i class="fa-solid fa-bag-shopping"></i>
                    Buy Now — ${product.price}
                </button>

            </div>
        </div>
    `;

    showScreen(resultScreen);
}

function buyProduct(product) {
    const productId = quizToProductId[product];

    if (productId && typeof addToCart === "function") {
        addToCart(productId);
    }

    const btn = document.getElementById("buy-btn");

    if (!btn) return;

    btn.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        Added to Cart
    `;

    btn.disabled = true;
    btn.classList.add("added");
}

function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    showScreen(welcomeScreen);
}