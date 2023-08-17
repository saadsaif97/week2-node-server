### basic express server with single route
```
http://127.0.0.1:3000/?n=5
```
it will provide the sum of all numbers till the number argument

```
http://127.0.0.1:3000/?n=something
```

it will handle the error like this:
```JSON
{
"error": "Please enter a valid number",
"description": "something is not a valid number"
}
```
