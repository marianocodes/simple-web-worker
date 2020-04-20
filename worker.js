'use strict'

const fibonacci = (num) => {
  if (num <= 1) return 1
  postMessage(`Fibonacci number to calculate: ${num}`)
  return fibonacci(num - 1) + fibonacci(num - 2)
}

const res = fibonacci(1000)
postMessage(`Final Result: ${res}`)


