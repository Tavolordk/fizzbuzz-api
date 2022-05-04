const FizzbuzzService = require("../lib/services/FizzbuzzService");

describe("2)Probando FizzBuzz Test",()=>{
    test("Ver si imprime Fizz, Buzz o FizzBuzz",()=>{
        const explorer = {name:"Tavo",score:5};
        const resultado = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(resultado.trick).toBe("BUZZ");
    });

    test("Ver si imprime Fizz, Buzz o FizzBuzz",()=>{
        const explorer = {name:"Tavo",score:3};
        const resultado = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(resultado.trick).toBe("FIZZ");
    });

    test("Ver si imprime Fizz, Buzz o FizzBuzz",()=>{
        const explorer = {name:"Tavo",score:16};
        const resultado = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(resultado.trick).toBe(16);
    });

    test("Ver si imprime Fizz, Buzz o FizzBuzz",()=>{
        const explorer = {name:"Tavo",score:15};
        const resultado = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(resultado.trick).toBe("FIZZBUZZ");
    });
});