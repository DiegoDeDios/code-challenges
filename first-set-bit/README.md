# Find first set bit
From : https://practice.geeksforgeeks.org/problems/find-first-set-bit/0
Given an integer an N. The task is to print the position of first set bit found from right side in the binary representation of the number.

Input:
The first line of the input contains an integer T, denoting the number of test cases. Then T test cases follow. The only line of the each test case contains an integer N.

Output:
For each test case print in a single line an integer denoting the position of the first set bit found form right side of the binary representation of the number. If there is no set bit print "0".

Constraints:
1 <= T <= 200
0 <= N <= 106

Example:
Input:
2
18
12

Output:
2
3

Explanation:
Testcase 1: Binary representation of the 18 is 010010, the first set bit from the right side is at position 2.

# My Solution / Mi Solución

## EN
  The problem is trying to say that by receiving a number _t_ we want to find the position of the first set bit on its binary representation. Mi solution implies using the **& (AND)** operator as a mask between the number _t_ and a mask _n_
For example:
  Let t = 18, its binary representation as a 5 bit value is  **0b10010** The mask n begins as a value of n = 1, in other words: its binary representation **0b00001**. Notice how if we make the logical operation  **t&n** the result is 0 (_10010 & 00001 = 00000_) However, if we make a bit shift to the left on the mask n once we find the first set bit the operation **t&n**  becomes a value different than 0. Then we can say that the first set bit is equivalent to the number of bit shifts to the left before **t&n**  becomes a value different than 0.
## ES
  Lo que el problema quiere decir es que al recibir un número _t_ queremos encontrar la posición del primer bit encendido en su representación binaria. Mi solución implica un enmascaramiento de bits usando el operador **& (AND)** entre el número _t_ y una mascara _n_ 
Por ejemplo: 
    Sea t = 18, su representación en binario como un valor de 5 bits es **0b10010** La máscara n empieza con un valor de n = 1, es decir, en binario **0b00001** Notemos como si aplicamos la operación **t&n** el resultado es 0 (_10010 & 00001 = 00000_) . Sin embargo si empezamos a hacer un desplazamiento de un bit a la izquierda en la mascara, al momento de encontrar el primer bit encendido **t&n** se vuelve un valor diferente de 0. Entonces podemos encontrar la posición del primer bit encendido con el número de desplazamientos a la izquierda que hicimos sobre la máscara n.   
