cities = {
    "Moscow":{
        "Country:":"Russia",
        "Population:":12632409,
        "Fact:":"The biggest city in Russia",
    },
    "St.Petersburg":{
        "Country:":"Russia",
        "Population:":5384000,
        "Fact:":"It used to be called Leningrad",
    },
    "London":{
        "Country:":"Great Britain",
        "Population:":8908081,
        "Fact:":"There are 850 bridges in the city",
    },
}
for key,value in cities.items():
    print("\n",key)
    for key2,value2 in value.items():
        print("\t",key2,value2)