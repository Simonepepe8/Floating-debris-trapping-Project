function reloadImage() {
  const img = document.getElementById("esp32-image");
  img.src = "https://via.placeholder.com/600x400?text=ESP32+CAM&rand=" + Date.now();
}

// วงกลมแสดงสถานะถัง
const ctxC = document.getElementById("trash-circle").getContext("2d");
const percent = 37;
new Chart(ctxC, {
  type: "doughnut",
  data: {
    datasets: [{
      data: [percent, 100 - percent],
      backgroundColor: ["#38bdf8", "#1e293b"]
    }]
  },
  options: {
    cutout: "75%",
    plugins: { legend: { display: false } }
  }
});
document.getElementById("trash-perc-text").textContent = `ถังเต็ม ${percent}%`;

// กราฟคุณภาพน้ำ
const ctxL = document.getElementById("chart").getContext("2d");
new Chart(ctxL, {
  type: "line",
  data: {
    labels: ["0", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "pH",
        data: [6.8, 7.0, 6.9, 7.1, 6.8, 7.0, 6.9],
        borderColor: "#60a5fa",
        tension: 0.3
      },
      {
        label: "Turbidity (NTU)",
        data: [15, 14, 16, 15, 17, 16, 14],
        borderColor: "#fbbf24",
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true
  }
});

// Slide สถิติ
const slides = [
  "ประเทศไทยผลิตขยะพลาสติก > 3.2 ล้านตันต่อปี",
  "ขยะลอยลงทะเลจากเจ้าพระยา > 4,000 ตัน/ปี",
  "ไมโครพลาสติกพบในปลาน้ำจืดของไทย",
  "กทม. เก็บขยะจากท่อ > 2,000 ตัน/วัน"
];
let si = 0;
setInterval(() => {
  document.getElementById("slide1").textContent = slides[si % slides.length];
  document.getElementById("slide2").textContent = slides[(si + 1) % slides.length];
  si += 1;
}, 4000);
