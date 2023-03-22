Numbers = ["1","2","3","4","5","6","7","8","9"]
print(Numbers)
for Number in Numbers:
    if Number == "1":
        print(Number+"st")
    elif Number == "2":
        print(Number+"nd")
    elif Number == "3":
        print(Number+"rd")
    else:
        print(Number+"th")