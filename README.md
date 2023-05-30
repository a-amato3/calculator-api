# Calculator API

This is a simple calculator API built using NestJS framework. It provides a single endpoint `/calculator/calculate` to perform basic arithmetic operations on two operands.

## Implementation Rationale

The implementation of the calculator API follows a basic approach. The `CalculatorController` class defines a single POST endpoint `/calculate` which accepts a JSON body containing two operands and the desired operation. The controller performs the requested operation and returns the result as a JSON response.

The rationale behind this implementation is to perform basic calculations using an HTTP API. The code is takes advantage of using NestJS decorators.

## Usage

npm run start

1. Start the app with 'npm run start':

2. By default, the API server runs on http://localhost:3000. You can access the calculator endpoint at http://localhost:3000/calculator/calculate.

3. Use cURL or Postman to send a POST request to the /calculator/calculate endpoint with the following payload:
```
    {
      "operand1": 10,
      "operand2": 5,
      "operation": "+"
    }
```
Replace the values of operand1, operand2, and operation as per your calculation requirements.

4. The API will respond with a JSON object containing the problem (the operands and operation) and the solution (the calculated result).

## Examples

# Addition
To perform an addition calculation, send a POST request to /calculator/calculate with the following payload:

```
{
  "operand1": 10,
  "operand2": 5,
  "operation": "+"
}
```

The API response will be:

```
{
  "problem": {
    "op1": 10,
    "op2": 5,
    "operation": "+"
  },
  "solution": 15
}
```

# Subtraction
To perform a subtraction calculation, send a POST request to /calculator/calculate with the following payload:

```
{
  "operand1": 10,
  "operand2": 5,
  "operation": "-"
}
```
The API response will be:

```
{
  "problem": {
    "op1": 10,
    "op2": 5,
    "operation": "-"
  },
  "solution": 5
}
```

# Multiplication
To perform a multiplication calculation, send a POST request to /calculator/calculate with the following payload:


```
{
  "operand1": 10,
  "operand2": 5,
  "operation": "*"
}
```

The API response will be:

```
{
  "problem": {
    "op1": 10,
    "op2": 5,
    "operation": "*"
  },
  "solution": 50
}
```
# Division
To perform a division calculation, send a POST request to /calculator/calculate with the following payload:

```
{
  "operand1": 10,
  "operand2": 5,
  "operation": "/"
}
```

The API response will be:

```
{
  "problem": {
    "op1": 10,
    "op2": 5,
    "operation": "/"
  },
  "solution": 2
}
```
