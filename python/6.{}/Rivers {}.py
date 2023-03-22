Rivers = {
    "Nile":"Egypt",
    "Volga":"Petersburg",
    "Velikaya":"Pskov",
    }
for River,City in Rivers.items():
    print("The",River,"runs through", City+".")

for River in Rivers:
    print(River)

for City in Rivers.values():
    print(City)