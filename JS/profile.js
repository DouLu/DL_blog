/**
 * Created by Administrator on 2016/10/6.
 */
function profile(){
    var box1_center = document.getElementById("box1_center");
    var box1_left = document.getElementById("box1_left");
    var box1_right = document.getElementById("box1_right");
    box1_left.style.display = "none";
    box1_right.style.display = "none";
    box1_center.style.display = "block";
}
function close1(){
    var box1_center = document.getElementById("box1_center");
    var box1_left = document.getElementById("box1_left");
    var box1_right = document.getElementById("box1_right");
    box1_left.style.display = "block";
    box1_right.style.display = "block";
    box1_center.style.display = "none";
}