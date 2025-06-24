const slides = [
  "ไทยผลิตขยะพลาสติก >3.2 ล.ตัน/ปี",
  " ขยะจากเจ้าพระยา >4,000 ตัน/ปี",
  " ไมโครพลาสติกพบในปลาน้ำจืด",
  " ขยะอุดตันท่อ กทม. >2,000 ตัน/วัน",
  " สัตว์น้ำตายจากกินพลาสติก",
  " ขยะพลาสติกเสี่ยงถ่ายทอดเชื้อ",
  " ระบบแยกขยะไทยยังไม่ครอบคลุม",
  " PPP Plastics ลุยรีไซเคิลภาคชุมชน",
  " Interceptor เก็บขยะลอยแม่น้ำ",
  " ไมโครพลาสติกอาจเข้าในน้ำดื่ม",
  " ขยะในน้ำกระทบระบบนิเวศาไทย",
  " ขยะพลาสติกส่งผลต่อสุขภาพ",
  " เป้าหมาย: ช่วยสร้างจิตสำนึกใหม่"
];
let si = 0;
setInterval(() => {
  document.getElementById("slide1").textContent = slides[si % slides.length];
  document.getElementById("slide2").textContent = slides[(si + 1) % slides.length];
  si++;
}, 4000);

function reloadImage(){
  document.getElementById("esp32-image").src =
    "https://via.placeholder.com/600x400?text=ESP32+CAM&rand="+Date.now();
}

// Chart น้ำ + update ทุก 30 วิ
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, {
  type:"line",
  data:{
    labels:Array.from({length:7},(_,i)=>i*5+'s'),
    datasets:[
      { label:"pH", borderColor:"#60a5fa", tension:0.3, data:[] },
      { label:"Turbidity", borderColor:"#fbbf24", tension:0.3, data:[] }
    ]
  },
  options:{responsive:true}
});

function updateChart(){
  chart.data.datasets[0].data = Array.from({length:7},()=>6.8+Math.random()*0.4);
  chart.data.datasets[1].data = Array.from({length:7},()=>15+Math.random()*5);
  chart.update();
}
updateChart();
setInterval(updateChart,30000);

// ถังเต็มสุ่ม เปลี่ยนสีวงตามเงื่อนไข
const ctxC = document.getElementById("trash-circle").getContext("2d");
function updateTrash(){
  const p = Math.floor(Math.random()*101);
  let color;
  if(p===0) color="#fff";
  else if(p<=50) color="#22c55e";
  else if(p<100) color="#f59e0b";
  else color="#ef4444";

  new Chart(ctxC, {
    type:"doughnut",
    data:{datasets:[{data:[p,100-p], backgroundColor:[color,"#1e293b"]}]},
    options:{cutout:"75%",responsive:false,plugins:{legend:{display:false}}}
  });
  document.getElementById("trash-perc-text").textContent = `ถังเต็ม ${p}%`;
}
updateTrash();
setInterval(updateTrash,30000);

// Submit form
function submitForm(){
  const msg = document.getElementById("msg").value.trim();
  if(!msg){ alert("กรุณาใส่ข้อความก่อนส่ง"); return; }
  if(confirm("ยืนยันส่งข้อความ?")) {
    alert("ขอบคุณสำหรับข้อเสนอแนะ!");
    document.getElementById("msg").value="";
  }
}
