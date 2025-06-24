function reloadImage() {
    document.getElementById("esp32-image").src =
      "https://via.placeholder.com/600x400?text=ESP32+CAM&rand=" + Date.now();
  }
  
  // วงกลมถัง
  const ctxC = document.getElementById("trash-circle").getContext("2d");
  const percent = 37;
  new Chart(ctxC, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: ["#63b3ed", "#4a5568"],
        },
      ],
    },
    options: { cutout: "80%", responsive: false },
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
          borderColor: "#63b3ed",
          tension: 0.3,
        },
        {
          label: "Turbidity (NTU)",
          data: [15, 14, 16, 15, 17, 16, 14],
          borderColor: "#f6ad55",
          tension: 0.3,
        },
      ],
    },
    options: { responsive: true },
  });
  
  // Slide text
  const slides = [
    "ประเทศไทยผลิตขยะพลาสติกกว่า 3.2 ล้านตันต่อปี",
    "แม่น้ำเจ้าพระยามีขยะไหลลงทะเล 4,000 ตันต่อปี",
    "กรุงเทพฯ เก็บขยะจากท่อระบายน้ำ >2,000 ตัน/วัน",
    "ไมโครพลาสติกถูกพบในปลาน้ำจืดของไทย",
  ];
  let si = 0;
  setInterval(() => {
    document.getElementById("slide1").textContent = slides[si % slides.length];
    document.getElementById("slide2").textContent =
      slides[(si + 1) % slides.length];
    si += 1;
  }, 5000);
  