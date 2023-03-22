Names = ["Admin","Misha","Olivia","Gena","Eric"]

for Admin in Names:
    if Admin == "Admin":
        print("Hello", Admin ,"would you like to see a status report?")
    else:
        print("Hello", Admin)

Names.remove("Admin")
Names.remove("Misha")
Names.remove("Olivia")
Names.remove("Gena")
Names.remove("Eric")

if Names:
   print("Da")
else:
    print("We need to find some users")
