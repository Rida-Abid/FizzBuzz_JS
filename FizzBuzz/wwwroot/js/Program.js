

var arr = [];
arr = prompt("Enter your numbers").split(" ");
Main(arr);

function Main(arr)
{
    if (arr.length != 3) {
        console.error("Please enter 3 values");
        console.log("Usage: fizzId, buzzId, maxCount");
    }

    else {
        var fizzId = parseInt(arr[0]);
        var buzzId = parseInt(arr[1]);
        var maxCount = parseInt(arr[2]);
        var result = [];

        if ((fizzId < 1) || (buzzId < 1) || (maxCount < 1)) {
            console.log("Enter all numbers greater than 0");
            return;
        }

        else {
            function Process(fizzId, buzzId, maxCount) {

                for (var i = 1; i <= maxCount; i++) {
                    result.push(Calc(i, fizzId, buzzId));

                }
                return result;
            }

            function Calc(i, fizzId, buzzId) {

                if ((i % fizzId == 0) && (i % buzzId == 0)) {
                    return "fizzbuzz";
                }
                else if (i % fizzId == 0) {
                    return "fizz";
                }
                else if (i % buzzId == 0) {
                    return "buzz";
                }
                else {
                    return (i);
                }
            }
            console.log(Process(fizzId, buzzId, maxCount));
        }
        
        
    }
     

}
