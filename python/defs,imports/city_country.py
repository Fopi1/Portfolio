def show_city_country(city,country,population = ""):
	cityT = city.title()
	countryT = country.title()
	if population:
		formatted_city_country = cityT+", "+countryT+" - "+"population"+" "+str(population)
	else:
		formatted_city_country = cityT+", "+countryT
	return formatted_city_country
show_city_country("Moscow","Russia",5)