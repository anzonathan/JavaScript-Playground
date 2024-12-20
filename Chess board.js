//Chess boards


let grid = 8;

for (let i = 1; i <= grid+1; i++){
    if (i % 2 == 0){ //if 'i' is even it will start with a #
        let row = "# # # # ";
        console.log(row);
    }
    else{ // If 'i' is odd it will start with a space
        let row = " # # # #";
        console.log(row);

    }
}
