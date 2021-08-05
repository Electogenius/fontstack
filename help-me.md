# guide
The name "fontstack" is a pun I'm quite proud of. It's a stack based language where fonts are commands. (A font stack in css is a list of fonts. The browser displays text in the first font of the stack that it supports.)

Code consists of 6 fonts:
- menlo
- courier
- serif
- sans-serif
- cursive
- fantasy

Note: the text can have any value as long as it is not a number, the font is what matters (also numbers can be in any font)

It's obvious that it's hard to code in 6 fonts

So i've made an "official" text method to store fontstack code.

```
10 serif .courier .menlo
```
A code reader reads each keyword (seperated by spaces)

It's case sensitive for no reason

The # denotes italics (since it's slanted in many fonts) and the . means bold ("." is a bit of a 'bold sentence marker', isn't it)

\# and . can be anywhere in the keyword, so "#menlo" is the same as "me#nlo"

the numbers denote data values and are ignored by the mess that runs your program.

Fontstack supports multiple stacks

## what these keywords actually do:
Italics are simple actions
- italics
  - menlo: push 0 to stack
  - courier: pop top of stack
  - serif: increment top of stack by 1
  - sans-serif: decrement top of stack by 1
  - cursive: double top of stack
  - fantasy: halve top of stack

Plain fonts (neither bold nor italic) are almost the same as italic actions, usually having parameters. Here l represents the previous keyword (which has to be a number)

- plain
  - menlo: push l to stack
  - courier: remove the first item in the stack
  - serif: increment top of stack by l
  - sans-serif: decrement top of stack by l
  - cursive: multiply top of stack with l
  - fantasy: divide top of stack by l

Bold represents a super advanced high-tech fancy hacker action.

Text is pushed to a string where it can later be printed out.

- bold
  - menlo: print the text in the string then resets the string
  - courier: add the value at the top of the stack as an ascii character to the string
  - serif: goes to the next stack
  - sans-serif: goes to the previous stack
  - cursive: if the top of the stack is not 0, increment the position of the code reader by l
  - fantasy: perform the function with id of l (there can be up to 3 parameters as numbers, after the keyword)

That last one was added because this wasn't enough actions.

Here I represent arguments as $1, $2 and $3
functions:
- id 0: "peek"<br>
Sets the top of the stack to the value of the cell thingy $1 cells below the top of the stack (so "add 10; push 1; push 39; peek 1" results in the stack becoming [10,39,10])

Uh more functions coming soon

Bold italics are valid, they do the italic function then the bold function, which makes it rather useless. It also seems that courier doesn't have an italic bold version.

# Other random things:
- the numbers in the editors are red as a form of syntax highlighting.
