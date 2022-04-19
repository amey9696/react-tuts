import React from 'react'

const SpreadOperator = () => {
    //1st case:-
    const arr1=["abc","xyz"];
    // const biodata=[1,...arr1,26,'male']; //it look like[id, [fname, lname],age,gender]
    const biodata=[1,26,'male',...arr1];//... used for call array here
    // console.log(arr1);
    // console.log(biodata);

    //2nd case:-
    const fruit=['mango'];
    const flover=['rose'];
    const nature=[...fruit, ...flover];
    // console.log(nature);

    //3rd case:-
    const fruits=['mango','banana','apple','jackfruit'];
    var [first,second,third,fourth,...remaining]=fruits;
    console.log(third);//mango
    // console.log(remaining);

    //4th case:-used in object (imp moatly used in development phase)
    const fullName={
        fname:"amey",
        lname:"palshetkar",
    }
    const cv={
        id:1,
        ...fullName,
        age:25,
        gender:'male'
    }
    // console.log(cv);
    return (
        <>
          <h1>Hi</h1>  
        </>
    )
}

export default SpreadOperator;