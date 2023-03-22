Weekends = {}
prompt = "Enter your name "
prompt2 = "Enter where you want to spend your weekends "
while True:
    Name = input(prompt)
    Place = input(prompt2)
    Weekends[Name] = Place
    Answer = input("Would you like to let another person go to weekends? (yes/no) ")
    if Answer.title() == "Yes":
        continue
    else:
        break
for name,place in Weekends.items():
    print(name.title(),"would like to go in",place.title())