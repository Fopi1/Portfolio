Current_Users = ["Gena","Eric","Ben","Andrey","Sergey"]
New_Users = ["Misha","GEna","Eric","Dima","Roma"]

for New_User in New_Users:
    if New_User.title() in Current_Users:
        print("Occupied")
    elif New_User.title() not in Current_Users:
        print("Available")