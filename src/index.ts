export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return b + a;
};


let faker = require('faker');

// let hello: string = faker.name.findName()
// hello = "true"

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname
}

console.log(getFullName(faker.name.firstName(), faker.name.lastName()))


// aliases
type ID = string
// type PopularTag = string
// type MaybePopularTag = PopularTag | null

// const doSomeThing = (): never => {

//     throw new Error()
//     console.log("doSomeThing")
// }

// const doSomeThingAnother = (): any => {
//     console.log("doSomeThing")
// }

// const foo: any = "foo"
// console.log(foo.bar())


// let vAny: any = 10
// let vUnknown: unknown = 10

// let s1: string = vAny
// // let s2: string = vUnknown
// let s2: string = vUnknown as string

interface UserInterface {
  id: ID
  name: string
  surname: string
}

// const popularTags: PopularTag[] = ['dragon', 'coffee']
// const popularTags: MaybePopularTag = ""

// let user3: UserInterface | null = null

// let someProp: string | number | null | undefined | string[] | object 

// let page: any = 1
// let pageNumber1 =  page as string

// const someElement = document.querySelector('.foo') as HTMLInputElement

// console.log('someElement', someElement.value)

// const someElement2 = document.querySelector('.foo1')
// someElement2?.addEventListener('blur', (event => {
//     const target = event.target as HTMLInputElement
//     console.log('event', target.value)
// }))


// let usernames: string[] = [""]
// let pageName: string | number = "1"
// let pageNumber: string  = "1"

// let numericPageNumber: number = (pageNumber as unknown) as number

// let errorMessage: string | null = null

interface UserInterface {
  name: string
  age?: number
  getMessage(): string
}

const user: UserInterface = {
  name: faker.name.findName(),
  age: faker.random.number({ min: 18, max: 80 }),
  getMessage(): string {
    return 'Hello ' + this.name
  },
  id: "",
  surname: ""
}

// const user2: UserInterface = {
//     name: "Mike",
//     getMessage() {
//         return 'Hello ' + this.name
//     },
//     id: "",
//     surname: ""
// }

console.log(user.age, user.name)

interface UserInterface2 {
  getFullName(): string

}

class User2 implements UserInterface2 {
  private firstName: string
  private lastName: string
  readonly unchangeableName: string
  static readonly maxAge = 50


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.unchangeableName = firstName
  }

  // getFullName(): string {
  //     throw new Error("Method not implemented.")
  // }

  // changeUnchangeableName(): void {
  //     // this.unchangeableName = "foo"
  // }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}

class Admin extends User2 {
  private editor: string = "admin"

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }

}

const user4 = new User2(faker.name.firstName(), faker.name.lastName())
console.log(user4.getFullName())

const admin = new Admin(faker.name.firstName(), faker.name.lastName())
console.log(admin.getFullName())
admin.setEditor("Kapil")

console.log(admin.getEditor())

const addID = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id
  }
}

interface UserInterfaceGen<T, V> {
  name: string
  data: T
  meta: V
}

const user6: UserInterfaceGen<{ meta: string }, string> = {
  name: 'number is always king',
  data: {
    meta: "hello"
  },
  meta: "world"
}

const user7: UserInterfaceGen<string[], number> = {
  name: 'John',
  data: ['hello', 'world', 'this', 'is', 'a', 'test', 'string', 'array'],
  meta: 10
}

const result = addID<UserInterfaceGen<string[], number>>(user7)
const result2 = addID<UserInterfaceGen<{}, string>>(user6)
console.log("results", result)
console.log("results", result2)

const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2
}

console.log(statuses.inProgress)

enum StatusEnum {
  NotStarted = "notStarted",
  InProgress = "inProgress",
  Done = "done",
}


interface Task {
  id: String
  status: StatusEnum
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted

notStartedStatus = StatusEnum.InProgress

console.log(notStartedStatus)


const task1: Task = {
  id: "1",
  status: StatusEnum.Done
}

const task2: Task = {
  id: "2",
  status: StatusEnum.NotStarted
}

const task3: Task = {
  id: "3",
  status: StatusEnum.InProgress
}

console.log(task1.id, task1.status)
console.log(task2.id, task2.status)
console.log(task3.id, task3.status)
