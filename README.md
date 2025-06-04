# JavaScript
<br/>
JavaScript Demo
<br/>
JS are single thread language.
<br/>
How does javascript execute code + call stack
<br/>
JavaScript Execution context
<br/>
[{}] <--Code files
<br/>
|<br/>
|**\_> Global Execution context.<br/>
|**> Function EC<br/>
|\_\_> Eval EC (IN react)<br/>
<br/>
[{}] --------->Memory Creation Phase<br/>
|\_\_>Execution Phase<br/>
<br/>

EX-> let val1 = 20;<br/>
     let val2 = 30;<br/>
     function add(n1, n2){<br/>
     let result = n1 + n2;<br/>
     return result;<br/>
    }<br/>
    let result = add(val1, v1l2);<br/>
    consol.log(result);<br/>
    ```
<br/>
1.Global Execution context.<br/>
2.Memory Phase.<br/>
3.Execution Phase.<br/>
<br/>


