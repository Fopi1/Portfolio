def city_country(city,country):
    city_and_country = city.title()+" "+country.title()
    return city_and_country
while True:
    print("You can enter 'q' at any time to leave")
    city = input("Tell me city ")
    if city =="q":
        break
    country = input("Tell me the country in which this city is located ")
    if country == "q":
        break
    formatted_city_country = city_country(city,country)
    print(formatted_city_country)