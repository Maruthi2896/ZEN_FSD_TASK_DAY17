

let timer1=(num)=>{
    let count = num;
    const content = document.querySelector('#countdown');
            setTimeout(()=>{
                content.innerHTML = count--;
                setTimeout(()=>{
                    content.innerHTML = count--;
                    setTimeout(()=>{
                        content.innerHTML = count--;
                        setTimeout(()=>{
                            content.innerHTML = count--;
                            setTimeout(()=>{
                                content.innerHTML = count--;
                                setTimeout(()=>{
                                    content.innerHTML = count--;
                                    setTimeout(()=>{
                                        content.innerHTML = count--;
                                        setTimeout(()=>{
                                            content.innerHTML = count--;
                                            setTimeout(()=>{
                                                content.innerHTML = count--;
                                                setTimeout(()=>{
                                                    content.innerHTML = count--;
                                                    setTimeout(()=>{
                                                        content.innerHTML = "Happy Independence Day";
                                                    },1000);
                                                },1000);
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
}
 
let maruthi1=(num,callback)=>{
   callback(num);
}

maruthi1(10,timer1);