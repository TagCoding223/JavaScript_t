label1:for(let i=0;i<4;i++){
    label2:for(let j=0;j<=i;j++){        
        if(j==1){
            continue label2;
        }
        process.stdout.write((j+1).toString());
    }
    if(i==3){
        break label1;
    }
    console.log();
}

