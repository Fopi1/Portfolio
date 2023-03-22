People = {
        "TpaBoMaH":{
            "First_Name":"Timur",
            "Last_Name":"Hafizov",
            "City":"Moscow",
            "Age":23,
        },
        "Dendi":{
            "First_Name":"Danil",
            "Last_Name":"Ishutin",
            "City":"Kiev",
            "Age":33,
        },

    }
for users,information in People.items():
    print("Name:",users)
    print("Full name:", information["First_Name"]+ " "+information["Last_Name"])
    print("He was born in", information["City"])
    print("He is",information["Age"],"years old")