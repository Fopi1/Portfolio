favorite_numbers = {
    "Misha":["19","24","27"],
    "Dima":["21","89","54"],
    "Ivan":["22","83"],
}
for name,value in favorite_numbers.items():
    print(name,"favorite numbers are:")
    for value in value:
        print("\t"+value)