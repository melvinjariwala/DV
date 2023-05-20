var my_canvas=document.getElementById("my_canvas");
  var gctx=my_canvas.getContext("2d");

  var data = [['Pen',100],['Book',120],['Pencil',170],['Rubber',130],['sharpner',150]];

  var bar_width=50;
  var y_gap=30;  
  var bar_gap=100; 
  var x= 20; 

  y=my_canvas.height -y_gap ;
  my_canvas.width=data.length * (  bar_gap)  + x;  
  gctx.moveTo(x-5,y);
  gctx.lineTo(my_canvas.width,y); 
  gctx.stroke();

  for (i=0;i<data.length;i++){

  gctx.font = '18px serif'; 
  gctx.textAlign='left';
  gctx.textBaseline='top';
  gctx.fillStyle= '#008cf5';
  gctx.fillText(data[i][0], x,y+5); 

  gctx.beginPath();
  gctx.lineWidth=2;
  y1=y-data[i][1]; 
  x1 = x;
  gctx.font = '12px serif'; 
  gctx.fillStyle= '#000000';
  gctx.fillText(data[i][1], x1,y1-20); 
  gctx.fillStyle= '#f52369'; 
  gctx.fillRect(x1,y1,bar_width,data[i][1]);
  x=x+bar_gap
}