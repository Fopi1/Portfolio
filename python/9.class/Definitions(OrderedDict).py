from collections import OrderedDict
#Эта залупа сортирует их как то
Definitions = OrderedDict()
Definitions ["for"] = "for"
Definitions ["while"] = "while"
Definitions ["print"] = "print"
Definitions ["print"] = "print"
for name,value in Definitions.items():
	print(name.title(),"doing",value)