# Broken App Issues

1. - No packages available

    > initiated npm, and installed express + axios.

2. - Err is not defined

    > The catch statement should have (err) as parameter. Implemented custom error handler.


3. - Cannot read property of undefined variable (developers)

    > this is happening because we need to use `app.use(express.json())` to parse json data.

4. - Connot read property 'name' of undefined.

    > looks like the Promises aren't being resolved because they are racing with 'out' variable. To fix, we need to wait for all promises being resolved before looping throught them.