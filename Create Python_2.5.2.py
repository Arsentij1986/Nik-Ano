word = input("Введите слово на латинском алфавите строчными буквами: ")
glas = ['a','o','i','u','e']
g = 0
s = 0
a = word.count('a')
o = word.count('o')
i = word.count('i')
u = word.count('u')
e = word.count('e')
for index in range(len(word)):
	if word[index] in glas:
		g += 1
	else:
		s += 1
print("Количество гласных букв: ", g)
print("Количество согласных букв: ", s)
if (a == 0): 
    print ("a = False") 
else: print("a =", a)
if (o == 0): 
    print ("o = False") 
else: print("o =", o)
if (i == 0): 
    print ("i = False") 
else: print("i =", i)
if (u == 0): 
    print ("u = False") 
else: print("u =", u)
if (e == 0): 
    print ("e = False") 
else: print("e =", e)
