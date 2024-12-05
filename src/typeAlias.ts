// TypeAlias in ts

// primitive Types
type UserName = String
type YesorNo = Boolean
type Int = number

let userName_: UserName = 'melvin'
let isEng_: YesorNo = true
let age__:Int = 24


// array

type NameArray = string[]

let userNames: NameArray = ['a','b']


// object

type User = {
    name: UserName;
    age:Int,
    isEng:YesorNo
}

let user:User = {
    name: 'melvin',
    age: 24,
    isEng: true
}


// Union Type

type StrorNum = String| Number;

let error:StrorNum = 'this is error'

error = 401


// Tuples

type Name_age_iseng = [name: String, age:number, isEng: boolean]

let userTuple_:Name_age_iseng = ['melvin',24,true]
