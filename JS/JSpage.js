/**
 * Created by Administrator on 2016/10/4.
 */
document.onmousemove = moveHandler;

function moveHandler(event){
    if(!event){
        event = window.event;
    }
    animateEye(event.clientX,event.clientY);
}
function animateEye(x,y){
    var leftEye = document.getElementById("leftEye");
    var rightEye = document.getElementById("rightEye");
    var leftEyeBall = document.getElementById("leftEyeBall").style;
    var rightEyeBall = document.getElementById("rightEyeBall").style;

    if(y<360){
        leftEyeBall.left = newEyeBallPosLL(x,leftEye.offsetLeft);
        leftEyeBall.top = newEyeBallPosLT(y,leftEye.offsetTop);
        rightEyeBall.left = newEyeBallPosRL(x,rightEye.offsetLeft);
        rightEyeBall.top = newEyeBallPosRT(y,rightEye.offsetTop);
    }else if(y<380){
        leftEyeBall.left = minL1(x,leftEye.offsetLeft);
        rightEyeBall.left = minR1(x,rightEye.offsetLeft);
        leftEyeBall.top = newEyeBallPosLT(y,leftEye.offsetTop);
        rightEyeBall.top = newEyeBallPosRT(y,rightEye.offsetTop);
    }else{
        leftEyeBall.left = minL2(x,leftEye.offsetLeft);
        rightEyeBall.left = minR2(x,rightEye.offsetLeft);
        leftEyeBall.top = newEyeBallPosLT(y,leftEye.offsetTop);
        rightEyeBall.top = newEyeBallPosRT(y,rightEye.offsetTop);
    }

}
function newEyeBallPosLL(currPos,eyePos){
    return Math.min(Math.max(currPos,eyePos+30),eyePos+130)+"px";
}
function newEyeBallPosLT(currPos,eyePos){
    return Math.min(Math.max(currPos,eyePos+30),eyePos+280)+"px";
}
function newEyeBallPosRL(currPos,eyePos){
    return Math.min(Math.max(currPos-650,eyePos-650),eyePos-550)+"px";
}
function newEyeBallPosRT(currPos,eyePos){
    return Math.min(Math.max(currPos-143,eyePos+30-143),eyePos+140)+"px";
}
function minL1(currPos,eyePos){
    return Math.min(Math.max(currPos,eyePos+30),eyePos+100)+"px";
}
function minR1(currPos,eyePos){
    return Math.min(Math.max(currPos-650,eyePos-620),eyePos-550)+"px";
}
function minL2(currPos,eyePos){
    return Math.min(Math.max(currPos,eyePos+30),eyePos+80)+"px";
}
function minR2(currPos,eyePos){
    return Math.min(Math.max(currPos-650,eyePos-600),eyePos-550)+"px";
}

var myDrawCanvas = document.getElementById("myDrawCanvas");
var myContext = myDrawCanvas.getContext("2d");

document.getElementById("clear").onclick = function(){
    myContext.clearRect(0,0,800,500);
};

//线宽设置
function setLineWidth(){
    var lineWidth = document.getElementById("number").value;
    var n = parseInt(lineWidth);
    switch(n){
        case 1:myContext.lineWidth=1; break;
        case 2:myContext.lineWidth=2; break;
        case 3:myContext.lineWidth=3; break;
        case 4:myContext.lineWidth=4; break;
        case 5:myContext.lineWidth=5; break;
        case 6:myContext.lineWidth=6; break;
        case 7:myContext.lineWidth=7; break;
        case 8:myContext.lineWidth=8; break;
        case 9:myContext.lineWidth=9; break;
        case 10:myContext.lineWidth=10; break;

        default:myContext.lineWidth=2;
    }
}
//颜色
function setColor(){
    var color = document.getElementById("color").value;
    myContext.strokeStyle=color;
    myContext.fillStyle=color;
}

var line = document.getElementById("line");
var line1 = document.getElementById("line1");
var brush = document.getElementById("brush");
var Eraser = document.getElementById("Eraser");
var arr = [line,line1,brush,Eraser];
function setStatus(arr,n){
    for(var i=0;i<arr.length;i++){
        if(i==n){
            arr[i].style.backgroundColor = "sandybrown";
        }else{
            arr[i].style.backgroundColor = "white";
        }
    }
}
function drawLine(n){
    setStatus(arr,n);
    var paint = false;
    myDrawCanvas.onmousedown = function(e){
        e = window.event || e;
        //获得鼠标开始点击的位置
        var Sx = e.pageX -this.offsetLeft;//e.pageX鼠标距离页面左边的距离
        var Sy = e.pageY - this.offsetTop;//offsetLeft当前DOM距离页面左边的距离
        myContext.beginPath();
        myContext.moveTo(Sx,Sy);
        paint = true;
    };
    myDrawCanvas.onmousemove = function(e){
        e = window.event || e;
        //鼠标移动过程画线
        var Ex = e.pageX - this.offsetLeft;
        var Ey = e.pageY - this.offsetTop;
        if(paint){
            myContext.lineTo(Ex,Ey);
            myContext.stroke();
        }else{
            return false}
    };
    myDrawCanvas.onmouseup = function(){
        myContext.closePath();
        paint = false;
    };
    myDrawCanvas.onmouseout = function(){
        myContext.closePath();
        paint = false;
    }
}
function drawLine1(n){
    setStatus(arr,n);
    var paint = false;
    myDrawCanvas.onmousedown = function(e){
        e = window.event || e;
        //获得鼠标开始点击的位置
        var Sx = e.pageX -this.offsetLeft;//e.pageX鼠标距离页面左边的距离
        var Sy = e.pageY - this.offsetTop;//offsetLeft当前DOM距离页面左边的距离
        myContext.beginPath();
        myContext.moveTo(Sx,Sy);
        paint = true;
    };
    myDrawCanvas.onmouseup = function(e){
        e = window.event || e;
        //鼠标点击放开时画线
        var Ex = e.pageX - this.offsetLeft;
        var Ey = e.pageY - this.offsetTop;
        if(paint){
            myContext.lineTo(Ex,Ey);
            myContext.stroke();
        }else{
            return false}
        myContext.closePath();
        paint = false;
    };
    myDrawCanvas.onmouseout = function(){
        myContext.closePath();
        paint = false;
    }
}
/******* 橡皮擦 *******/
function dEraser(n){
    setStatus(arr,n);
    var paint = false;
    //鼠标按下也开始清除，范围为当前线宽的两倍
    myDrawCanvas.onmousedown=function(e){
        e=window.event||e;
        var sX=e.pageX-this.offsetLeft;
        var sY=e.pageY-this.offsetTop;
        myContext.clearRect(sX-myContext.lineWidth,sY-myContext.lineWidth,
            myContext.lineWidth*2,myContext.lineWidth*2);//开始位置减去一个线宽，长宽就为线宽的两倍
        paint=true;
    };
    // 鼠标移动时跟着轨迹一齐擦除
    myDrawCanvas.onmousemove=function(e){
        e=window.event||e;
        var X=e.pageX-this.offsetLeft;
        var Y=e.pageY-this.offsetTop;
        if(paint){
            myContext.clearRect(X-myContext.lineWidth,Y-myContext.lineWidth,
                myContext.lineWidth*2,myContext.lineWidth*2);
        }

    };
    //鼠标抬起，清除状态标志位
    myDrawCanvas.onmouseup=function(){
        paint=false;
    };
    myDrawCanvas.onmouseout=null
}
function brushLine(n){
    setStatus(arr,n);
    var paint = false;
    myDrawCanvas.onmousedown = function(e){
        e = window.event || e;
        //获得鼠标开始点击的位置
        var Sx = e.pageX -this.offsetLeft;//e.pageX鼠标距离页面左边的距离
        var Sy = e.pageY - this.offsetTop;//offsetLeft当前DOM距离页面左边的距离
        myContext.beginPath();
        myContext.moveTo(Sx,Sy);
        paint = true;
    };
    myDrawCanvas.onmousemove = function(e){
        e = window.event || e;
        //鼠标移动过程画线
        var Ex = e.pageX - this.offsetLeft;
        var Ey = e.pageY - this.offsetTop;
        if(paint){
            myContext.lineTo(Ex,Ey);
            myContext.stroke();
        }else{
            return false}
    };
    myDrawCanvas.onmouseup = function(){
        myContext.closePath();
        paint = false;
    };
    myDrawCanvas.onmouseout = function(){
        myContext.closePath();
        paint = false;
    }
}