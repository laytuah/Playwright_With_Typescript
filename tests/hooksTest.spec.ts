import { test } from '@playwright/test';

test.beforeAll(async()=>{
 console.log("This is Beforeall hook")
})

test.beforeEach(async()=>{
 console.log("This is BeforeEach hook")
})

test('Test 1 @smoke',async()=>{
 console.log("This is Test 1")
})

test('Test 2 @regression',async()=>{
    console.log("This is Test 1")
   })

test.afterAll(async()=>{
 console.log("This is afterAll hook")
})

test.afterEach(async()=>{
 console.log("This is afterEach hook")
})