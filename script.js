
demo('demo');

function demo(id){
    var oBox=document.getElementById(id);
    var Prev=document.getElementById('prev');
    var Next=document.getElementById('next');
    var Img=oBox.getElementsByTagName('img');
    var len=Img.length;
    var iNow=0;

    Prev.onclick=function(){
        Img[iNow].className='hide2';
        iNow--;
        if(iNow<0){
            iNow=len-1;
        }
        Img[iNow].className='show2';
    };

    Next.onclick=function(){
        Img[iNow].className='hide';
        iNow++;
        if(iNow>=len){
            iNow=0;
        }
        Img[iNow].className='show';
    };
};
