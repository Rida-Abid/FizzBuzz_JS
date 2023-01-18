
class Logic {
     ProcessMethod(fizzId, buzzId, maxCount) {
         var result = [];
         if ((fizzId < 1) || (buzzId < 1) || (maxCount < 1));
         result.append("Enter all numbers greater than 0");
         return result;

         for (let i = 0; i < maxCount; i++) {
             result.append(this.CalcMethod(i, fizzId, buzzId));
             return result;
         }
     }

    CalcMethod(i, fizzId, buzzId) {

        if ((i % fizzId == 0) && (i % buzzId)) {
            return "fizzbuzz";
        }
        else if (i % fizzId == 0) {
            return "fizz";
        }
        else if (i % buzzId) {
            return "buzz";
        }
        else{
            return i;
        }

        
    }

}


