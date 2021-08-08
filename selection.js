async function selection(){
    const ele = document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++)
    {   let mi=i;
        ele[i].style.background='orange';
        for(let j=i+1;j<ele.length;j++)
        {
            ele[j].style.background = '#00FF00';
            await waitforme(delay);
            if(parseInt(ele[mi].style.height) > parseInt(ele[j].style.height)){
                if(mi!=i){ele[mi].style.background='cyan';}
                mi=j;
            }
            else{
                ele[j].style.background='cyan';
            }
        }
        await waitforme(delay);
        swap(ele[mi], ele[i]);
        ele[mi].style.background='cyan';
        ele[i].style.background='yellow';

    }
}

const selectionbutn=document.querySelector(".selection");
selectionbutn.addEventListener('click',async function(){
    disablebtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await selection();
    enablebtn();
    enableNewArrayBtn();
    enableSizeSlider();
});
