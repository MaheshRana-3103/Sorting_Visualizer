async function insertion(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background="red";
    for(let i=1;i<ele.length;i++)
    {
        let current=ele[i].style.height;
        ele[i].style.background="red";
        let j=i-1;
        await waitforme(delay);
        while((j>=0)&&(parseInt(current)<parseInt(ele[j].style.height)))
        {
            ele[j].style.background = '#00FF00';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay)

            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'yellow';
            }
        }
        ele[j + 1].style.height = current;
        ele[i].style.background = 'yellow';
    }
}

const insertbtn=document.querySelector(".insertion");
insertbtn.addEventListener('click',async function(){
    disablebtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enablebtn();
    enableNewArrayBtn();
    enableSizeSlider();
});