function doFirst() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.beginPath();

    for(let i = 0; i < 50; i++){
        interval = i * 25;

        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        // context.fillText(interval, 0, interval);

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        // context.fillText(interval, interval, 10);
    }

    context.strokeStyle='rgba(0,0,0,0.3)';
    // context.stroke();
    // 格線結束
    
    // 切格座標成四分之一
    context.beginPath();
    
    context.moveTo(0, canvas.height/2);
    context.lineTo(canvas.width, canvas.height/2);
    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    
    context.strokeStyle='rgba(0,0,0,0.7)';
    // context.stroke();

    // 喜
    // 臉邊框
    context.beginPath();
    let gradient = context.createRadialGradient(200, 225, 110, 200, 225, 125);
    gradient.addColorStop(0, '#FED800');
    gradient.addColorStop(.9, "#F5A033");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.lineWidth=1.5;
    context.strokeStyle='#CEAD85'
    context.arc(200, 225, 125, 0, 2*Math.PI);
    context.fill();
    context.stroke();
    

    // 臉漸層
    context.beginPath();
    let face_1 = context.createLinearGradient(200, 112, 200, 328);
    face_1.addColorStop(0, "#FFF4DA");
    face_1.addColorStop(0.7, "#FDCC00");
    face_1.addColorStop(0.85, "#FEDD00");
    face_1.addColorStop(1, "#FEE000");
    context.fillStyle = face_1;
    context.arc(200, 225, 110, 0, 2*Math.PI);
    context.fill();


    // 左腮紅
    context.beginPath();
    let gradient_1 = context.createRadialGradient(128, 248, 0, 125, 248, 50);
    gradient_1.addColorStop(0, '#FB9400');;
    gradient_1.addColorStop(.55, '#FDCC00');
    context.fillStyle = gradient_1;   
    context.arc(128, 248, 30, 0, 2*Math.PI);      
    context.fill();

    // 右腮紅
    context.beginPath();
    let gradient_2 = context.createRadialGradient(271, 248, 0, 272, 248, 50);
    gradient_2.addColorStop(0, '#FB9400');;
    gradient_2.addColorStop(.55, '#FDCC00');
    context.fillStyle = gradient_2;   
    context.arc(271, 248, 30, 0, 2*Math.PI);      
    context.fill();
    

    // 左眉
    context.beginPath();
    context.strokeStyle='#845E00';
    context.lineCap='round';  
    context.lineWidth=6.5;
    context.moveTo(116, 183);
    context.quadraticCurveTo(145, 172, 170, 175);   
    context.stroke();
    
    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';  
    context.lineWidth=6.5;
    context.moveTo(116, 183);
    context.quadraticCurveTo(145, 159, 170, 175);
    context.stroke();
    
    // 右眉
    context.beginPath();
    context.strokeStyle='#845E00';
    context.lineCap='round';  
    context.lineWidth=6.5;
    context.moveTo(227, 175);
    context.quadraticCurveTo(251, 172, 281, 183);   
    context.stroke();

    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';  
    context.lineWidth=6.5;
    context.moveTo(227, 175);
    context.quadraticCurveTo(251, 159, 281, 183);
    context.stroke();
    

    // 眉毛底下白線
    context.beginPath();
    context.strokeStyle='#FBEE96';
    context.lineCap='round';  
    context.lineWidth = 3;
    context.moveTo(116, 189);
    context.quadraticCurveTo(150, 172, 170, 181); 
    context.moveTo(226, 181);
    context.quadraticCurveTo(251, 172, 282, 189);
    context.stroke();
         
        
    // 左眼
    context.beginPath();
    context.strokeStyle='#6F3E00';
    context.lineCap='round';
    context.lineWidth=15;
    context.moveTo(140, 225);
    context.quadraticCurveTo(160, 215, 175, 221);
    
    // 右眼
    context.moveTo(257, 225);
    context.quadraticCurveTo(238, 215, 222, 221);
    context.stroke();
    

    // 眼睛底下白線
    context.beginPath();
    context.strokeStyle='#F6E581';
    context.lineCap='round';  
    context.lineWidth = 3;
    context.moveTo(140, 232);
    context.quadraticCurveTo(160, 222, 175, 228);
    context.moveTo(257, 232);
    context.quadraticCurveTo(238, 222, 222, 228);
    context.stroke();

    // 嘴巴
    context.beginPath();
    context.lineCap='round';
    context.lineWidth=6;
    context.strokeStyle='#986300';
    context.moveTo(166, 282);
    context.quadraticCurveTo(200, 310, 232, 282);
    context.stroke();
    
    context.beginPath();
    context.lineCap='round';
    context.lineWidth=6;
    context.strokeStyle='#845E00';
    context.moveTo(166, 282);
    context.quadraticCurveTo(200, 299, 232, 282);
    context.moveTo(166, 282);
    context.quadraticCurveTo(200, 322, 232, 282); 
    context.stroke();

    // 嘴巴上下白線
    context.beginPath();
    context.strokeStyle='#F6E581';
    context.lineCap='round';  
    context.lineWidth = 3;
    context.moveTo(166, 278);
    context.quadraticCurveTo(200, 295, 232, 278);
    context.moveTo(166, 290);
    context.quadraticCurveTo(200, 322, 232, 290); 
    context.stroke();
    

    // 怒
    // 臉邊框
    context.beginPath();
    let gradient_angry = context.createRadialGradient(550, 225, 110, 550, 225, 125);
    gradient_angry.addColorStop(0, '#F25B16');
    gradient_angry.addColorStop(.6, "#E74B13");
    gradient_angry.addColorStop(1, "#C43109");
    context.fillStyle = gradient_angry;
    context.lineWidth=1;
    context.strokeStyle='#BA2C07';
    context.arc(550, 225, 125, 0, 2*Math.PI);
    context.fill();
    context.stroke();

    // 全臉漸層
    context.beginPath();
    let face_2 = context.createLinearGradient(550, 112, 550, 328);
    face_2.addColorStop(0, "#FAD748");
    face_2.addColorStop(0.15, "#FAD748");
    face_2.addColorStop(0.4, "#F6AC1C");
    face_2.addColorStop(0.75, "#E64911");   
    face_2.addColorStop(0.85, "#E64911");
    face_2.addColorStop(1, "#F25B16");
    context.fillStyle = face_2;
    context.arc(550, 225, 110, 0, 2*Math.PI);
    context.fill();

        
    // 左眉
    let left_eyebrow = context.createLinearGradient(487, 204, 532, 230);
    left_eyebrow.addColorStop(0, "#4A0E04");
    left_eyebrow.addColorStop(0.25, "#6F1D0A");
    left_eyebrow.addColorStop(0.65, "#5D1708");
    left_eyebrow.addColorStop(0.8, "#551407");
    left_eyebrow.addColorStop(1, "#4A0E04"); 

    context.beginPath();
    context.strokeStyle='#5F1507';
    context.fillStyle= left_eyebrow;
    context.lineCap='round';  
    context.lineWidth=3;
    context.moveTo(488, 205);
    context.quadraticCurveTo(510 , 202, 531, 228);
    context.quadraticCurveTo(535, 235, 526, 229);
    context.quadraticCurveTo(510 , 210, 488, 211);
    context.quadraticCurveTo(480, 208, 488, 205);   
    context.closePath();
    context.fill();
    context.stroke();

    // 右眉
    let right_eyebrow = context.createLinearGradient(570, 230, 612, 204);
    right_eyebrow.addColorStop(0, "#4A0E04");
    right_eyebrow.addColorStop(0.25, "#6F1D0A");
    right_eyebrow.addColorStop(0.65, "#5D1708");
    right_eyebrow.addColorStop(0.8, "#551407");
    right_eyebrow.addColorStop(1, "#4A0E04");

    context.beginPath();
    context.strokeStyle='#5F1507';
    context.fillStyle= right_eyebrow;
    context.lineCap='round';  
    context.lineWidth=3;
    context.moveTo(612, 205);
    context.quadraticCurveTo(592, 201, 570, 227);
    context.quadraticCurveTo(564, 236, 574, 228);
    context.quadraticCurveTo(592 ,209, 612, 211);
    context.quadraticCurveTo(619, 208, 612, 205);   
    context.fill();
    context.stroke();

    // 左眼
    let left_eye = context.createLinearGradient(520, 230, 520, 260);
    left_eye.addColorStop(0, "#4A0E04");
    left_eye.addColorStop(0.2, "#5F1507");
    left_eye.addColorStop(0.5, "#78200C");
    left_eye.addColorStop(0.8, "#5F1507");
    left_eye.addColorStop(1, "#4A0E04");    

    context.beginPath();
    context.strokeStyle='#5F1507';
    context.lineCap='round';  
    context.fillStyle=left_eye;
    context.lineWidth=2;
    context.moveTo(504, 245);
    context.bezierCurveTo(506, 219, 526, 219, 527, 245);
    context.bezierCurveTo(526, 269, 506, 269, 504, 245);
    context.closePath();   
    context.fill();  
    context.stroke();
 
    // 右眼
    context.beginPath();
    context.strokeStyle='#5F1507';
    context.lineCap='round';  
    context.fillStyle=left_eye;
    context.lineWidth=2;
    context.moveTo(573, 243);
    context.bezierCurveTo(574, 219, 594, 219, 595, 245);
    context.bezierCurveTo(594, 269, 574, 269, 573, 245);   
    context.fill();  
    context.stroke();

    // 嘴巴
    let mouth_angry = context.createLinearGradient(550, 282, 550, 303);
    mouth_angry.addColorStop(0, "#601607");
    mouth_angry.addColorStop(0.35, "#751E0B");
    mouth_angry.addColorStop(0.45, "#741F0B");
    mouth_angry.addColorStop(0.5, "#6D1C0A");
    mouth_angry.addColorStop(1, "#501307");    

    context.beginPath();
    context.strokeStyle='#5F1507';
    context.fillStyle= mouth_angry;
    context.lineWidth=1;    
    context.moveTo(516, 306);
    context.quadraticCurveTo(550, 253, 584, 306);    
    context.quadraticCurveTo(550, 286, 516, 306);
    context.closePath();
    context.fill();
    context.stroke();
    

    // 哀
    // 臉邊框
    context.beginPath();
    let gradient_sad = context.createRadialGradient(200, 578, 110, 200, 578, 125);
    gradient_sad.addColorStop(0, '#FED800');
    gradient_sad.addColorStop(.9, "#F5A033");
    gradient_sad.addColorStop(1, "white");
    context.fillStyle = gradient_sad;
    context.lineWidth=1.5;
    context.strokeStyle='#CEAD85'
    context.arc(200, 578, 125, 0, 2*Math.PI);
    context.fill();
    context.stroke();
    

    // 臉漸層
    context.beginPath();
    let face_3 = context.createLinearGradient(200, 453, 200, 703);
    face_3.addColorStop(0, "#FFF4DA");
    face_3.addColorStop(0.7, "#FDCC00");
    face_3.addColorStop(0.85, "#FEDD00");
    face_3.addColorStop(1, "#FEE000");
    context.fillStyle = face_3;
    context.arc(200, 578, 110, 0, 2*Math.PI);
    context.fill();
         
    // 左眉
    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';  
    context.lineWidth=5;
    context.moveTo(106, 559);
    context.bezierCurveTo(117, 543, 137, 528, 145, 525); 
    context.stroke();
    
    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';  
    context.lineWidth=5.5;
    context.moveTo(106, 559);
    context.bezierCurveTo(115, 542, 133, 526, 145, 525); 
    context.stroke();

    context.beginPath();
    context.strokeStyle='#845E00';
    context.lineCap='round'; 
    context.lineWidth=4.5;
    context.moveTo(105, 561);
    context.bezierCurveTo(103, 548, 129, 517, 148, 524);
    context.stroke();

    // 左眉底下白線
    context.beginPath();
    context.strokeStyle='#F6E581';
    context.lineCap='round';  
    context.lineWidth = 3;
    context.moveTo(109, 562);
    context.bezierCurveTo(117, 547, 137, 530, 150, 527); 
    context.stroke();


    // 右眉
    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';  
    context.lineWidth=5;
    context.moveTo(291, 558);
    context.bezierCurveTo(293, 554, 262, 525, 258, 525);  
    context.stroke();
    
    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';  
    context.lineWidth=5.5;
    context.moveTo(293, 559);
    context.bezierCurveTo(294, 549, 259, 522, 258, 525); 
    context.stroke();

    context.beginPath();
    context.strokeStyle='#845E00';
    context.lineCap='round'; 
    context.lineWidth=4.5;
    context.moveTo(296, 561);
    context.bezierCurveTo(295, 542, 265, 518, 255, 524);
    context.stroke();

    // 右眉底下白線
    context.beginPath();
    context.strokeStyle='#F6E581';
    context.lineCap='round';  
    context.lineWidth = 3;
    context.moveTo(292, 562);
    context.bezierCurveTo(293, 559, 263, 529, 256, 528); 
    context.stroke();

    // 左眼
    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';
    context.lineWidth=5;
    context.moveTo(122, 567);
    context.quadraticCurveTo(153, 559, 179, 566);
    context.stroke();

    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';
    context.lineWidth=5;
    context.moveTo(122, 567);
    context.quadraticCurveTo(154, 552, 180, 565);
    context.stroke();

    context.beginPath();
    context.strokeStyle='#6F3E00';
    context.lineCap='round';
    context.lineWidth=7;
    context.moveTo(123, 565);
    context.quadraticCurveTo(154, 542, 181, 565);
    context.stroke();

    // 左眼底下白線
    context.beginPath();
    context.strokeStyle='#F6E581';
    context.lineCap='round';
    context.lineWidth=3;
    context.moveTo(123, 571);
    context.quadraticCurveTo(153, 559, 179, 570);
    context.stroke();

    // 右眼
    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';
    context.lineWidth=7;
    context.moveTo(219, 567);
    context.quadraticCurveTo(250, 559, 276, 565);
    context.stroke();

    context.beginPath();
    context.strokeStyle='#754600';
    context.lineCap='round';
    context.lineWidth=7;
    context.moveTo(219, 567);
    context.quadraticCurveTo(251, 552, 277, 565);
    context.stroke();

    context.beginPath();
    context.strokeStyle='#6F3E00';
    context.lineCap='round';
    context.lineWidth=7;
    context.moveTo(220, 565);
    context.quadraticCurveTo(251, 542, 278, 565);
    context.stroke();

    // 右眼底下的白線
    context.beginPath();
    context.strokeStyle='#F6E581';
    context.lineCap='round';
    context.lineWidth=3;
    context.moveTo(220, 572);
    context.quadraticCurveTo(250, 560, 276, 570);
    context.stroke();

    // 左邊眼淚
    context.beginPath();
    context.strokeStyle='#557471';   
    context.lineWidth=3;
    context.moveTo(124, 572); 
    context.lineTo(124, 674.5);    
    context.stroke();

    context.beginPath();
    context.strokeStyle='#557471'; 
    context.moveTo(157, 566); 
    context.lineTo(157, 693.5);
    context.stroke();
    
    let tear = context.createLinearGradient(123, 600, 157, 600);
    tear.addColorStop(0,'#557471');
    tear.addColorStop(0.2,'#66A4D4');
    tear.addColorStop(0.4,'#88C2F1'); 
    tear.addColorStop(0.6,'#88C2F1'); 
    tear.addColorStop(0.8,'#66A4D4');
    tear.addColorStop(1,'#557471');

    context.beginPath();
    context.strokeStyle='#557471';
    context.fillStyle=tear;
    context.moveTo(123, 570);
    context.quadraticCurveTo(147, 562, 157, 565);
    context.lineTo(157, 694);
    context.quadraticCurveTo(156, 699, 123, 677);
    context.closePath();
    context.fill();

    context.beginPath();
    context.lineWidth=3;
    context.strokeStyle='#557471'; 
    context.moveTo(156, 693); 
    context.quadraticCurveTo(155, 697, 125, 677);
    context.stroke();
    
    // 右邊眼淚
    context.beginPath();
    context.strokeStyle='#557471';   
    context.lineWidth=3;
    context.moveTo(243, 567); 
    context.lineTo(243, 694);    
    context.stroke();

    context.beginPath();
    context.strokeStyle='#557471'; 
    context.moveTo(277, 571); 
    context.lineTo(277, 674.5);
    context.stroke();

    let tear2 = context.createLinearGradient(243, 600, 277, 600);
    tear2.addColorStop(0,'#557471');
    tear2.addColorStop(0.2,'#66A4D4');
    tear2.addColorStop(0.4,'#88C2F1'); 
    tear2.addColorStop(0.6,'#88C2F1'); 
    tear2.addColorStop(0.8,'#66A4D4');
    tear2.addColorStop(1,'#557471');

    context.beginPath();
    context.fillStyle=tear2;
    context.moveTo(243, 566);
    context.quadraticCurveTo(262, 562, 277, 570);
    context.lineTo(277, 677);
    context.quadraticCurveTo(250, 695, 243, 695);
    context.closePath();
    context.fill();

    context.beginPath();
    context.lineWidth=3;
    context.strokeStyle='#557471'; 
    context.moveTo(276, 676); 
    context.quadraticCurveTo(255, 693, 244, 694);
    context.stroke();

    // 嘴巴
    let mouth = context.createLinearGradient(225, 591, 225, 675);
    mouth.addColorStop(0,"#5E3600");
    mouth.addColorStop(0.4,"#64441F");
    mouth.addColorStop(0.65,"#D98600");
    mouth.addColorStop(0.85,"#CC8500");
    mouth.addColorStop(1,"#BC9000");

    let mouth_line = context.createLinearGradient(222, 590, 222, 675);
    mouth_line.addColorStop(0,"#5E3600");
    mouth.addColorStop(0.45,"#64441F");
    mouth_line.addColorStop(0.7,"#A16005");
    mouth_line.addColorStop(1,"#B28700");
    
    context.beginPath();
    context.lineWidth=3;
    context.fillStyle=mouth;
    context.strokeStyle=mouth_line;
    
    context.moveTo(178, 620);
    context.quadraticCurveTo(200, 594, 222, 620);
    context.quadraticCurveTo(229, 639, 222, 658);
    context.quadraticCurveTo(200, 683, 178, 658);
    context.quadraticCurveTo(171, 639, 178, 620);    
    context.closePath();
    context.fill();
    context.stroke();

    // 牙齒
    let teeth = context.createLinearGradient(179, 625, 220, 625); 
    teeth.addColorStop(0, '#C4BBB7');
    teeth.addColorStop(0.25, '#EFECF5');
    teeth.addColorStop(0.5, "#FDFCFF");
    teeth.addColorStop(0.75, '#EFECF5');
    teeth.addColorStop(1, "#C4BBB7");

    context.beginPath();
    context.lineWidth=1;
    context.fillStyle= teeth;
  
    context.moveTo(179, 622);
    context.quadraticCurveTo(200, 596, 220, 622);
    context.quadraticCurveTo(223, 626, 220, 630);
    context.lineTo(179, 630);
    context.quadraticCurveTo(176, 626, 179, 622);
    context.closePath();
    context.fill();
    context.stroke();

    
    // 樂
    // 臉邊框
    context.beginPath();
    let gradient_happy = context.createRadialGradient(550, 575, 110, 550, 575, 125);
    gradient_happy.addColorStop(0, '#FED800');
    gradient_happy.addColorStop(.9, "#F5A033");
    gradient_happy.addColorStop(1, "white");
    context.fillStyle = gradient_happy;
    context.lineWidth=1.5;
    context.strokeStyle='#CEAD85'
    context.arc(550, 575, 125, 0, 2*Math.PI);
    context.fill();
    context.stroke();
    

    // // 臉漸層
    context.beginPath();
    let face_4 = context.createLinearGradient(550, 450, 550, 700);
    face_4.addColorStop(0, "#FFF4DA");
    face_4.addColorStop(0.7, "#FDCC00");
    face_4.addColorStop(0.85, "#FEDD00");
    face_4.addColorStop(1, "#FEE000");
    context.fillStyle = face_4;
    context.arc(550, 575, 110, 0, 2*Math.PI);
    context.fill();
    
    // 左眼
    context.beginPath();
    context.strokeStyle='#845E00';
    context.lineWidth=4;
    context.fillStyle='#A15D03';
    context.moveTo(499, 577);
    context.quadraticCurveTo(499, 540, 516, 536);   
    context.quadraticCurveTo(534, 540, 533, 577);   
    context.quadraticCurveTo(531, 563, 516, 559);   
    context.quadraticCurveTo(502, 563, 499, 575); 
    context.closePath();
    context.fill();            
    context.stroke();

    // 左眼底下白線
    context.beginPath();
    context.strokeStyle='#F6E581';
    context.lineCap='round';  
    context.lineWidth = 3;
    context.moveTo(501, 576);
    context.quadraticCurveTo(516, 549, 531, 576);   
    context.stroke();
    

    // 右眼
    context.beginPath();
    context.strokeStyle='#845E00';
    context.lineWidth=4;
    context.fillStyle='#A15D03';
    context.moveTo(567, 577);
    context.quadraticCurveTo(567, 540, 584, 536);   
    context.quadraticCurveTo(602, 540, 601, 577);   
    context.quadraticCurveTo(599, 563, 584, 559);   
    context.quadraticCurveTo(570, 563, 567, 575); 
    context.closePath();
    context.fill();            
    context.stroke();

    // 右眼底下白線
    context.beginPath();
    context.strokeStyle='#F6E581';
    context.lineCap='round';  
    context.lineWidth = 3;
    context.moveTo(569, 576);
    context.quadraticCurveTo(584, 549, 599, 576);   
    context.stroke();

    // 嘴巴外框
    context.beginPath();
    let mouth_2 = context.createLinearGradient(550, 600, 550, 670);
    mouth_2.addColorStop(0, "#845E00");
    mouth_2.addColorStop(0.3, "#745D38");   
    mouth_2.addColorStop(0.5, "#DC8400");
    mouth_2.addColorStop(0.6, "#CA7601");
    mouth_2.addColorStop(0.85, "#DD8B03");
    mouth_2.addColorStop(1, "#C39801");    
    context.lineWidth=5.7;
    context.arc(549, 590, 79, 0.03*Math.PI, 0.97*Math.PI);
    context.strokeStyle=mouth_2;
    context.stroke();
    
    // 嘴巴裡面
    context.beginPath();
    context.lineWidth=3;
    let mouth_1 = context.createLinearGradient(550, 625, 550, 850);
    mouth_1.addColorStop(0, "#745D38");
    mouth_1.addColorStop(0.1, "#DC8400");
    mouth_1.addColorStop(0.9, "#CA7601");
    mouth_1.addColorStop(0.95, "#DD8B03");
    mouth_1.addColorStop(1, "#C88600");

    context.moveTo(480, 622);
    context.quadraticCurveTo(550, 648, 618, 622);
    context.quadraticCurveTo(602, 660, 550, 666);    
    context.quadraticCurveTo(500, 662, 480, 622);
    context.closePath();    
    context.fillStyle = mouth_1;
    context.strokeStyle = mouth_1;
    context.fill();
    context.stroke();

    // 嘴巴上緣那條線
    context.beginPath();
    context.strokeStyle = "#845E00";
    context.lineWidth=8;
    context.moveTo(472, 597);
    context.quadraticCurveTo(550, 618, 626, 597);
    context.stroke();

    // 牙齒
    context.beginPath();
    context.lineWidth=1;
    let gradient_teeth = context.createLinearGradient(474, 601, 624, 620); 
    gradient_teeth.addColorStop(0, '#C9C6CB');
    gradient_teeth.addColorStop(0.25, '#F0ECF5');
    gradient_teeth.addColorStop(0.5, "#FDFCFF");
    gradient_teeth.addColorStop(0.75, '#F0ECF5');
    gradient_teeth.addColorStop(1, "#C9C6CB");
    context.moveTo(474, 601.5);
    context.quadraticCurveTo(550, 621, 624, 601.5);
    context.quadraticCurveTo(620, 621, 618, 620);
    context.quadraticCurveTo(550, 646, 480, 620);
    context.quadraticCurveTo(478, 621, 474, 601.5);    
    context.stroke()
    context.fillStyle = gradient_teeth;
    context.fill();
}
window.addEventListener("load", doFirst);
