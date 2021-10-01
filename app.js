var arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr.splice(3, 1)
    //element index and number of elements we want to remove
    //modifies the original array does not create a new like in slice
    // slice just removes first elemnet this removes specified index element

console.log(arr)