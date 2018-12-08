let ritskhvi = prompt('Chatsere ori ritskhvi').split(' '),
    a = +ritskhvi[0],
    b = +ritskhvi[1],
    sum = 0;

if((a <= 0 || b <= 0 ) || (a >= 1000 || b >= 1000) || a >= b ){
    alert('Arastsori Shualedi');
}
else{
    for(a; a<=b; a++){
        sum += a;
    }

    alert(sum);
}