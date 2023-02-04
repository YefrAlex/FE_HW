
//     ДЗ.
//  0. Наполнить массив products подобными объектами, с разными значениями
  const products = [
    {
        id: 1,
        name: "Iphone 14",
        price : 100000,
        category: "phone"
    },
    {
        id: 2,
        name: "Iphone 13",
        price : 80000,
        category: "mobile"
    },
    {
        id: 3,
        name : "Iphone 12",
        price: 70000,
        category: "phone"
    },
    {
        id: 4,
        name : "Iphone 11",
        price: 65000,
        category: "mobile"
    },
    {
        id: 5,
        name : "Iphone 10",
        price: 88005,
        category: "phone"
    },
    {
        id: 6,
        name : "Iphone 9",
        price: 55000,
        category: "mobile"
    },
    {
        id: 7,
        name : "Iphone 8",
        price: 50000,
        category: "phone"
    }
    ,
    {
        id: 8,
        name : "Iphone 7",
        price: 89000,
        category: "mobile"
    }
]
    
    // 1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
    // скидкой 10%
    const productsDiscount = products.map(product => console.log(` ${product.name} SLAE!!! discont 10%!!!! New price is ${product.price*90/100}}`));

    // 2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
    //     продукты:
    //         а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
    //         б) категория который "phone"; const categoryPhone = []
    
    const minPrice = 88000;
    const category = "phone";
    
    const topPrice = products.filter(product => product.price > minPrice);
    const onlyPhone = products.filter(product => product.category === category);
    
    console.log(topPrice);
    console.log(onlyPhone);

    // 3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
    //     max(10, 20) // 20
    //     max(100, 5) // 100

    let firstNumber = + prompt('Введите первое число ')
    let secondNumber = + prompt('Введите второе число ')
    function maxNumber (firstNumber, secondNumber) {

    if (firstNumber > secondNumber) 
        console.log(firstNumber)
    else
    console.log(secondNumber)
    }
     maxNumber(firstNumber, secondNumber)



    // 4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
    //     и "НЕЧЕТ", если нечетное

    let number = + prompt('Введите целое число ')

    function evenOdd (number) {

        if (number%2 === 0) 
            console.log ("Ваше число четное")
           else     
                console.log("Ваше число не четное")
            };
            
            console.log(evenOdd(number));



    // 5. Написать функцию, которая получает два числа и возводит первое число в степень второго
    //     power(10, 2) // 100
    //     power(12, 2) // 144
    //     power(2, 5) // 32
    let firstNumberM = + prompt('Введите  число ')
    let secondNumberM = + prompt('Введите степень ')
 
    console.log(Math.pow(firstNumberM, secondNumberM))

    