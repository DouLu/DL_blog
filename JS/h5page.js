/**
 * Created by Administrator on 2016/10/4.
 */
window.onload = all;

function all(){
    myCanvas();
    histogram();
    lineChart();
    radarChart();
    polarChart();
}
function myCanvas(){
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.save();
    //ctx.font = "15px";
    ctx.fillText("蓝色占比：8.4%",50,335);
    ctx.fillText("灰色占比：11.1%",50,375);
    ctx.fillText("黄色占比：27.8%",180,335);
    ctx.fillText("绿色占比：22.3%",180,375);
    ctx.fillText("粉色占比：30.4%",300,355);

    ctx.strokeText("饼状图",170,60);
    ctx.beginPath();
    ctx.sector(180,200,100,0,Math.PI/180*30);//注意角度写法Math.PI/180*230
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
    ctx.fillRect(30,320,20,20);

    ctx.fillStyle = "grey";
    ctx.fillRect(30,360,20,20);
    ctx.sector(180,200,100,Math.PI/180*30,Math.PI/180*70).fill();
    ctx.fillStyle = "gold";
    ctx.fillRect(160,320,20,20);
    ctx.sector(180,200,100,Math.PI/180*70,Math.PI/180*170).fill();

    ctx.fillStyle = "palegreen";
    ctx.fillRect(160,360,20,20);
    ctx.sector(180,200,100,Math.PI/180*170,Math.PI/180*250).fill();

    ctx.fillStyle = "pink";
    ctx.fillRect(280,340,20,20);
    ctx.sector(180,200,100,Math.PI/180*250,Math.PI/180*360).fill();

}
function histogram(){
    var myCanvas = document.getElementById("histogram");
    var myContext = myCanvas.getContext("2d");
    myContext.beginPath();
    myContext.save();
    myContext.strokeText("柱状图",180,60);
    myContext.strokeRect(85,100,250,200);
    myContext.fillStyle = "black";
    myContext.fillText("2010",100,310);
    myContext.fillText("2011",140,310);
    myContext.fillText("2012",180,310);
    myContext.fillText("2013",220,310);
    myContext.fillText("2014",260,310);
    myContext.fillText("2015年",300,310);
    myContext.fillText("0%",60,300);
    myContext.fillText("20%",60,264);
    myContext.fillText("40%",60,228);
    myContext.fillText("60%",60,192);
    myContext.fillText("80%",60,156);
    myContext.fillText("100%",60,120);
    myContext.fillStyle = "pink";
    myContext.fillRect(100,140,20,150);
    myContext.fillStyle = "grey";
    myContext.fillRect(140,190,20,100);
    myContext.fillStyle = "pink";
    myContext.fillRect(180,170,20,120);
    myContext.fillStyle = "grey";
    myContext.fillRect(220,190,20,100);
    myContext.fillStyle = "pink";
    myContext.fillRect(260,130,20,160);
    myContext.fillStyle = "grey";
    myContext.fillRect(300,150,20,140);
}
function lineChart(){
    var lineChartData = {
        labels : ["09/12","09/13","09/14","09/15","09/16","09/17","09/18"], //X轴 坐标
        datasets : [
            {
                fillColor : "transparent", // 背景色
                strokeColor : "#ef7c1f", // 线
                pointColor : "#ef7c1f", // 点
                pointStrokeColor : "#fff", // 点的包围圈点外部的圈的颜色
                data : [120,140,110,130,150,170,160] // Y轴坐标
            },
            {
                fillColor : "transparent",
                strokeColor : "#3dc448",
                pointColor : "#3dc448",
                pointStrokeColor : "#fff",
                data : [80,90,80,100,110,130,100]
            }
        ]

    };
    var defaults = {
        //Boolean - If we show the scale above the chart data
        scaleOverlay : false,
        //Boolean - If we want to override with a hard coded scale
        scaleOverride : false,
        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps : null,
        //Number - The value jump in the hard coded scale
        scaleStepWidth : 20,
        // Y 轴的起始值
        scaleStartValue : null,
        // Y/X轴的颜色
        scaleLineColor : "rgba(0,0,0,.1)",
        // X,Y轴的宽度
        scaleLineWidth : 1,
        // 刻度是否显示标签, 即Y轴上是否显示文字
        scaleShowLabels : true,
        // Y轴上的刻度,即文字
        scaleLabel : "<%=value%>",
        // 字体
        scaleFontFamily : "'Arial'",
        // 文字大小
        scaleFontSize : 12,
        // 文字样式
        scaleFontStyle : "normal",
        // 文字颜色
        scaleFontColor : "#666",
        // 是否显示网格
        scaleShowGridLines : false,
        // 网格颜色
        scaleGridLineColor : "rgba(0,0,0,.05)",
        // 网格宽度
        scaleGridLineWidth : 2,
        // 是否使用贝塞尔曲线? 即:线条是否弯曲
        bezierCurve : false,
        // 是否显示点数
        pointDot : true,
        // 圆点的大小
        pointDotRadius : 8,
        // 圆点的笔触宽度, 即:圆点外层白色大小
        pointDotStrokeWidth : 2,
        // 数据集行程
        datasetStroke : true,
        // 线条的宽度, 即:数据集
        datasetStrokeWidth : 2,
        // 是否填充数据集
        datasetFill : false,
        // 是否执行动画
        animation : true,
        // 动画的时间
        animationSteps : 60,
        // 动画的特效
        animationEasing : "easeOutQuart",
        // 动画完成时的执行函数
        onAnimationComplete : null
    };
    new Chart(document.getElementById("lineChart").getContext("2d")).Line(lineChartData, defaults);
}
function radarChart(){
    var radarChart = document.getElementById("radarChart").getContext("2d");
    var data = {
        labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]
    };
    new Chart(radarChart).Radar(data);
}
function polarChart(){
    var polarChart = document.getElementById("polarChart").getContext("2d");
    var data = [
        {
            value : 30,
            color: "#D97041"
        },
        {
            value : 90,
            color: "#C7604C"
        },
        {
            value : 24,
            color: "#21323D"
        },
        {
            value : 58,
            color: "#9D9B7F"
        },
        {
            value : 82,
            color: "#7D4F6D"
        },
        {
            value : 8,
            color: "#584A5E"
        }
    ];
    new Chart(polarChart).PolarArea(data);
}
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
    this.save();// 初始保存
    this.translate(x, y);// 位移到目标点
    this.beginPath();
    this.arc(0,0,radius,sDeg, eDeg);// 画出圆弧
    this.save();// 再次保存以备旋转
    this.rotate(eDeg);// 旋转至起始角度
    this.moveTo(radius,0);// 移动到终点，准备连接终点与圆心
    this.lineTo(0,0);// 连接到圆心
    this.restore();// 还原
    this.rotate(sDeg);// 旋转至起点角度
    this.lineTo(radius,0);// 从圆心连接到起点
    this.closePath();
    this.restore();// 还原到最初保存的状态
    return this;
};
