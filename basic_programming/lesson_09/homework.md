На выбор, одну из двух:

#### 1. 
Давайте напишем программу длч коые-машины.    
Каждый решепт кофе определяется колтчеством кофе, количеством молока, количеством воды. Таким образом у вас должен быть метод который принимает 3 int: coffee, milk, water. Метод должен 
выводить на экран что-то типа:
~~~~
добавляю:
  кофе: 20 грамм
  молоко: 50ml 
  вода: 70ml
~~~
можете вывод сделать на свое усмотрение, чуть красивее, но цифры должгы передаваться в параметрах
В main дайте пользователю возможность выбрать вид кофе: 1. эспрессо, 2. лате .... и т.д. Ваша программа должна подготовить параметры для приготовления кофе в соответствие 
с выбором и "принотовить" кофе, вызвав ваш метод.

 	    

#### 2. чуть сложнее
Немного азартных игр. Написать метод, который принимает 3 строки, каждая из которыз текстом записанная цифра например так ("one","five","six"). В рамках данной задачи строки всегда корректны и могут быть только:
one,two, three, four, five, six, seven, eight, nine.  Ваш метод должен возвращать int обозначающий выйгрыш: 
* 1000 - если комбинация 777,                                                             
* 500 - если комбинация, цифры идущие в обратном порядке, например 876 или 765 или 987
* 250 - если комбинация, цифры идущие в прямом порядке, например 678 или 567 или 789
во всех остальных случаях, 0
 