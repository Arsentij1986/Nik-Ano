mike = int(input("Сколько долларов у Майкла? "))
ivan = int(input("Сколько долларов у Ивана? "))
x = int(input("Какая минимальная сумма для инвестиций? "))
if (x <= mike) and (x <= ivan):
	print("2")
elif (x <= mike) and (x > ivan):
	print("Mike")
elif (x <= ivan) and (x > mike):
	print("Ivan")
elif (x > mike) and (x > ivan) and (x <= (mike + ivan)):
	print("1")
else:
	print("0")
