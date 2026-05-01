/* =========================
   ページロードフェードイン
========================= */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* =========================
   スクロール時セクション表示
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("showSection");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(".infoSection").forEach(sec => {
    observer.observe(sec);
});

/* =========================
   背景グロー移動
========================= */
const glow = document.getElementById("bgGlow");
let angle = 0;

setInterval(() => {
    angle += 0.003;
    const x = Math.sin(angle) * 40;
    const y = Math.cos(angle) * 30;

    if(glow){
        glow.style.transform = `translate(${x}px, ${y}px)`;
    }
},30);

/* =========================
   ティッカー文字を定期更新
========================= */
const ticker = document.getElementById("tickerText");

const tickerMessages = [
    "ATOS放送シュミレーター Release 1.0.1 公開中　｜　JR東日本型自動放送編集ソフト　｜　Desktop Edition Official Distribution Page",
    "接近放送・発車放送・案内放送を高精度再現　｜　音声パーツ編集・WAV出力対応",
    "Hanwa Line Committee Software Project　｜　Official Release Web Site"
];

let tickerIndex = 0;

if(ticker){
    setInterval(() => {
        tickerIndex++;
        if(tickerIndex >= tickerMessages.length) tickerIndex = 0;
        ticker.textContent = tickerMessages[tickerIndex];
    },22000);
}

/* =========================
   スクリーンショット軽い浮遊
========================= */
document.querySelectorAll(".screenCard").forEach((card, i) => {
    let pos = 0;

    setInterval(() => {
        pos += 0.02 + (i * 0.005);
        const y = Math.sin(pos) * 4;
        card.style.transform = `translateY(${y}px)`;
    },30);
});