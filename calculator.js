function add(a,b)
{
    return a+b
}

function subtract(a,b)
{
    return a-b
}

function Product(a,b)
{
    return a*b
}

function Divide(a,b)
{
    if (b==0)
    {
        return undefined;
    }
    return a/b
}

module.exports.add=add;
module.exports.Product=Product;
module.exports.Divide=Divide;
module.exports.subtract=subtract;
