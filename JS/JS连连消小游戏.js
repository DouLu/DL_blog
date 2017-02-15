/**
 * Created by Administrator on 2016/10/3.
 */
window.onload = game;//注意map后面不要圆括号


function map(){
    //地图数组
    var arrN = new Array(96);
    var arr = new Array(96);
    for(var i=0;i<arr.length;i++){arr[i] = false;}
    for(var i=0;i<arrN.length;i++){
        var num;
        do{
            num= Math.floor(Math.random()*96);
            arrN[i] = num+1;
        }while(arr[num]);
        arr[num] = true;
    }

    var xiao = document.getElementById("xiao");
    var PTable = document.createElement("table");
    PTable.setAttribute("id","PTable");
    xiao.appendChild(PTable);
    for(var i = 1;i<9;i++){
        var Ptr = document.createElement("tr");
        Ptr.setAttribute("id","Ptr"+i);
        PTable.appendChild(Ptr);
        for(var j=1;j<13;j++){
            var Ptd = document.createElement("td");
            var n = 12*(i-1)+j;
            Ptd.setAttribute("id",n+"Ptd");
            var tr = document.getElementById("Ptr"+i);
            tr.appendChild(Ptd);
        }
    }
    for(var i=0;i<96;i++){
            var td = document.getElementById(arrN[i]+"Ptd");
           if(i<16){
               td.style.width = '40px';
               td.style.height = '40px';
               td.style.borderRadius = '30px';
               td.style.backgroundColor = 'orange';
            }else if(i<32){
               td.style.width = '40px';
               td.style.height = '40px';
               td.style.borderRadius = '30px';
               td.style.backgroundColor = 'palevioletred';
           }else if(i<48){
               td.style.width = '40px';
               td.style.height = '40px';
               td.style.borderRadius = '30px';
               td.style.backgroundColor = 'white';
           }else if(i<64){
               td.style.width = '40px';
               td.style.height = '40px';
               td.style.borderRadius = '30px';
               td.style.backgroundColor = 'blueviolet';
            }else if(i<80){
               td.style.width = '40px';
               td.style.height = '40px';
               td.style.borderRadius = '30px';
               td.style.backgroundColor = 'pink';
           }else{
               td.style.width = '40px';
               td.style.height = '40px';
               td.style.borderRadius = '30px';
               td.style.backgroundColor = 'palegreen';
            }
        }
    return arrN;
}
function game(){
    map();
    var arrM = new Array(1);
    arrM = map();
    var check = new Array(2);
    var n=0;
    for(var i=0;i<96;i++){
        var td = document.getElementById(arrM[i]+"Ptd");
        td.onmousedown = mouseDown;	//设置mousedown事件

    }
    function mouseDown(){
        check[n] = this.id;
        color0 = document.getElementById(this.id).style.backgroundColor;
        if(n>0){
            color1 = document.getElementById(check[n-1]).style.backgroundColor;
            if(color0==color1&&this.id!=check[n-1]){
                document.getElementById(this.id).style.backgroundColor = 'transparent';
                document.getElementById(check[n-1]).style.backgroundColor = 'transparent';
            }
        }
        n++;
    }

}
function refresh(){
    var t = document.getElementById("PTable");
    t.parentNode.removeChild(t);

    game();
}