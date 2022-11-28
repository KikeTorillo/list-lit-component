# List-lit-component

This is a card component made with lit

![](https://raw.githubusercontent.com/KikeTorillo/imagenes/main/List-component.png?token=GHSAT0AAAAAAB3XW4DF6GSBQVNO5TMKUXSAY4FHESA)

![](https://raw.githubusercontent.com/KikeTorillo/imagenes/main/List-component2.png?token=GHSAT0AAAAAAB3XW4DEHOVBYFFN4CU6SFIUY4FHE5Q)

## How to install

npm install --save git+https://github.com/KikeTorillo/list-lit-component.git

## How to import

it is necesary to import the class which is saves in node modules folder

import { ListLit } from "list-lit-component/src/list-lit.js"
import { ListItemLit } from "list-lit-component/src/list-item-lit.js"

this web component use a Relative length unit REM so it is necesary to reset de html font size with 62.5%

## How to set the attributes and color in the component  

- --color-list: this is the variable to allow change the background of the container list
- -border-color: this is the variable to allow change the border color of the container list
- --position-items: this is the variable to allow change the position of the items which could be start, center or end.
- --hover-color: this is the variable to allow change the hover color of the text.
- --text-color: this is the variable to allow change the color of the text.
- content: this attribute is used inside of the component list-item-lit to define de content of the list item.


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html{
            font-size: 62.5%;
            font-family: "Gill Sans", sans-serif;
        }
        *{
            --color-list: pink;
            --border-color: blue;
            --position-items: center;
            --hover-color: blue;
            --text-color: black;
        }
    </style>
</head>
<body>
        <list-lit>
            <list-item-lit content="item"></list-item-lit> 
            <list-item-lit content="item2"></list-item-lit> 
            <list-item-lit content="item3"></list-item-lit> 
            <list-item-lit content="item5"></list-item-lit> 
            <list-item-lit content="item6"></list-item-lit> 
            <list-item-lit content="item7"></list-item-lit> 
            <list-item-lit content="item8"></list-item-lit> 
            <list-item-lit content="item9"></list-item-lit> 
        </list-lit>
    <script src="./src/list-lit.js" type="module"></script>
    <script src="./src/list-item-lit.js" type="module"></script>
</body>
</html>
```

###End