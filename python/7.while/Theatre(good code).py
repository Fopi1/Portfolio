prompt = "Enter your age in numbers "
while True:
    age = int(input(prompt))
    if age<3:
        print("Your ticket is free")
        Yes_no = "Do you have any other children?"
        Yes_no += "\n(Please enter 'Yes' or 'No') "
        Yes = input(Yes_no)
        if Yes.title() == "Yes":
            continue
        else:
            break
    if age in range(3,13):
        print("Your ticket costs 10$")
        Yes_no = "Do you have any other children?"
        Yes_no += "\n(Please enter 'Yes' or 'No') "
        Yes = input(Yes_no)
        if Yes.title() == "Yes":
            continue
        else:
            break
    if age > 12:
        print("Your ticket costs 15$")
        Yes_no = "Do you have any other children?"
        Yes_no += "\n(Please enter 'Yes' or 'No') "
        Yes = input(Yes_no)
        if Yes.title() == "Yes":
            continue
        else:
            break